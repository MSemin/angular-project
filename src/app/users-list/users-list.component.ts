import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../config-service.service';

interface Users{
  id : number;
  firstName : string;
  lastName : string;
}

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private configService : ConfigServiceService) { }

  users: any = [];

  panelOpenState = false;

  ngOnInit(): void {this.configService.getUsers().subscribe(data => {
    console.log(data);
    this.users = data.users;
  })
  }
}
