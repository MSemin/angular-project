import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(data => {
      console.log(data);
  });
  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:4200/assets/users.json');
  }

  getOrders(): Observable<any>{
    return this.http.get('http://localhost:4200/assets/orders.json');
  }

  getProducts(): Observable<any>{
    return this.http.get('http://localhost:4200/assets/products.json');
  }
}