import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private authservice:AuthserviceService) {
  }
  
  ngOnInit(): void {
    this.getalldetails()
  }
  
  CartItem:any=[]
  details:any=[]
  CartDetails:any=[]
  currentDateTime:any
  
  getalldetails(){
    this.authservice.getDetails().subscribe((data:any)=>{
      this.details=data[0];
      console.log(this.details)
      this.CartDetails=this.details.cartitems;
      // console.log(this.CartDetails)
      this.currentDateTime=this.details.date;
      // console.log(this.details.length)
      this.totalprice()
      
    })
  }

  Totalprice:any=0
  DeliveryCharges:any=500
  Total:any=0

  totalprice(){

    this.CartDetails.map((data : any)=>{
      // console.log(data)
      console.log( typeof data.price)
      this.Totalprice += data.price
      this.Total=this.Totalprice + this.DeliveryCharges
    })
    console.log(this.Totalprice)
  }
}
