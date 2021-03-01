import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/service/doctors.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss']
})
export class ListDoctorsComponent implements OnInit {
  public doctors;

  constructor(public doctorsSrv: DoctorsService) { }
  ngOnInit() {
    this.getAllDoctors();
  }

  getAllDoctors(){
    this.doctorsSrv.getAllDoctors().subscribe(data => {
      this.doctors =  data
      console.log(this.doctors);
    })
  }
}
