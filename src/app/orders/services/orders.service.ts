import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';

// décorateur qui rend cette classe utilisable en tant que service
@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  // on utilise l'url stockée dans le dossier environnement
  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) {
    console.log('test')
    this.refreshCollection;
  }

  public refreshCollection(): void{
    this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
     map((tab)=>{
        return tab.map((obj)=>{
          return new Order(obj)
        })
     })
    ).subscribe((data)=>{
      this.collection$.next(data)
    })
  }

  // get list of orders
   public get collection(): Observable<Order[]>{
     return this.collection$
   }

  //  public set collection(col : Observable<Order[]>){
  //    this.collection$ = col
  //  }

   public changeState(item: Order, state: StateOrder): Observable<Order>{
    // créer un nouvel objet avec le nouveau state
    const obj = new Order({...item})
    obj.state = state;
    return this.update(obj)
   }

   public update(item: Order): Observable<Order>{
     // appel
     return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
       tap(()=>{
         this.refreshCollection()
       })
     )
   }

   public add(item: Order): Observable<any>{
      return this.http.post<Order>(`${this.urlApi}/orders/`, item).pipe(
       tap(()=>{
         this.refreshCollection()
       })
     )
   }

    public getItemById(id: number): Observable<any>{
      return this.http.get<Order>(`${this.urlApi}/orders/${id}`)
   }

   public delete(item: Order): Observable<any>{
     return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`).pipe(
       tap(()=>{
         this.refreshCollection()
       })
     )
   }


  // post an order

  // put an order

  // getOrderById

  // delete an order


}

