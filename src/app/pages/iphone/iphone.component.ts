import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  constructor( private authservice : AuthserviceService , private router:Router) { }

  ngOnInit(): void {
    this.alliphones()

  }

   alliphone:any=[]
   descriptions:any=[]

  alliphones(){
    this.authservice.AllIphone().subscribe((data:any)=>{
      // console.log(data);
      this.alliphone=data;
      // console.log(this.alliphone)
      // console.log("xyz:" ,this.alliphone)
    },
    (err:any) => {
      console.log(err);
    })
  }


  getbyid(id:any){
    this.router.navigate([`home/iphone/${id}`]);
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
