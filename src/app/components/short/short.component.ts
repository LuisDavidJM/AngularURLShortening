import { Component, OnInit } from '@angular/core';
import { ShortsService } from '../../services/shorts.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css'],
  providers: [ShortsService]
})
export class ShortComponent implements OnInit {

  public shortLink: any[] = [];
  public link: any;

  constructor(
    private shortsService: ShortsService
  ) {
    this.link = '';
    this.getLocalStorage();
   }

  ngOnInit(): void {

  }
  getLink(){
    this.shortsService.getUrl(this.link).subscribe(
      result => {
        this.shortLink.unshift(result.result);
        localStorage.setItem('localStorage', JSON.stringify(this.shortLink));
        this.getLocalStorage();
      },
      error => {
        console.log('<any>error');
      }
    );
    this.inputReset();
  }
  getLocalStorage(){
    var local = localStorage.getItem('localStorage');
        if(local == null){
          this.shortLink = [];
        }else{
          this.shortLink = JSON.parse(local);
        }  
  }
  inputReset(){
    const input = document.getElementById('input') as HTMLInputElement | null;
    if(input != null){
      input.value = '';
    }   
  }
  copyLink(num: any){
    var copy = document.querySelector(`.copy${num.code}`)?.innerHTML;
    if(copy != undefined){
      navigator.clipboard.writeText(copy)
    .then(() => {

    })
    .catch(err => {
      console.log('Error', err);
    });
    }
  }

  clearLinks(){
    this.shortLink = [];
    localStorage.clear();
  }

  getLinkValidation(){
    var val: any = document.getElementById('input') as HTMLInputElement | null;
    if(val != undefined){
      val = val.value;
    }
    if (val?.length > 0){
      this.getLink();
    }else{
      console.log(val, 'Error')
    }
  }
}
