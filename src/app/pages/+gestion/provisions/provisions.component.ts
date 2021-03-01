import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProvisionsDeleteComponent } from 'src/app/modals/provisions-delete/provisions-delete.component';
import { PrestationsService } from 'src/app/services/prestations.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-provisions',
  templateUrl: './provisions.component.html',
  styleUrls: ['./provisions.component.scss']
})
export class ProvisionsComponent implements OnInit {
  public provisions;
  public provisionsCount;
  constructor(public prestSrv: PrestationsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPrestations();
  }

  getAllPrestations(){
    this.prestSrv.getAllPrestatio().subscribe(data =>{
      this.provisions = data;
      this.provisionsCount = this.provisions.length;
      console.log(this.provisionsCount);
    })
  }

  savePrestation(nombre, shortname, precio){
    console.log(nombre.value, shortname.value, precio.value)
    const id = this.provisionsCount + 1;
    console.log(id);
    const data = {
      id : id,
      name: nombre.value,
      short_name: shortname.value,
      precio: precio.value
    }
    this.prestSrv.savePrestationS(data);
    Swal.fire('Data Guardada...', 'Listo... acabas de guardar una prestación!', 'success');
  }

  editPrestation(e){

  }

  deletePrestation(e){
    console.log('delete', e);
    const modalClose = this.dialog.open(ProvisionsDeleteComponent)
    const id:string = e.payload.doc.id;
    console.log(id);
    modalClose.afterClosed().subscribe(result => {
      if(result.name == 'aceptar'){
        this.prestSrv.deletePrestationS(id);
        Swal.fire('Data Eliminada...', 'Listo... acabas de eliminar una especialidad!', 'success');
      }
    })
  }

}
