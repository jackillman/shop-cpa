import { Injectable } from '@angular/core';

import { Order } from '../entities/order';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  constructor(private firebase: AngularFireDatabase){ 
    
  }
  orderList:AngularFireList<any>;

  getData(){
    console.log( this.orderList)
    this.orderList = this.firebase.list('orders');
    return this.orderList;
  }

  insertOrder(ord){
    this.orderList.push({
      name : ord.name,
      phone : ord.phone,
      thread : ord.thread,
      subid : ord.subid
    });
  }
//   postData(order){
//     let body = {
//       name: order.value.name,
//       phone: order.value.phone,
//       thread: order.value.thread,
//       subid: order.value.subid
//     }
//     console.log('serviceorder',order)
//     console.log('servicebody',body)
//     return this.http.post('http://yourhappyshopping.ru/api-ad1/order.php', body)
//     .subscribe(
//        (data) => console.log(data),
//        (error) => console.log(error)
//        );               

// }

//return this.http.post('http://localhost:60820/api/values', body); 
}
