import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

// décorateur
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor(
    private ordersService : OrdersService
  ) {
    // on veut subscribe à l'observable
    this.ordersService.collection.subscribe((data)=> console.log(data))
   }

  ngOnInit(): void {
  }

}
