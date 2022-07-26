import { Component, OnInit } from '@angular/core';
import { ShortsService } from '../../services/shorts.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css'],
  providers: [ShortsService]
})
export class ShortComponent implements OnInit {

  public shortLink: any;
  public link: any;

  constructor(
    private shortsService: ShortsService
  ) {
    this.link = '';
   }

  ngOnInit(): void {

  }
  showLink(){
    this.shortsService.getUrl(this.link).subscribe(
      result => {
        this.shortLink = result.result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
