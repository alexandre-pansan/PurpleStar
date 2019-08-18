import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  nome : string = "carinha la";
  cargo: string = "Lider de Marketing";
  email:String = "alexpjunior@terra.com.br"
  numero:String = "123123123"
  bio:String = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  users: Users[] = [];
  
  constructor(private _users: UsersService) {
    this._users.getUser(6).subscribe((user)=>{this.users = user;})
   }

  ngOnInit() {
  }

}

