import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Skills } from '../interfaces/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    private _ulr = 'http://192.168.2.83:8080/synvia/';
    
    constructor(private _http: HttpClient) {

    }


    getSkill(id: number): Observable<Skills[]>{
      return this._http.get<Skills[]>(this._ulr+"/skills/"+id);
    }


}
