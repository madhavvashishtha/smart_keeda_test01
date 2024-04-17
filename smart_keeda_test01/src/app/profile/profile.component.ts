import { Component, OnInit } from '@angular/core';
import { AipcallallService } from '../aipcallall.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetail=[
    {status:null,message:'',userId:'',name:'',location:'',description:'',profileImage:'',photosCount:'',followersCount:null,followsCount:null,photoList:[{image:''}]}
  ];

  imgInProfi:any[]=[{image:''}]
  lastColSave:any;


  constructor(private apiCallService:AipcallallService){

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');


    this.apiCallService.getprofile().then(()=>{
      this.profileDetail=this.apiCallService.profileDetail
      this.imgInProfi=this.apiCallService.profiPhotoLists
      console.log("ProfiImgs -->"+JSON.stringify(this.imgInProfi))

     }).then(()=>{
      
      for(let i=0 ;i<this.imgInProfi.length;i++){
     //   alert('dfdfdf')
 let currUrlInChamber=JSON.stringify(this.imgInProfi[i].image)
        console.log('in ingLoging: '+currUrlInChamber)

    }
     })
  }

   getRandomNumsMinN_Max(min :any, max:any):number {
    this.lastColSave =Math.round(Math.random() * (max - min) + min)
    return this.lastColSave;
  }

  




}

  
