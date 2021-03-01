import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataPatientComponent } from 'src/app/modals/data-patient/data-patient.component';
import { PatientsService } from 'src/app/services/patients.service';
DataPatientComponent


@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  public patients ;
  constructor(public patientsSrv: PatientsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPatient();
  }

  getAllPatient(){
    this.patientsSrv.getAllPatients().subscribe(data => {
      this.patients = data;
      console.log(this.patients);
    })
  }

  openModalData(){
    this.dialog.open(DataPatientComponent)
  }
}
