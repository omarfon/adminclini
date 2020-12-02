import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllergysComponent } from 'src/app/modals/allergys/allergys.component';
import { FinancersComponent } from 'src/app/modals/financers/financers.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetPatientsService } from 'src/app/services/get-patients.service';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  public createForm: FormGroup;

  constructor(public modal: MatDialog, public gPService: GetPatientsService) { }

  ngOnInit() {
    this.createForm = this.fomTemplate();
    this.getAllPatients();
  }

  fomTemplate() {
    return new FormGroup({
      name: new FormControl(''),
      apellidop: new FormControl(''),
      apellidom: new FormControl(''),
    })
  }

  getAllPatients() {
    this.gPService.getAllPatients().subscribe(data => {
      console.log('data de pacientes:', data);
    })
  }


  openModalAllergys() {
    this.modal.open(AllergysComponent);
  }

  openModalFinancers() {
    this.modal.open(FinancersComponent);
  }

  openModalContacts() {
    this.modal.open(FinancersComponent);
  }

}
