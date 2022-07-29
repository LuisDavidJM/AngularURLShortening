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
        alert('Invalid Link, Try Again');
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
    var copy_link = document.querySelector(`.copy_link${num.code}`) as HTMLElement | null; 
    if(copy != undefined){
      navigator.clipboard.writeText(copy)
    .then(() => {
      if(copy_link != null){
      copy_link.style.background = 'var(--Dark-Violet)'
      copy_link.innerHTML = 'Copied!';
      }
    })
    .catch(err => {
      console.log('Copy Link Error, Try Again');
    });
    }
  }

  clearLinks(){
    this.shortLink = [];
    localStorage.clear();
  }

  getLinkValidation(){
    var val: any = document.getElementById('input') as HTMLInputElement | null;
    var alert = document.getElementById('input');
    var alert_add = document.getElementById('alert');
    if(val != undefined){
      val = val.value;
    }
    if (val?.length > 0){
      this.getLink();
      if(alert_add != null)
      alert_add.style.display = 'none';
      if(alert != null)
      alert.style.border = 'none';
    }else{
      if(alert_add != null)
      alert_add.style.display = 'block';
      if(alert != null)
      alert.style.border = '3px solid var(--Red)';
    }
  }
}
