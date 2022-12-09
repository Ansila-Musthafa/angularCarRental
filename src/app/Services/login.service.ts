import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  signup(register:any){
return this.http.post<any>(this.baseApiUrl +'/api/Accounts/Register/',register);

  }
  login(loginObj:any){
    return this.http.post<any>(this.baseApiUrl +'/api/Accounts/Login/',loginObj);
  }
}
