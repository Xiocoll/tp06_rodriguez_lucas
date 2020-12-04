import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nextTick } from 'process';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from './client';



@Injectable()
export class ClientService {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  addClient(Client: Client) {
    let body: URLSearchParams = new URLSearchParams();
    body.set('client', JSON.stringify(Client));
    return this.httpClient.post<Client>(
      environment.urlServer + '/user/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      }
    );
    
  }

  


  getToken(login: string, mdp: string) : Observable<any>{
    let body: URLSearchParams = new URLSearchParams();
    body.set('login', login);
    body.set('password', mdp);

   return this.httpClient.post<Object>(environment.urlServer + '/user/login', body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      });
      
  }

}