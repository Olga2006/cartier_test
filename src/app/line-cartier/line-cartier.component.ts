import { Component, OnInit, Input } from '@angular/core';
import { Partenaire } from '../core/models/partenaire.model';

@Component({
  selector: 'app-line-cartier',
  templateUrl: './line-cartier.component.html',
  styleUrls: ['./line-cartier.component.css']
})
export class LineCartierComponent implements OnInit {
  @Input() partenaire!: Partenaire;

  constructor() { }

  ngOnInit(): void {
  }

}
