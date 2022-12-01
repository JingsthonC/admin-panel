import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable, } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //private apiURL = 'https://reqres.in/api/users';
  private apiURL = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiURL}/${user.id}`;
    return this.http.delete<User>(url)
  }
}
