import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// décorateur qui rend cette classe utilisable en tant que service
@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private collection$!: Observable<Order[]>;

  // on utilise l'url stockée dans le dossier environnement
  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) {
    console.log('test')
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
     map((tab)=>{
        return tab.map((obj)=>{
          return new Order(obj)
        })
     })
    )
  }

  // get list of orders
   public get collection(): Observable<Order[]>{
     return this.collection$
   }

   public set collection(col : Observable<Order[]>){
     this.collection$ = col
   }

  // post an order

  // put an order

  // getOrderById

  // delete an order


}

