import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AipcallallService {
   friendList: any[] = [
    { name : '',profileImage:'' }
  ];

  userMain: any[] = [
    { name : '',profileImage:'' }
  ];

  postList: any[]=[
    {name:'',profileImage:'',postImage:'',time:''}
  ]

  profileDetail:any[]=[
    {status:'',message:'',userId:'',name:'',location:'',description:'',profileImage:'',photosCount:'',followersCount:'',followsCount:'',photoList:[{image:''}]}
  ];
  profiPhotoLists: any;

  converstation_fir:any[]=[{name:'',profileImage:'',lastMessage:''}]
  conversation_top:any[]=[{status:'',message:''}]

  constructor(private http :HttpClient) {
  

   }

   async callMain(){
    await fetch('https://demo.smartkeeda.in/demoapi/demo/main', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) 
    })
    .then(response => response.json())
    .then((data) => {
      this.friendList= data.friendList
      this.userMain=[{name: data.name , profileImage : data.profileImage}]
    }   )
    .catch(error => console.error('Error fetching data:', error));
    console.log('these are friends: name :'+this.friendList[0].name +' img :'+this.friendList[0].profileImage)
  }

  //https://demo.smartkeeda.in/demoapi/demo/PostData?PageNo=0 
  ///demoapi/demo/Getprofile API

  async postMain(){
    await fetch('https://demo.smartkeeda.in/demoapi/demo/PostData?PageNo=0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) 
    })
    .then(response => response.json())
    .then((data) => {
      this.postList= data.postList
     
    }   )
    .catch(error => console.error('Error fetching data:', error));
   
  }

  async getprofile(){
    await fetch('https://demo.smartkeeda.in/demoapi/demo/Getprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) 
    })
    .then(response => response.json())
    .then((data) => {
      this.profileDetail= [ {status:data.status,message:data.message,userId:data.userId,name:data.name,location:data.location,description:data.description,profileImage:data.profileImage,photosCount:data.photosCount,followersCount:data.followersCount,followsCount:data.followsCount,photoList:{photoList:data.photoList[0].photoList}} ];
      this.profiPhotoLists=data.photoList;
      console.log("STATUS getProfoDetail:"+ JSON.stringify(data) )
     
    }   )
    .catch(error => console.error('Error fetching data:', error));
   
  }

  async getConveration(){
    await fetch('https://demo.smartkeeda.in/demoapi/demo/GetConversation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) 
    })
    .then(response => response.json())
    .then((data) => {
   //   console.log(JSON.stringify(data))
      this.converstation_fir= data.friendList
      this.conversation_top=[{status: data.status , message : data.message}]
    }   )
    .catch(error => console.error('Error fetching data:', error));
   // console.log('these are friends: name :'+this.friendList[0].name +' img :'+this.friendList[0].profileImage)
  }
}
