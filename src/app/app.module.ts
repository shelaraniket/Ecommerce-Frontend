import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CartComponent } from './pages/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { IphonedecComponent } from './pages/iphonedec/iphonedec.component';
import { MacbookComponent } from './pages/macbook/macbook.component';
import { DescriptionComponent } from './pages/macbook/description/description.component';
import { AirpodsComponent } from './pages/airpods/airpods.component';
import { PodsdescriptionComponent } from './pages/airpods/podsdescription/podsdescription.component';
import { IwatchComponent } from './pages/iwatch/iwatch.component';
import { IwatchdescriptionComponent } from './pages/iwatch/iwatchdescription/iwatchdescription.component';
import { SuccessComponent } from './pages/success/success.component';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { DatePipe } from '@angular/common';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyordersComponent,
    MyaccountComponent,
    ContactusComponent,
    CartComponent,
    LogoutComponent,
    IphoneComponent,
    IphonedecComponent,
    MacbookComponent,
    DescriptionComponent,
    AirpodsComponent,
    PodsdescriptionComponent,
    IwatchComponent,
    IwatchdescriptionComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApiInterceptor,
      multi:true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
