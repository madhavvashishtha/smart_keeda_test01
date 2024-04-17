import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Location } from '@angular/common';



@Component({
  selector: 'app-navbar',
  template: `
  <div>


  <button (click)="backActivity()" style="background-color: #48abe000;">  <mat-icon>keyboard_backspace</mat-icon></button>
  <p style="color: deeppink;">MyLOgo</p>
  <input type="text" placeholder="Search..." class="search-bar" ></div>
  <div >


<button mat-icon-button [matMenuTriggerFor]="menu"
 style="position: absolute; top: 0; right: 5px; 
        background-color: rgba(255, 255, 255, 0);
        border: 0px;" >
  <mat-icon  >more_vert</mat-icon>
</button>

<mat-menu #menu="matMenu" class="matMenuExpdClass" >

<button mat-menu-item routerLink="home">
<mat-icon >home</mat-icon>
    <span>Home</span>
  </button>

  <button mat-menu-item routerLink="profile">
  <mat-icon >account_circle</mat-icon>
    <span>My Profile</span>
</button>

  <button mat-menu-item routerLink="chat">
  <mat-icon> chat</mat-icon>
    <span>Chat</span>
  </button>

  <button mat-menu-item routerLink="settings">
  <mat-icon>settings</mat-icon>
    <span>Settings</span>
  </button>

  <button mat-menu-item routerLink="support">
  <mat-icon>contact_support</mat-icon>
    <span>Support</span>
  </button>
  
</mat-menu>
  </div>

  `,
  
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

constructor(private location: Location){

}

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  backActivity(){
    this.location.back();
  }


}
