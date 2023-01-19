import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  MacBookID:any
  Macbook:any
  constructor(private authservice:AuthserviceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.MacBookID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.MacBookID);
    this.authservice.getMacBokById(this.MacBookID).subscribe((data:any)=>{
      this.Macbook=data[0];
      console.log(this.Macbook);
    })
  }

  addtocart(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any){
    console.log(model)
    console.log(price)
    console.log(color)
    console.log(storage)
    this.authservice.addtocartmac(model,price,color,storage,imageUrl,productId).subscribe((data:any)=>{
      console.log("cart data : ",data)
     
    })
  }

}
