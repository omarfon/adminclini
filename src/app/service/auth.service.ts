import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>

  constructor(public auth: AngularFireAuth) { 
      /* this.userData = auth.authState; */
  }

  sigIn(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email, password)
              .then(res =>{
                  console.log('respuesta:', res);
              })
              .catch(err =>{
                console.log('algo salio mal', err.message);
              })
  }
}
