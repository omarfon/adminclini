import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPatientsService } from 'src/app/services/get-patients.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDateComponent } from 'src/app/modals/create-date/create-date.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public _patients;
  public patients;


  constructor(public _router: Router,
    public gAPatients: GetPatientsService,
    public matdialog: MatDialog) { }


  ngOnInit() {
    this.getAllPatients();
  }

  errorHandler(event) {
    event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png"
  }

  goToDetail(user) {
    console.log(user);
    this._router.navigate(['/detailuser'])
  }

  getAllPatients() {
    this.gAPatients.getAllPatients().subscribe(data => {
      this._patients = data.map(d => {
        return {
          id: d.payload.doc.id,
          data: d.payload.doc.data()
        }
      })
      this.patients = this._patients;
      console.log('this.patients:', this.patients);
    })
  }

  /*   openModalOptions() {
  
    } */

  openModalDate(usuario) {
    console.log({ usuario });
    const dialogDate = this.matdialog.open(CreateDateComponent, {
      width: '700px',
      data: usuario
    })
  }
}
