import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  // loginuser(loginInfo:Array<string>){
  //   return this.http.post(this.baseApiUrl +'/api/Accounts/Login/',{
  //     Email:loginInfo[0],
  //     Password:loginInfo[1]
  //   },

  //   );
  // }
// signUp(userobj:any){
//   return this.http.post<any>(this.baseApiUrl+'/api/Accounts/Register/',userobj)
// }

//   login(loginInfo:any){
//     return this.http.post<any>(this.baseApiUrl +'/api/Accounts/Login/',loginInfo)

//   }
// }
}