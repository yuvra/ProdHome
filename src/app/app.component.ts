import { ChangeSwitchStateService } from './services/change-switch-state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private changeSwitchStateService: ChangeSwitchStateService
    ) { }
  title = 'homeApp';
  private L1 = 'OFF';
  private L2 = 'OFF';
  private L3 = 'OFF';

  changeSwitchState(switchName): Promise<any> {

    return this.changeSwitchStateService.changeFireBaseSwitchState(switchName);

  }


  handleOnOff (id) {

    switch(id) {
      case 'L1' :
        this.changeSwitchState(id).then( (d) => {
          // console.log('FDB',d);
          this.L1 = this.L1 === "ON" ? "OFF" :"ON";
        }
        );
        break;

      case 'L2' :
        this.L2 = this.L2 === "ON" ? "OFF" :"ON";
        break;

      case 'L3' :
          console.log("Change L3");
          this.L3 = this.L3 === "ON" ? "OFF" :"ON";
          break;
    }
  }
}
