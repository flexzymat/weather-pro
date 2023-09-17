import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { Router, Event, NavigationStart, NavigationEnd,} from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    weatherSearchForm!:FormGroup;
    countries: any;
    weatherData: any;
    showLoadingIndicator = true;
  constructor(private formbuilder: FormBuilder, private apixuService: ApixuService,private router: Router) {
    // this.router.events.subscribe((routerEvent: Event) => {
    //   if( routerEvent instanceof NavigationStart) {
    //     this.showLoadingIndicator = true;
    //    }
    //    if( routerEvent instanceof NavigationEnd) {
    //     this.showLoadingIndicator = false;
    //    }
    // })
   }
    
  ngOnInit(): void {
    this.weatherSearchForm=this.formbuilder.group({
      location: ['']
    })
    this.getAllCountry()
    // this.sendToAPIXU('london')
  }
  // sendToAPIXU(formValues: any){
  //   // this.apixuService.getWeather(formValues.location).subscribe(data=>console.log(data));
  //   // this.apixuService.getWeather(formValues.location).subscribe((data:any)=>{
  //     // console.log(data)
  //   // })
  //   this.apixuService.getWeather(formValues.location).subscribe(data => 
  //     this.weatherData = data)
  //     console.log(this.weatherData); 
  // }
  
  sendToAPIXU(formValues: any){
    // this.router.navigate([`/weather-details/${formValues.location}`])
    this.router.navigate(['/weather-details/'+ formValues.location])
  }
  getAllCountry(){
    this.apixuService.getCountry().subscribe((result:any)=>{
      console.log(result)
      this.countries=result

    })
  }


}
