import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() public headers!: string[];
  @Input() public collection!: Order[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.headers, 'ngOnInit');
    console.log(this.collection, 'collection ngOnInit')
  }

  ngOnChanges(){
    console.log(this.headers, 'ngOnChanges');
    console.log(this.collection, 'ngOnChanges')
  }

}
