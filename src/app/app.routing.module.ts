import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { CrearComponent } from './pages/+pacientes/crear/crear.component';
import { ListarComponent } from './pages/+pacientes/listar/listar.component';
import { DetailUserComponent } from './pages/+pacientes/detail-user/detail-user.component';
import { CitasComponent } from './pages/+pacientes/citas/citas.component';
import { CrearcitaComponent } from './pages/+pacientes/crearcita/crearcita.component';
import { SeguimientoComponent } from './pages/+pacientes/seguimiento/seguimiento.component';
import { CreateComponent } from './pages/+doctors/create/create.component';
import { CreateHoursComponent } from './pages/+doctors/create-hours/create-hours.component';
import { BlockHoursComponent } from './pages/+doctors/block-hours/block-hours.component';
import { ListDoctorsComponent } from './pages/+doctors/list-doctors/list-doctors.component';
import { PendingsDatesComponent } from './pages/+doctors/pendings-dates/pendings-dates.component';
import { TotalDatesComponent } from './pages/+doctors/total-dates/total-dates.component';
import { SpotsComponent } from './pages/+doctors/spots/spots.component';
import { SpecialtyesComponent } from './pages/+gestion/specialtyes/specialtyes.component';
import { ProvisionsComponent } from './pages/+gestion/provisions/provisions.component';
import { PricesComponent } from './pages/+gestion/prices/prices.component';
import { ListAllComponent } from './pages/+pacientes/list-all/list-all.component';
import { AlmacenesComponent } from './pages/+maestros/almacenes/almacenes.component';
import { CorreosComponent } from './pages/+maestros/correos/correos.component';
import { DiagnosticosComponent } from './pages/+maestros/diagnosticos/diagnosticos.component';
import { GenerosComponent } from './pages/+maestros/generos/generos.component';
import { MonedaComponent } from './pages/+maestros/moneda/moneda.component';
import { ParentescoComponent } from './pages/+maestros/parentesco/parentesco.component';
import { SalasComponent } from './pages/+maestros/salas/salas.component';
import { TipoCambioComponent } from './pages/+maestros/tipo-cambio/tipo-cambio.component';
import { TiposDocumentosComponent } from './pages/+maestros/tipos-documentos/tipos-documentos.component';
import { TurnosComponent } from './pages/+maestros/turnos/turnos.component';






const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: PagesComponent },
      { path: 'pacientes/listar', component: ListarComponent },
      { path: 'pacientes/crear-cita', component: CrearcitaComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'crear', component: CrearComponent },
      { path: 'detailuser', component: DetailUserComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'pacientes', component: ListAllComponent },
      { path: 'seguimiento', component: SeguimientoComponent },
      { path: 'create', component: CreateComponent },
      { path: 'create-hours', component: CreateHoursComponent },
      { path: 'block-hours', component: BlockHoursComponent },
      { path: 'list-doctors', component: ListDoctorsComponent },
      { path: 'pending-dates', component: PendingsDatesComponent },
      { path: 'total-dates', component: TotalDatesComponent },
      { path: 'spots', component: SpotsComponent },
      { path: 'specialtyes', component: SpecialtyesComponent },
      { path: 'provisions', component: ProvisionsComponent },
      { path: 'prices', component: PricesComponent },
      { path: 'provisions', component: ProvisionsComponent },

      { path: 'almacenes', component: AlmacenesComponent },
      { path: 'correos', component: CorreosComponent },
      { path: 'diagnosticos', component: DiagnosticosComponent },
      { path: 'generos', component: GenerosComponent },
      { path: 'moneda', component: MonedaComponent },
      { path: 'parentesco', component: ParentescoComponent },
      { path: 'salas', component: SalasComponent },
      { path: 'tipo-cambio', component: TipoCambioComponent },
      { path: 'tipo-documento', component: TiposDocumentosComponent },
      { path: 'turnos', component: TurnosComponent },
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  /* { path: '**', 
    component: NopagefoundComponent }, */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages', component: PagesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
