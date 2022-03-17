import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public item = new Order();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onAction(item: Order){
    console.log('on Action déclenché', item);
    // redirection
    this.router.navigate(['orders'])
  }

}
