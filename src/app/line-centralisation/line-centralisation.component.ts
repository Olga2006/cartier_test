import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Partenaire } from '../core/models/partenaire.model';

@Component({
  selector: 'app-line-centralisation',
  templateUrl: './line-centralisation.component.html',
  styleUrls: ['./line-centralisation.component.scss']
})
export class LineCentralisationComponent implements OnInit {
  @Input() labelTxt!: string;
  @Input() singleData!: string;
  @Input() listData!: string[];
  @Input() isHeaderData!: boolean;
  @Input() listPartenaire!: Partenaire[];

  @Output() newItemSend = new EventEmitter<string>();

  onOptionSelect() {
    this.newItemSend.emit(this.singleData);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
