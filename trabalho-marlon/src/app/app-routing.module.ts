import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/main/home/home.component';
import { PerfilComponent } from './componentes/main/perfil/perfil.component';
import { CarteiraComponent } from './componentes/main/carteira/carteira.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'perfil', component: PerfilComponent},
  {path: 'carteira', component: CarteiraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
