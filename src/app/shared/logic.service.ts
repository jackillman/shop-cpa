import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Order } from '../entities/order';
// import { FirebaseService } from './firebase.service';

import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';



@Injectable()
export class LogicService {
  orderList:AngularFireList<any>;
  constructor(private http: HttpClient,private firebase: AngularFireDatabase){
    this.orderList = this.firebase.list('orders');
   }

  insertOrder(ord){
    this.orderList.push({
      name : ord.name,
      phone : ord.phone,
      thread : ord.thread,
      subid : ord.subid
    });
  }
  getOrders(){
  //  return  this.orderList.stateChanges;
  }
  postData(order){
    let body = {
      name: order.value.name,
      phone: order.value.phone,
      thread: order.value.thread,
      subid: order.value.subid
    }
    
   this.insertOrder(body);
    console.log('serviceorder',order)
    console.log('servicebody',body)
    return this.http.post('http://yourhappyshopping.ru/api-ad1/order.php', body)
    .subscribe(
       (data) => console.log(data),
       (error) => console.log(error)
       );               

}

//return this.http.post('http://localhost:60820/api/values', body); 
}
