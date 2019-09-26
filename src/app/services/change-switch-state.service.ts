import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeSwitchStateService {

  constructor(public fireBase: AngularFirestore) {

  }


  async changeFireBaseSwitchState(switchName): Promise<any> {

    // this.firestore.collection('hall-lights').add({L1: 1})
    // this.firestore.collection('hall-lights').get()

    // this.firestore.collection('hall-lights').doc("BW2TMW21K2JlZEPjAt4E").set({L1: 1});
    const db = this.fireBase.firestore;
    // db.settings({ timestampsInSnapshot})
    db.collection("hall-lights").get().then((snapShoot) => {
      console.log(snapShoot.docs);
    })

    let promise = new Promise(function(resolve, reject) {
     setTimeout(() => resolve("done"), 1000);
    });

    return promise;
  }
}
