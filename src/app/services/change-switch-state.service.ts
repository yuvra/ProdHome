import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeSwitchStateService {

  constructor(private fireBaseDb: AngularFireDatabase) { }


  async changeFireBaseSwitchState(switchName): Promise<any> {
    // prodhome-a614b
    let FDB = await this.fireBaseDb.list('prodhome-a614b');
    FDB.set('L1', 0);
    // console.log("FDB",FDB);

    let promise = new Promise(function(resolve, reject) {
     setTimeout(() => resolve("done"), 1000);
    });

    return promise;
  }
}
