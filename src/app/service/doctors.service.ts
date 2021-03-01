import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(public afs: AngularFirestore) { }

  getAllDoctors(){
    return this.afs.collection('doctors').valueChanges();
  }

  getAllSpecialtyes(){
    return this.afs.collection('specialtyes', ref => ref.orderBy('name', 'asc')).valueChanges();
  }
  
}
