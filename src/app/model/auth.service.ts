import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataSource: RestDataSource) { }

  authenticate(userName: string, password: string): Observable<boolean> {
    
    return this.dataSource.authenticate(userName, password);
  }

  get authenticated(): boolean {
    return this.dataSource.authenticate != null;
  }

  clear(){
    this.dataSource.auth_token = null;
  }
}
