import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './src/componentes/head/head.component';
import { MainComponent } from './src/componentes/main/main.component';
import { FooterComponent } from './src/componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    FooterComponent
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
