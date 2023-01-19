import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { IphonedecComponent } from './pages/iphonedec/iphonedec.component';
import { MacbookComponent } from './pages/macbook/macbook.component';
import { DescriptionComponent } from './pages/macbook/description/description.component';
import { AirpodsComponent } from './pages/airpods/airpods.component';
import { PodsdescriptionComponent } from './pages/airpods/podsdescription/podsdescription.component';
import { IwatchComponent } from './pages/iwatch/iwatch.component';
import { IwatchdescriptionComponent } from './pages/iwatch/iwatchdescription/iwatchdescription.component';
import { SuccessComponent } from './pages/success/success.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'myorders',
    component:MyordersComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'contactus',
    component:ContactusComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'home/iphone',
    component:IphoneComponent,
    canActivate:[AuthguardGuard],
  },
  {
    path:'home/iphone/:id',
    component:IphonedecComponent

  },
  {
    path:'home/macbook',
    component:MacbookComponent

  },
  {
    path:'home/macbook/:id',
    component:DescriptionComponent

  },
  {
    path:'home/airpod',
    component:AirpodsComponent

  },
  {
    path:'home/airpod/:id',
    component:PodsdescriptionComponent

  },
  {
    path:'home/iwatch',
    component:IwatchComponent

  },
  {
    path:'home/iwatch/:id',
    component:IwatchdescriptionComponent

  },
  {
    path:'cart/success',
    component:SuccessComponent

  },
  {
    path:'myaccount',
    component:MyaccountComponent

  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
