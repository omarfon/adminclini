import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  constructor(public afs: AngularFirestore) { }

  getAllPrestatio(){
    return this.afs.collection('typespres').snapshotChanges();
  }

  savePrestationS(data){
    return this.afs.collection('typespres').add(data)
  }

  editPrestationS(){

  }

  deletePrestationS(id){
    console.log('en servicio:', id);
    return this.afs.collection('typespres').doc(id).delete();
  }

}
