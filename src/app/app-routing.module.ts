import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ModificarComponent } from './pages/modificar/modificar.component';

const routes: Routes = [
  {
      path:'crear',
      component: CrearComponent,
      pathMatch:'full'   
  },
  {
    path:'eliminar',
    component: EliminarComponent,
    pathMatch:'full'   
},
{
  path:'modificar',
  component: ModificarComponent,
  pathMatch:'full'   
},
{
  path:'buscar',
  component: BuscarComponent,
  pathMatch:'full'   
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
