import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { QuemSomosPage } from '../pages/quem-somos/quem-somos';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { PoliticaPrivacidadePage } from '../pages/politica-privacidade/politica-privacidade';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Início', component: HomePage },
      { icon: 'list-box', title: 'Cadastro', component: CadastroPage },
      { icon: 'person', title: 'Quem Somos', component: QuemSomosPage },
      { icon: 'mail', title: 'Mensagem', component: MensagemPage },
      { icon: 'information-circle', title: 'Política de Privacidade', component: PoliticaPrivacidadePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
