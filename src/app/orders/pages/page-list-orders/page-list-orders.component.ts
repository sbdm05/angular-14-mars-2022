import { Component, OnInit, Type } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

// décorateur
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public title = "Titre depuis le Parent"

  public collection!: Order[];
  // En-têtes du tableau
  public headers = ['Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State']

  constructor(
    private ordersService : OrdersService
  ) {
    // on veut subscribe à l'observable
    this.ordersService.collection.subscribe((data)=> {
      console.log(data)
      this.collection = data
    })
   }

  ngOnInit(): void {
  }

}
