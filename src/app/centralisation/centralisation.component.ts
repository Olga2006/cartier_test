import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adress } from '../core/models/adress.model';
import { Partenaire } from '../core/models/partenaire.model';
import { Proposition } from '../core/models/proposition.model';
import { CartierService } from '../core/services/cartier.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-centralisation',
  templateUrl: './centralisation.component.html',
  styleUrls: ['./centralisation.component.scss']
})
export class CentralisationComponent implements OnInit {

  proposition: Proposition = new Proposition;
  isLoaded: boolean = false;
  loadingErr: boolean = false;
  isValid: boolean = false;
  searchTxt!: string;

  listPartenaire: Partenaire[] = [];
  listRaisonSocial: string[] = [];
  listSiret: string[] = [];
  listSiren: string[] = [];
  listAdress: string[] = [];
  listVille: string[] = [];
  listCodePostal: string[] = [];

  raisonSocial: string | null = null;
  siret: string | null = null;
  siren: string | null = null;
  adress: string | null = null;
  ville: string | null = null;
  codePostal: string | null = null;

  constructor(private location: Location, private cartierService: CartierService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chargerProposition()
  }

  chargerProposition(): void {
    const idPartenaire = +this.route.snapshot.params['id'];
    this.cartierService.getAllPropositions().subscribe(
      response => {
        let index = response.findIndex(p => p.partenaire.id === idPartenaire)
        this.proposition = response[index]
      },
      (err) => {
        this.isLoaded = true
        this.loadingErr = true
      },
      () => {
        this.listPartenaire = [this.proposition.partenaire, ...this.proposition.listPartenairesProposition]
        this.listPartenaire.forEach(p => {
          this.listRaisonSocial.push(p.raisonSocial ? p.raisonSocial : '')
          this.listSiret.push(p.siret ? p.siret : '')
          this.listSiren.push(p.siren ? p.siren : '')
          this.listAdress.push(p.adress ? p.adress.adress ? p.adress.adress : '' : '')
          this.listVille.push(p.adress ? p.adress.ville ? p.adress.ville : '' : '')
          this.listCodePostal.push(p.adress ? p.adress.codePostal ? p.adress.codePostal : '' : '')
        })
        this.isLoaded = true
        this.onDataInit()
      })
  }
  onDataInit(): void {
    this.raisonSocial = this.listRaisonSocial.every((val, i, arr) => val === arr[0]) ? this.listRaisonSocial[0] : ''
    this.siret = this.listSiret.every((val, i, arr) => val === arr[0]) ? this.listSiret[0] : ''
    this.siren = this.listSiren.every((val, i, arr) => val === arr[0]) ? this.listSiren[0] : ''
    this.adress = this.listAdress.every((val, i, arr) => val === arr[0]) ? this.listAdress[0] : ''
    this.ville = this.listVille.every((val, i, arr) => val === arr[0]) ? this.listVille[0] : ''
    this.codePostal = this.listCodePostal.every((val, i, arr) => val === arr[0]) ? this.listCodePostal[0] : ''
  }

  onDataSend(): void {
    let centeredPartenaire = new Partenaire(
      this.proposition.partenaire.id,
      this.raisonSocial,
      this.proposition.partenaire.personNom,
      this.siret,
      this.siren,
      new Adress(this.proposition.partenaire.adress ? this.proposition.partenaire.adress.id : null, this.adress, this.ville, this.codePostal),
      new Date,
      this.proposition.partenaire.createDate
    )
    console.log('centeredPartenaire')
    console.log(centeredPartenaire)
  }
  goBack(): void {
    this.location.back();
  }

  addNewItem(newItem: string, labelTxt: string) {
    switch (labelTxt) {
      case 'Raison sociale':
        this.raisonSocial = newItem
        break;
      case 'SIRET':
        this.siret = newItem
        break;
      case 'SIREN':
        this.siren = newItem
        break;
      case 'Adresse':
        this.adress = newItem
        break;
      case 'Ville':
        this.ville = newItem
        break;
      case 'Code postal':
        this.codePostal = newItem
        break;
      default:
        return
    }
  }
}