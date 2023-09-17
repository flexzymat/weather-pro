import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
   getWeather(location: any){
      return this.http.get(
        // 'https://api.apixu.com/v1/current.json?key=YOUR_API_KEY&q=' 

        'http://api.weatherstack.com/current?access_key=dc04ea2e16ea5607594076a0c01a6ad6&query='+location 
        // `http://api.weatherstack.com/current?access_key=dc04ea2e16ea5607594076a0c01a6ad6&query=${location}` 
        
          
      );
    }
    getCountry(){
      return this.http.get( 'https://restcountries.com/v3.1/all')
    }
}
