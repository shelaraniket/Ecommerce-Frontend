import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any='';
  password:any='';

  loginError:any=false;
  loading:any=false;

  fb:FormBuilder=new FormBuilder()
  fg:any=null;

  constructor( private router :Router,private authservice :AuthserviceService) { }

  ngOnInit(): void {
    this.fg=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  login(){
    // console.log(this.fg.valid)
    // console.log(this.fg.value)
    // console.log(this.fg.value.email)
    // console.log(this.fg.value.password)
    // console.log(this.fg.get('email').value)
    // console.log(this.fg.get('password').value)

    if(this.fg.valid){
      this.loginError=false;
      this.loading=true;
      this.authservice.login(this.fg.get('email').value,this.fg.get('password').value).subscribe((data:any)=>{
        console.log("login Succesfully" , data);
        localStorage.setItem('token',data.token)
        console.log(data.token)
        this.router.navigate(['/'])
      },
        (err: any) =>{
        this.loginError=true;
        alert("Invalid Credentials")
        this.loading=false;
        console.log(`login error`,err)
      }
      )
    }
  }

}
