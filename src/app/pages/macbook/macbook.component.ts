import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.css']
})
export class MacbookComponent implements OnInit {

  constructor(private authservice:AuthserviceService , private router:Router) { }
  cartvalue:any=1;
  ngOnInit(): void {
    this.allmacbooks()
  }
  allmacbook:any=[]
  allmacbooks(){
    this.authservice.AllMacBook().subscribe((data:any)=>{
      // console.log(data);
      this.allmacbook=data;
      // console.log(this.alliphone)
      console.log("xyz:" ,this.allmacbook)
    },
    (err:any) => {
      console.log(err);
    })
  }

  getMacById(id:any){
    this.router.navigate([`home/macbook/${id}`]);
  }
  itemadd:any=false

  addtocart(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any){
    console.log(model)
    console.log(price)
    console.log(color)
    console.log(storage)
    this.authservice.addtocartmac(model,price,color,storage,imageUrl,productId).subscribe((data:any)=>{
      console.log("cart data : ",data)
      // this.router.navigate(['cart'])
      // alert("Item Added to Cart")
      this.itemadd=true
      
    })
  }

  i=1;
  plus(){
    if(this.i !=10){
      this.i++;
      this.cartvalue=this.i

    }
  }

  minus(){
    if(this.i!=0){
      this.i--;
      this.cartvalue=this.i
    }
  }



}
