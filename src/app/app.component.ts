import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'E-commerce';
  loggedIn=false;
  counting:any=localStorage.getItem('cartlength')
  
  constructor(private router:Router , private authService:AuthserviceService) {}
  
  ngOnInit(){
      
    this.loggedIn=!!this.authService.getoken();
      this.authService.notifyLogin$.subscribe(data =>{
      this.loggedIn=true;
      });
  }

  logout(){
    localStorage.removeItem('token');
    alert("Logout Sucessfully")
    this.router.navigate(['/login'])
    this.loggedIn=false;
  }


}
