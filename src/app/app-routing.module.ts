import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { /*cria a rota do componentes (a pasta que criei ocorrencias) para ele poder mostrar no navegador as alteraçoes que fizer nele */
    path: '', pathMatch:'full', redirectTo:'ocorrencias' 
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./ocorrencias/ocorrencias.module').then(m => m.OcorrenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
