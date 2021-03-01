import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DoctorsService } from 'src/app/service/doctors.service';
import { PrestationsService } from 'src/app/services/prestations.service';

@Component({
  selector: 'app-create-hours',
  templateUrl: './create-hours.component.html',
  styleUrls: ['./create-hours.component.scss']
})
export class CreateHoursComponent implements OnInit {

  public doctors;
  public prestaciones;
  formularioDoctorDate : FormGroup;
  constructor(public doctorsSrv: DoctorsService,
              public prestaSrv: PrestationsService,
              public fb: FormBuilder) { }
  ngOnInit() {
    this.getDoctors();
    this.getPrestations();
    this.formularioDoctorDate = this.fb.group({
      doctor: [''],
      init :[''],
      end: [''],
      tipoconsulta: [''],
      duracion: [''],
      hourInit: [''],
      hourEnd: [''],
      lun:[''],
      mar:[''],
      mie:[''],
      jue:[''],
      vie:[''],
      sab:[''],
      dom:['']
    })
  }

  getDoctors(){
    this.doctorsSrv.getAllDoctors().subscribe(data => {
      this.doctors = data;
    })
  }

  getPrestations(){
    this.prestaSrv.getAllPrestatio().subscribe(data => {
      this.prestaciones = data;
      console.log(this.prestaciones);
    })
  }

}
