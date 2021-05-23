import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { QuemSomosPage } from '../pages/quem-somos/quem-somos';
import { PoliticaPrivacidadePage } from '../pages/politica-privacidade/politica-privacidade';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { EmailProvider } from '../providers/email/email';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    MensagemPage,
    QuemSomosPage,
    PoliticaPrivacidadePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    MensagemPage,
    QuemSomosPage,
    PoliticaPrivacidadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    EmailProvider
  ]
})
export class AppModule {}
