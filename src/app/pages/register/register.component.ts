import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullname:any='';
  email:any='';
  phone:any='';
  state:any='';
  country:any='';
  city:any='';
  dob:any='';
  pincode:any='';
  address:any='';
  gender:any='';
  password:any='';
  cpassword:any='';
  registerError=false

  constructor( private router :Router , private authservice :AuthserviceService) { }

  ngOnInit(): void {
  }

  register(){
     console.log(this.fullname)
    console.log(this.email)
    console.log(this.phone)
    console.log(this.address)
    console.log(this.dob)
    console.log(this.gender)
    console.log(this.password)
    console.log(this.cpassword)
    console.log(this.pincode)
    console.log(this.state)
    console.log(this.city)
    console.log(this.country)

    this.authservice.register(this.fullname,this.address,this.email,this.phone,
      this.dob,this.gender,this.password,this.cpassword,this.city,this.state,
      this.country,this.pincode).subscribe((data:any)=>{
      this.registerError=false;
      this.router.navigate(['/login'])
      alert(" User Register sucessfully")
      console.log(`register sucessful`,data)
    },
      (err: { message: any; })=>{
      this.registerError=true
      console.log(`register error`,err.message)
    })
  }
}
