import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-iwatch',
  templateUrl: './iwatch.component.html',
  styleUrls: ['./iwatch.component.css']
})
export class IwatchComponent implements OnInit {
  IWatch:any=[];
  constructor( private authservice : AuthserviceService,private router : Router) { }

  ngOnInit(): void {
    this.alliwatch()
  }

  alliwatch(){
    this.authservice.AllIWatch().subscribe((data:any)=>{
      // console.log(data);
      this.IWatch=data;
      // console.log(this.IWatch)
      console.log("xyz:" ,this.IWatch)
    },
    (err:any) => {
      console.log(err);
    })
  }

  getIWatchById(id:any){
    this.router.navigate([`home/iwatch/${id}`]);
  }

  addtocart(model:any,price:any,color:any,InternalStorage:any,imageUrl:any,productId:any){
    this.authservice.addtocartwatch(model,price,color,InternalStorage,imageUrl,productId).subscribe((data:any)=>{
      console.log("cart data : ",data)
      // this.router.navigate(['cart'])
      // alert("Item Added to Cart")
      // this.authservice.count()
    })
  }
}
