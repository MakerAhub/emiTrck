import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  trackUserObj: any = {
    "CompId": 0,
    "CompanyName":"",
    "logoURL":"",
    "Email": "",
    "phoneNo": "",
    "Location": "",
    "GstNo": ""
  }

  constructor(private product: ProductService){}

  signupNrm(){
    this.product.SignUpUser(this.trackUserObj).subscribe((res: any) =>{
      if(res.result){
        alert(res.message)
      }
      else{
        alert(res.message)
      }
    })
  }

}
