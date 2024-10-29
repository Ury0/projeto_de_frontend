import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { PerfilComponent } from './componentes/main/perfil/perfil.component';
import { CarteiraComponent } from './componentes/main/carteira/carteira.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/main/home/home.component';
import { IndexComponent } from './paginas/logIN/index.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    PerfilComponent,
    CarteiraComponent,
    FooterComponent,
    HomeComponent,
    IndexComponent,
    CadastroComponent,
    BuscadorComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
