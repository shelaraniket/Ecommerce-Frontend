import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-podsdescription',
  templateUrl: './podsdescription.component.html',
  styleUrls: ['./podsdescription.component.css']
})
export class PodsdescriptionComponent implements OnInit {
  AirPodID:any=''
  AirPod:any=[]
  constructor(private authservice:AuthserviceService,private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    this.AirPodID = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.AirPodID);
    this.authservice.getAirPodById(this.AirPodID).subscribe((data:any)=>{
      this.AirPod=data[0];
      // console.log(this.AirPod);
    })
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
