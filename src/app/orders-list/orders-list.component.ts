import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../config-service.service';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private configService : ConfigServiceService) { }

  panelOpenState = false;
  
  orders: any = [];

  ngOnInit(): void {this.configService.getOrders().subscribe(data => {
    console.log(data);
    this.orders = data.orders;
  })
  }
}
