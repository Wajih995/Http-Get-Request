import { Component } from '@angular/core';
import {CovidService} from './covid.service';
import {covid} from './covid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19';
  lstCovid: covid[];
  constructor(private covid:CovidService){
  }
  ngOnInit(){
    this.covid.getData().subscribe(
      data=>{
        this.lstCovid = data;

      }
    )
  }
}
