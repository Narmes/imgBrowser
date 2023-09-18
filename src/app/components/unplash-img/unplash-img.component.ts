import { Component, OnInit } from '@angular/core';
import { UnplahApiService } from 'src/app/service/api/unplah-api.service';

@Component({
  selector: 'app-unplash-img',
  templateUrl: './unplash-img.component.html',
  styleUrls: ['./unplash-img.component.css']
})
export class UnplashImgComponent implements OnInit {

  public data : any; card = false;
  public errorEstatus = false;
  ;

  constructor(
    public unplashApi:UnplahApiService
  ) { }

  ngOnInit(): void {
  }

  imgSearch(event:any){

    this.unplashApi.getImgSearch(event.target.value).subscribe(
      (response) => {
        this.data = response;
        if(this.data.results.length!=0){this.card=true}else{this.card=false}
      },
      (error) => { this.errorEstatus=true}
      );
    }

}

