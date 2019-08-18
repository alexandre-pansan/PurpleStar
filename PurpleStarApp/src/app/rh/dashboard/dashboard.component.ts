import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:Users[]=[];
  constructor(private _users: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        this._users.getUser(params.id).subscribe((users)=>{this.users = users});
      });

    
  }

}
