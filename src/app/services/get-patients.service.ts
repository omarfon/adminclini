import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetPatientsService {

  constructor(public afs: AngularFirestore) { }

  getAllPatients() {
    return this.afs.collection('pacientes').snapshotChanges();
  }

}
