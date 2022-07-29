import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    var menu = document.getElementById('nav');
    var login = document.getElementById('login');
    if(menu != null){
      if(menu.style.display == 'block'){
        menu.style.display = 'none';
      }else{
        menu.style.display = 'block';
      }
    }
    if(login != null){
      if(login.style.display == 'flex'){
        login.style.display = 'none';
      }else{
        login.style.display = 'flex';
      }
    }
  }
}
