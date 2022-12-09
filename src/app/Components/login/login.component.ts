import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { LoginservicesService } from 'src/app/Services/loginservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private loginservice:LoginService,private router:Router){

}

ngOnInit():void{
  // loginForm=new FormGroup({
//   email:new FormControl("",[Validators.required,Validators.email]),
//   pwd:new FormControl("",[
//     Validators.required,
//     Validators.minLength(10)
//   ]),
//});

}
loginForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  pwd:new FormControl("",[
    Validators.required,
    Validators.minLength(10)
  ]),
});
// isUserValid:boolean=false;

// // loginSubmitted(){
// //   this.loginservice.loginuser([this.loginForm.value.email,this.loginForm.value.pwd])
// //   .subscribe(res =>{
// //     if (res=='failure'){
// //       this.isUserValid=false;
// //       alert('login Unsuccesful');
// //       }
// //     else{
// //       this.isUserValid=true;
// //       alert('Login Succesfull');
// //       }
// //     });
// //     }

onLogin(){
  if (this.loginForm.valid){
   console.log(this.loginForm.value)
this.loginservice.login(this.loginForm.value)
 .subscribe({
         next:(res)=>{
         alert(res.message)
          this.loginForm.reset();
            this.router.navigate(['/carfluent/home/'])
   },
     error:(err)=>{
         alert(err?.error.message)
}
    })
}
 }
  


 get Username():FormControl{
   return this.loginForm.get('email') as FormControl;
 }
get Password():FormControl{
return this.loginForm.get('pwd') as FormControl;
}

}