import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-specialtydelete',
  templateUrl: './specialtydelete.component.html',
  styleUrls: ['./specialtydelete.component.scss']
})
export class SpecialtydeleteComponent implements OnInit {

  constructor(public matdialog: MatDialogRef<SpecialtydeleteComponent>) { }

  ngOnInit() {
  }

  close(){
    this.matdialog.close({
      name: 'cancelar'
    });
  }
  closeAcept(){
    this.matdialog.close({
      name: 'aceptar'
    })
  }
}
