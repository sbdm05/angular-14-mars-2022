import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  item!: Order;
  item$!: Observable<Order>

  constructor(
    private ordersService : OrdersService,
    private router: Router,
    private route : ActivatedRoute
  ) {
    // utiliser activated route pour extraire id
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id)
    // appeler getItemById(id)
    // utiliser le pipe Async
    this.item$ = this.ordersService.getItemById(id)

  }

  ngOnInit(): void {
  }

  public onAction(item: Order): void{
    // appel vers la méthode update par l'intermédiaire du service
    this.ordersService.update(item).subscribe(()=>{
      // redirection
      this.router.navigate(['orders'])
    })
  }

}
