import { Component, OnInit } from '@angular/core';
import { AipcallallService } from '../aipcallall.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  converstation_fir:any[]=[{name:'',profileImage:'',lastMessage:''}]
  conversation_top:any[]=[{status:'',message:''}]

  constructor(private apiCallServ:AipcallallService){

  }
  
  ngOnInit(): void {

   this.apiCallServ.getConveration().then(()=>{
     this.converstation_fir=this.apiCallServ.converstation_fir
     this.conversation_top=this.apiCallServ.conversation_top
     console.log("conversation -->"+JSON.stringify(this.converstation_fir)+this.converstation_fir.length)
    })

  // throw new Error('Method not implemented.');
  }

}
