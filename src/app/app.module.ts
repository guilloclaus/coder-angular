import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageWrapperComponent } from './component/page-wrapper/page-wrapper.component';
import { HomeComponent } from './component/home/home.component';
import { AlumnosComponent } from './views/alumnos/alumnos.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { InscripcionesComponent } from './views/inscripciones/inscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    PageWrapperComponent,
    HomeComponent,
    AlumnosComponent,
    CursosComponent,
    InscripcionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
