import { Component, OnInit, Input } from '@angular/core';
import { Partenaire } from '../core/models/partenaire.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-cartier',
  templateUrl: './line-cartier.component.html',
  styleUrls: ['./line-cartier.component.css']
})
export class LineCartierComponent implements OnInit {
  @Input() partenaire!: Partenaire;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewProposition() {
    this.router.navigateByUrl(`centralisation/${this.partenaire.id}`);
  }

}
