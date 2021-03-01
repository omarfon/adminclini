import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(public afs: AngularFirestore) { }

  getAllPatients(){
    return this.afs.collection('pacientes').valueChanges();
  }
  
}
