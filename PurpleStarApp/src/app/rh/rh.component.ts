import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import { SkillsService } from '../services/skills.service';
import { Skills } from '../interfaces/skills';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {
  filterByString: string = '10'

  skills: Skills[]=[];
  nome:string
  users: Users[]=[]
  constructor(
    private _users: UsersService,
    private _skills: SkillsService
      ) { }

  ngOnInit() {
    this._users.getUsers().subscribe((users)=>{this.users = users});
  }

  getSkillName(id: number) {
    switch(id){
      case 1: return "Administração"; break;
      case 2: return "Relações Humanas"; break;
      case 3: return "Financeiro"; break;
      case 4: return "TI"; break;
      case 5: return "Controle de Qualidade"; break;
      case 6: return "Mama Mia"; break;

    }
  }


  callProfile(id: number){
    console.log(id);
  }
}
