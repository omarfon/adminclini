import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(public afs: AngularFirestore) { }ç

  addSpecialty(data){
    return this.afs.collection('specialtyes').add(
      data
    )
  }

  deleteSpecialty(id){
    return this.afs.collection('specialtyes').doc(id).delete();
  }

  editSpecialty(id, data){
    return this.afs.collection('specialtye').doc(id).set({
        data
    },{merge:true})
  }

  getAllSpecialtyes(){
    return this.afs.collection('specialtyes', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }
}
