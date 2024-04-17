import { Component, HostListener, OnInit } from '@angular/core';
import { AipcallallService } from '../aipcallall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userNmae:any
  friendList:any[]=[{name:'', profileImage:''}]

  postList: any[]=[ {name:'',profileImage:'',postImage:'',time:''}]
  breakpoint: number | undefined;

  colsOnScreen:any;
  rwoThicknessOndex:any

  constructor(private aipServCaller :AipcallallService){

  }
  ngOnInit(): void {

  this.resizerSetterMainRun(window.innerWidth);

   this.aipServCaller.callMain().then(()=>{
      this.userNmae= this.aipServCaller.userMain[0].name;
      this.friendList=this.aipServCaller.friendList
   })

   this.aipServCaller.postMain().then(()=>{
    this.postList=this.aipServCaller.postList
   })


   
  }
  @HostListener('window:resize', ['$event'])
 onResize(event :any) {
    this.resizerSetterMainRun(event.target.innerWidt)
    
  }

  resizerSetterMainRun(sizeGeted:any){
   
    if(sizeGeted<600){
      this.colsOnScreen=1
      this.rwoThicknessOndex=850
      console.log('sizeSet runner for small: '+sizeGeted+'col:'+this.colsOnScreen+'thickner'+this.rwoThicknessOndex)
         //SmallScreen
          }else if(sizeGeted>=600){
            //BigScreen
            this.rwoThicknessOndex=150
            this.colsOnScreen=3;
            this.rwoThicknessOndex=sizeGeted/3
            console.log('sizeSet runner for big: '+sizeGeted+'col:'+this.colsOnScreen+'thickner'+this.rwoThicknessOndex)
     
      
          }
  }

// getRandomColumInt (max:any) :number {
//   // return Math.floor(Math.random() * );
//  // alert( window.screen.width);
//if( window.screen.width>600){
//  return Math.floor(Math.random() * );
//}else{
//
//}
//   return;
//  }
//
//  getRandomRowmInt (max:any) :number {
//    // return Math.floor(Math.random() * );
//   // alert( window.screen.width);
// 
//    return window.screen.width;
//   }



}
