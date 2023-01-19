// import { ThrowStmt } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private authservice : AuthserviceService,public datepipe: DatePipe) { }

  fb:FormBuilder=new FormBuilder()
  fg:any=null;

  ngOnInit(): void {
    this.fg=this.fb.group({
      address:['',[Validators.required]],
      fullname:['',[Validators.required]],
      pincode:['',[Validators.required]],
      street:['',[Validators.required]],
      phone:['',[Validators.required]],
      COD:['',[Validators.required]],
      CreditCard:['',[Validators.required]],
      cardnumber:['',[Validators.required]],
      cardholdername:['',[Validators.required]],
      expiration:['',[Validators.required]],
      cvv:['',[Validators.required]],
      PhonePay:['',[Validators.required]],
      GPay:['',[Validators.required]],
      Mobikwik:['',[Validators.required]],
      PayTm:['',[Validators.required]],
      UpiId:['',[Validators.required]],
    })
    this.getcartitem()
    // this.authservice.senddata(this.cartCount)
    
  }

  cartitems:any=[]
  cartCount:any
  // same for all payment
  address:any;
  fullname:any;
  pincode:any;
  phone:any;
  street:any;


  //------------------------ -------------------for cash on delivery-----------------------------------------//

  COD:any='cash on delivery';
  currentDateTime:any
  PlaceCodOrder(){
    this.currentDateTime =this.datepipe.transform((new Date), 'dd/MM/yyyy');
    this.authservice.addDetails(this.fg.value.fullname,this.fg.value.address,this.fg.value.pincode,this.fg.value.phone,this.fg.value.street,this.COD,this.Total,this.cartitems,this.currentDateTime).subscribe((data)=>{
      console.log(this.fg.value.address);
      console.log(this.fg.value.fullname);
      console.log(this.fg.value.pincode);
      console.log(this.fg.value.street);
      console.log(this.fg.value.phone);
      console.log(this.COD)
      console.log(this.Total)
    })
}

//------------------------ -------------------for creditcard-----------------------------------------//
  CreditCard:any='Credit Card';
  cardholdername:any;
  cardnumber:any;
  expiration:any;
  cvv:any;
// this function work on click of creditcard

  cardpayment(){
    this.currentDateTime =this.datepipe.transform((new Date), 'dd/MM/yyyy');
    this.authservice.addCreditDetails(this.fg.value.fullname,this.fg.value.address,this.fg.value.pincode,this.fg.value.phone,this.fg.value.street,this.CreditCard,this.Total,this.cartitems,this.currentDateTime,this.fg.value.cardholdername,this.fg.value.cardnumber,this.fg.value.expiration,this.fg.value.cvv).subscribe((data)=>{

      console.log(this.fg.value.cardholdername);
      console.log(this.fg.value.cardnumber);
      console.log(this.fg.value.expiration);
      console.log(this.fg.value.cvv);
      console.log(this.fg.value.address);
      console.log(this.fg.value.fullname);
      console.log(this.fg.value.pincode);
      console.log(this.fg.value.street);
      console.log(this.fg.value.phone);
      console.log(this.CreditCard);
    })

  }


//------------------------ -------------------for for upi transaction-----------------------------------------//

  UPITransaction:any='Upi Transaction';
  PhonePay:any;
  GPay:any;
  Mobikwik:any;
  PayTm:any;
  // UpiId:any;

  verify=false
  verifyMobikwikuser(){
    this.verify=true
  }
  verifyGpayuser(){
    this.verify=true
  }
  verifyPhonePayuser(){
    this.verify=true
  }
  verifyPaytmuser(){
    this.verify=true
  }
  upiTransactions(){
    this.currentDateTime =this.datepipe.transform((new Date), 'dd/MM/yyyy');
    this.authservice.addUpiDetails(this.fg.value.fullname,this.fg.value.address,this.fg.value.pincode,
      this.fg.value.phone,this.fg.value.street,this.UPITransaction,this.Total,this.cartitems,
      this.currentDateTime,this.fg.value.UpiId).subscribe((data)=>{
    console.log(this.fg.value.address);
    console.log(this.fg.value.fullname);
    console.log(this.fg.value.pincode);
    console.log(this.fg.value.street);
    console.log(this.fg.value.phone);
    console.log(this.UPITransaction);
    console.log(this.fg.value.UpiId);
    })
  }


  getcartitem(){
    this.authservice.getitems().subscribe((data)=>{
      this.cartitems=data;
      console.log(this.cartitems)
      localStorage.setItem('cartlength',this.cartitems.length)
      this.cartCount=this.cartitems.length
      // console.log("length",this.cartCount)
      this.totalprice()
      // this.parentComponent.emit(this.cartitems)
    })
  }

  remove(id:any){
    console.log(id)
    this.authservice.removeitem(id).subscribe((data:any)=>{
      // alert("item removed suceesfully")
      this.getcartitem();
    })
  }
  Totalprice:any=0
  Shipping:any=500
  Total:any=0

  totalprice(){
    // console.log(this.cartitems)
    this.cartitems.map((data : any)=>{
      // console.log(data)
      console.log( typeof data.price)
      this.Totalprice += data.price
      this.Total=this.Totalprice + this.Shipping
    })
    console.log(this.Totalprice)
  }
// for credit card
  checkedout=true
  checkoutcard(){
    this.checkedout=false
  }
  back(){
    this.checkedout=true
  }

  // for cash on delivery
  buttontext=true;
  changebuttontext(){
    this.buttontext=false
  }

  forprevioustext(){
    this.buttontext=true
  }

  // upi 

  UPI=false

  upiTransaction(){
    this.UPI=true
  }

  goback(){
    this.UPI=false
  }
phonepay=false
 googlepay=false
 mobikwik=false
 paytm=false

 phonePay(){
  this.phonepay=true
  this.googlepay=false
  this.mobikwik=false
  this.paytm=false
 }

 googlePay(){
  this.googlepay=true
  this.phonepay=false
  this.mobikwik=false
  this.paytm=false
 }

 mobiKwik(){
  this.mobikwik=true
  this.googlepay=false
  this.phonepay=false
  this.paytm=false
 }

 payTm(){
  this.mobikwik=false
  this.googlepay=false
  this.phonepay=false
  this.paytm=true
 }

 
}
