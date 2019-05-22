import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootCampAngular';
  name : String = 'Introduce texto';
  eventMsg : String;

  alertMsg(event){
    this.eventMsg = event.resultado +" y "+event.searchText;
  }

}


