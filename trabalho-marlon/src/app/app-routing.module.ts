import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/main/home/home.component';
import { PerfilComponent } from './componentes/main/perfil/perfil.component';
import { CarteiraComponent } from './componentes/main/carteira/carteira.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'perfil', component: PerfilComponent},
  {path: 'carteira', component: CarteiraComponent},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'listagem', component: ListagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
