import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CarteiraComponent } from './paginas/carteira/carteira.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { IndexComponent } from './paginas/logIN/index.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path:'perfil', component: PerfilComponent},
  {path: 'carteira', component: CarteiraComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
