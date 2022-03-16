import { Component, OnInit } from '@angular/core';
import { Cartier } from '../core/models/cartier.model';
import { CartierService } from '../core/services/cartier.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  searchTxt!: string;
  cartier: Cartier = {
    centralisation: [],
    finaliser: [],
    majRecement: [],
    dernierCreations: []
  };
  isLoaded: boolean = false;
  loadingErr: boolean = false;

  constructor(private cartierService: CartierService) {
  }

  ngOnInit(): void {
    this.chargerAll();
  }

  chargerAll(): void {
    this.cartierService.getAllCartier()
      .subscribe(
        response => this.cartier = response,
        (err) => {
          this.isLoaded = true
          this.loadingErr = true
        },
        () => { this.isLoaded = true }
      )
  }


}
