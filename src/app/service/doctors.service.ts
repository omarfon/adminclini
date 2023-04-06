import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { urldev } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private url =  `${urldev}/maestros/doctors`;

  constructor(public afs: AngularFirestore,
              public http: HttpClient) { }

  getAllDoctors(){
    return this.http.get( this.url);
    /* return this.afs.collection('doctors').valueChanges(); */
  }

  getAllSpecialtyes(){
    return this.afs.collection('specialtyes', ref => ref.orderBy('name', 'asc')).valueChanges();
  }
  
}
