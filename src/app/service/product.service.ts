import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiEndPoint: string = 'https://app.swaggerhub.com/apis/PROJECTNSRSOURCE_1';
  //dependency injection
  constructor(private http: HttpClient) { }

  //calling API
  SignUpUser(obj: any){
    return this.http.post(this.apiEndPoint + 'AddNewTrackUser', obj)
  }
}
