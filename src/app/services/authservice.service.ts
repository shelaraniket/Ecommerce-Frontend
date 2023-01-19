import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  cartvalue:any

  // senddata(cartcount: Number) {
  //   this.cartvalue=cartcount;
  //   console.log(cartcount)
  // }
  
  
  constructor(private httpClient : HttpClient,) { 
    
  }
  
  public notifyLogin$ =new Subject();

  iphonearr:any=[];
  
  
//<--------------------------------- Authentication----------------------------------------------->
  
  register(name: any, address: any, email: any, phone: any, dob: any, gender: any, password: any, cpassword: any, city: any, state: any, country: any, pincode:any) {
    return this.httpClient.post('http://localhost:3000/register',{name,email,phone,address,city,country,state,pincode,password,cpassword,gender,dob})
  }

  login(email: any, password: any) {
    // console.log("Authservice :" + password)
    // console.log("Authservice :" + email)
    return this.httpClient.post('http://localhost:3000/login',{email,password}); ;
  }

//<--------------------------------- IPHONE----------------------------------------------->

  AllIphone() {
    return this.httpClient.get('http://localhost:3000/iphone/getall');
    
  }

  getiphoneById(id: any) {
    return this.httpClient.get(`http://localhost:3000/iphone/getall/${id}`);
  }
//<--------------------------------- MACBOOK----------------------------------------------->

  AllMacBook() {
    return this.httpClient.get('http://localhost:3000/macbook/getall');
  }

  getMacBokById(id: any) {
    return this.httpClient.get(`http://localhost:3000/macbook/getall/${id}`);
  }

//<--------------------------------- AirPods----------------------------------------------->

  AllAirpod() {
    return this.httpClient.get('http://localhost:3000/airpod/getall');
  }
  getAirPodById(id: any) {
    return this.httpClient.get(`http://localhost:3000/airpod/getall/${id}`);
  }

//<--------------------------------- AirPods----------------------------------------------->
AllIWatch() {
  return this.httpClient.get('http://localhost:3000/iwatch/getall');
}
getIWatchById(id: any) {
  return this.httpClient.get(`http://localhost:3000/iwatch/getall/${id}`);
}

//<--------------------------------- CART----------------------------------------------->
  addtocartiphone(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any) {
    return this.httpClient.post('http://localhost:3000/cart/create',{model,price,color,storage,imageUrl,productId});
  }
   
  addtocartmac(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any) {
    return this.httpClient.post('http://localhost:3000/cart/create',{model,price,color,storage,imageUrl,productId});
  }

  addtocartpod(model:any,price:any,imageUrl:any,productId:any) {
    return this.httpClient.post('http://localhost:3000/cart/create',{model,price,imageUrl,productId});
  }

  addtocartwatch(model:any,price:any,color:any,storage:any,imageUrl:any,productId:any) {
    return this.httpClient.post('http://localhost:3000/cart/create',{model,price,color,storage,imageUrl,productId});
  }

  getitems(){
    return this.httpClient.get('http://localhost:3000/cart/getallmyitem');
  }

  removeitem(ID:any){
    return this.httpClient.delete(`http://localhost:3000/cart/destroy/${ID}`);
  }

//<--------------------------------- Details----------------------------------------------->
addDetails(fullname:any,address:any,pincode:any,Phone:any,street:any,paymetmethod:any,totalamount:any,cartitems:any,date:any) {
  return this.httpClient.post('http://localhost:3000/details/create',{fullname,address,pincode,Phone,street,paymetmethod,totalamount,cartitems,date});
}

addUpiDetails(fullname:any,address:any,pincode:any,Phone:any,street:any,paymetmethod:any,totalamount:any,cartitems:any,date:any,UpiId:any) {
  return this.httpClient.post('http://localhost:3000/details/create',{fullname,address,pincode,Phone,street,paymetmethod,totalamount,cartitems,date,UpiId});
}

addCreditDetails(fullname:any,address:any,pincode:any,Phone:any,street:any,paymetmethod:any,totalamount:any,cartitems:any,date:any,cardholdersname:any,cardnumber:any,expiration:any,cvv:any){
  return this.httpClient.post('http://localhost:3000/details/create',{fullname,address,pincode,Phone,street,paymetmethod,totalamount,cartitems,date,cardholdersname,cardnumber,expiration,cvv});
}

getDetails(){
  return this.httpClient.get('http://localhost:3000/details/getAllDetails');
}

  // getoken(){
  //   // this.notiftyLogin$.next(true);
  //   // return localStorage.getItem('token')
  
  //   let token = localStorage.getItem('token');
  //   console.log("gettoken :",token)
  //   if (token) this.notifyLogin$.next(true);
  //   return token;
  // }

  getoken(){
    this.notifyLogin$.next(true);
    return localStorage.getItem('token')
  }


}
