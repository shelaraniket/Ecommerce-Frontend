import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-iphonedec',
  templateUrl: './iphonedec.component.html',
  styleUrls: ['./iphonedec.component.css']
})
export class IphonedecComponent implements OnInit {
  dscription:any=[]
  constructor(private activatedRoute: ActivatedRoute,private authservice :AuthserviceService) { }
  iphoneID:any='';
  iphone:any=[];
  keyfeature:any=[];
  ngOnInit(): void {
    this.iphoneID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.iphoneID);
    this.authservice.getiphoneById(this.iphoneID).subscribe((data:any)=>{
      // console.log(data);
      this.iphone=data[0];
      console.log(this.iphone)
      this.keyfeature=this.iphone.keyFeature
      console.log(this.keyfeature)
      console.log(this.keyfeature.Memory)
    })
  }

  addtocart(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any){ 
    console.log(model)
    console.log(price)
    console.log(imageUrl)
    console.log(color)
    console.log(storage)

    this.authservice.addtocartiphone(model,price,color,storage,imageUrl,productId).subscribe((data:any)=>{
      console.log("cart data : ",data)
      // this.router.navigate(['cart'])
      alert("Item Added to Cart")
      // this.authservice.count()
    })
   }

}
