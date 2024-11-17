import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CarteiraComponent } from './paginas/carteira/carteira.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { IndexComponent } from './paginas/logIN/index.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { CotacaoMoedasComponent } from './componentes/cotacao-moedas/cotacao-moedas.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListaFundamentosComponent } from './componentes/lista-fundamentos/lista-fundamentos.component';
import { AcaoInfoComponent } from './componentes/acao-info/acao-info.component';
import { AcaoHistoryGrafComponent } from './componentes/acao-histiory-graf/acao-histiory-graf.component';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { FormeLogInComponent } from './componentes/forme-log-in/forme-log-in.component';
import { FormeCadastroComponent } from './componentes/forme-cadastro/forme-cadastro.component';
import { SettingComponent } from './componentes/setting/setting.component';
>>>>>>> Stashed changes
=======
import { FormeLogInComponent } from './componentes/forme-log-in/forme-log-in.component';
import { FormeCadastroComponent } from './componentes/forme-cadastro/forme-cadastro.component';
>>>>>>> 69c0be0025cd8492d440fa4e2c2edd4f74e4f728

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
    ListagemComponent,
    CotacaoMoedasComponent,
    DashboardComponent,
    ListaFundamentosComponent,
    AcaoInfoComponent,
    AcaoHistoryGrafComponent,
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    FormeLogInComponent,
    FormeCadastroComponent,
    SettingComponent,
>>>>>>> Stashed changes
=======
    FormeLogInComponent,
    FormeCadastroComponent,
>>>>>>> 69c0be0025cd8492d440fa4e2c2edd4f74e4f728
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule
    
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
