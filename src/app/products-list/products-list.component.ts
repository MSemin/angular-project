import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../config-service.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private configService : ConfigServiceService) { }

  products: any = [];

  panelOpenState = false;

  ngOnInit(): void {this.configService.getProducts().subscribe(data => {
    console.log(data);
    this.products = data.products;
  })
  }
}
