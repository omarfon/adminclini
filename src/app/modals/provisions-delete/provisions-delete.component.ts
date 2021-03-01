import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-provisions-delete',
  templateUrl: './provisions-delete.component.html',
  styleUrls: ['./provisions-delete.component.scss']
})
export class ProvisionsDeleteComponent implements OnInit {

  constructor(public matdialog: MatDialogRef<ProvisionsDeleteComponent>) { }

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
