import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-iwatchdescription',
  templateUrl: './iwatchdescription.component.html',
  styleUrls: ['./iwatchdescription.component.css']
})
export class IwatchdescriptionComponent implements OnInit {

  constructor(private authservice :AuthserviceService,private router :Router,private activatedRoute:ActivatedRoute) { }
  iwathID:any=''
  IWATCH:any=[]
  ngOnInit(): void {
    this.iwathID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.iwathID);
    this.authservice.getIWatchById(this.iwathID).subscribe((data:any)=>{
      // console.log(data);
      this.IWATCH=data[0];

    })
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
