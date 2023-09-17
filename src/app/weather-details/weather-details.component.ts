import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weatherData: any
  countries: any

  constructor(private route: ActivatedRoute,private apixuService: ApixuService) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params:any)=>{
      console.log(params.params.id)
      this.sendToApixu(params.params.id)
      // this.sendToApixu('london')
    })
  }
sendToApixu(location: any){
  this.apixuService.getWeather(location).subscribe((data:any)=> {
    this.weatherData= data
    console.log(this.weatherData);
  })
}
   
  // getAllCountry(){
  //   this.apixuService.getCountry().subscribe((result:any)=>{
  //     console.log(result)
  //     this.countries=result

  //   });
  // }
}