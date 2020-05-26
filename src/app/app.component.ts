import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  name = 'ngStyle Implementation';

  serverName = '';
  btnClickable = false;
 
   onUpdateServerName(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;
   }

}
