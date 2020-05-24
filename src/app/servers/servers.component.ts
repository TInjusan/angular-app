import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No new server was created';
  serverName = '';
  serverCreated = false;
  constructor() { 
    setTimeout(()=> {this.allowNewServer = true},2000)
  }

  ngOnInit(): void {
  }
  onCreateServerclick(){
    this.serverCreated = true;
    this.serverCreationStatus = 'A new server was created!';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
