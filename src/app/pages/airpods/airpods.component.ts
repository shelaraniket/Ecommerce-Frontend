import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.css']
})
export class AirpodsComponent implements OnInit {

  constructor( private authservice :AuthserviceService , private router:Router) { }

  ngOnInit(): void {
    this.allairpod()
  }

  allairpods:any=[]

  allairpod(){
    this.authservice.AllAirpod().subscribe((data:any)=>{
      // console.log(data);
      this.allairpods=data;
      // console.log(this.alliphone)
      console.log("xyz:" ,this.allairpods)
    },
    (err:any) => {
      console.log(err);
    })
  }

  getPodById(id:any){
    this.router.navigate([`home/airpod/${id}`]);
  }

  addtocart(model:any,price:any,imageUrl:any,productId:any){ 
    this.authservice.addtocartpod(model,price,imageUrl,productId).subscribe((data:any)=>{
      console.log("cart data : ",data)
      // this.router.navigate(['cart'])
      // alert("Item Added to Cart")
      // this.authservice.count()
    })
   }

}
