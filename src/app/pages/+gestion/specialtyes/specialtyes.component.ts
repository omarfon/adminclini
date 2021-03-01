import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpecialtydeleteComponent } from 'src/app/modals/specialtydelete/specialtydelete.component';
import { DoctorsService } from 'src/app/service/doctors.service';
import { SpecialtyService } from 'src/app/services/specialty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-specialtyes',
  templateUrl: './specialtyes.component.html',
  styleUrls: ['./specialtyes.component.scss']
})
export class SpecialtyesComponent implements OnInit {
  public especialidades;
  public nombre: " " ;
  public shortname: " "  ;
  public specialtyCount;
  constructor(public doctorSrv: DoctorsService,
              public dialog: MatDialog,
              public specialtySrv: SpecialtyService ) {
              }
              
  ngOnInit() {
    this.getSpecialtyes();  
  }

  getSpecialtyes(){
    this.specialtySrv.getAllSpecialtyes().subscribe(data =>{
      this.especialidades = data;
      this.specialtyCount = this.especialidades.length;
      console.log(this.especialidades, this.specialtyCount);
    })
  }

  saveSpecialty(nombre, shortname){
    console.log(nombre.value, shortname.value);
    const nameId = this.specialtyCount + 1;
    console.log(nameId);
    const data = {
      id : nameId,
      name : nombre.value,
      short_name: shortname.value
    }
    console.log(data);
    this.specialtySrv.addSpecialty(data);
    this.shortname = null;
    this.nombre = ' ';
    Swal.fire('Data Guardada...', 'Listo... acabas de guardar una especialidad!', 'success');
  }
   
  editSpecialty(e){
    console.log('editar:',e);
  }

  deleteSpecialty(e){
    console.log('delete', e);
    const modalClose = this.dialog.open(SpecialtydeleteComponent)
    const id:string = e.payload.doc.id;
    modalClose.afterClosed().subscribe(result => {
      if(result.name == 'aceptar'){
        this.specialtySrv.deleteSpecialty(id);
        Swal.fire('Data Eliminada...', 'Listo... acabas de eliminar una especialidad!', 'success');
      }
    })
    //aqui levantar un modal preguntando si se quiere borrar.
  }

  seeDoctors(e){
    console.log('ver doctores', e)
  }
}
