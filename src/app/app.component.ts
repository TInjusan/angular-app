import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="Recipe App";
  loadedFeature = 'recipe';

  onNavigate(feature: string){
     this.loadedFeature = feature;
  }
}
