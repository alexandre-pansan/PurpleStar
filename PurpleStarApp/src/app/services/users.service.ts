import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private _ulr = 'http://192.168.2.83:8080/synvia/users';
    
    constructor(private _http: HttpClient) {

    }

    getUsers(): Observable<Users[]> {
      return this._http.get<Users[]>(this._ulr);
    }

    getUser(): Observable<Users[]>{
      return this._http.get<Users[]>(this._ulr+"/6");
    }
    getUsersArea(id: string): Observable<Users[]>{
      return this._http.get<Users[]>(this._ulr+"/areas/"+id);
    }

}
