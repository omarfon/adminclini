import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas


// Modulos
import { SharedModule } from './shared/shared.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Firebase imports

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//paginas
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { CrearComponent } from './pages/+pacientes/crear/crear.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ListarComponent } from './pages/+pacientes/listar/listar.component';
import { DetailUserComponent } from './pages/+pacientes/detail-user/detail-user.component';
import { AppRoutingModule } from './app.routing.module';
import { CitasComponent } from './pages/+pacientes/citas/citas.component';
import { DoctoresallComponent } from './doctores/doctoresall/doctoresall.component';
import { CrearcitaComponent } from './pages/+pacientes/crearcita/crearcita.component';
import { AlergiasComponent } from './shared/paciente/alergias/alergias.component';
import { ContactosComponent } from './shared/paciente/contactos/contactos.component';
import { FinanciadorComponent } from './shared/paciente/financiador/financiador.component';
import { PacientesdoctorComponent } from './doctores/pacientesdoctor/pacientesdoctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllergysComponent } from './modals/allergys/allergys.component';
import { FinancersComponent } from './modals/financers/financers.component';
import { ContactsComponent } from './modals/contacts/contacts.component';
import { SeguimientoComponent } from './pages/+pacientes/seguimiento/seguimiento.component';


//material modules
//Dialog
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateDateComponent } from './modals/create-date/create-date.component';
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
//


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    CrearComponent,
    Graficas1Component,
    ListarComponent,
    DetailUserComponent,
    CitasComponent,
    DoctoresallComponent,
    CrearcitaComponent,
    AlergiasComponent,
    ContactosComponent,
    FinanciadorComponent,
    PacientesdoctorComponent,
    AllergysComponent,
    FinancersComponent,
    ContactsComponent,
    CreateDateComponent,
    SeguimientoComponent,
    CreateComponent,
    CreateHoursComponent,
    BlockHoursComponent,
    ListDoctorsComponent,
    PendingsDatesComponent,
    TotalDatesComponent,
    SpotsComponent,
    SpecialtyesComponent,
    ProvisionsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AllergysComponent,
    FinancersComponent,
    ContactsComponent,
    CreateDateComponent
  ]
})
export class AppModule { }
