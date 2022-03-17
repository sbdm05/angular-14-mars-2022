import { Component, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { StateOrder } from 'src/app/core/enums/state-order';

// décorateur
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public title = "Titre depuis le Parent";

  // transformer enum en tableau
  public states = Object.values(StateOrder);

  public collection$!: Observable<Order[]>;
  // En-têtes du tableau
  public headers = ['Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State']

  constructor(
    private ordersService : OrdersService
  ) {
    // on veut subscribe à l'observable
    this.collection$ = this.ordersService.collection
   }

  ngOnInit(): void {
  }

  public total(val: number, coef: number, tva?: number): number{
    console.log('test depuis total');

    if(tva){
      return val * coef * (1+ tva/100)
    }
    return val * coef;
  }

  public changeState(item: Order, event: Event): void{
    // récupérer la valeur de l'élément cliqué
    const target = event.target as HTMLSelectElement
    const state = target.value
    // appel vers méthode du service changeState
    this.ordersService.changeState(item, <StateOrder>state).subscribe((data)=>
      {
        // item.state = data.state
        // item = data
        // ici on affecte tout data à item
        Object.assign(item, data)
      })

  }

}
