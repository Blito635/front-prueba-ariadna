import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BotonComponent } from './components/boton/boton.component';
import { BarraNabComponent } from './components/barra-nab/barra-nab.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarraPestanasComponent } from './components/barra-pestanas/barra-pestanas.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    BarraNabComponent,
    FooterComponent,
    BarraPestanasComponent,
    CrearComponent,
    ModificarComponent,
    BuscarComponent,
    EliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
