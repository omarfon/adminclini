import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.email = "admin@clini.com";
    this.password = "123456";
    this.auth.sigIn(this.email, this.password)
      .then(res => {
        this.router.navigate(['/home']);
        console.log('data retornada por login:', res);
      }).catch(e => {
        console.log('e', e);
      })

  }

}
