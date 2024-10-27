import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { PerfilComponent } from './componentes/main/perfil/perfil.component';
import { CarteiraComponent } from './componentes/main/carteira/carteira.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    PerfilComponent,
    CarteiraComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
