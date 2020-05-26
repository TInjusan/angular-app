import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
 
 serverStatus: String = 'offline';
 
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'offline': 'online';
  }
   
  getColor(){
    return this.serverStatus === 'offline'? 'red':'green';
  }

  gettextColor(){
    return 'white';
  }

 }
