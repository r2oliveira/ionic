import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { CadastroPage } from '../cadastro/cadastro';
import { MensagemPage } from '../mensagem/mensagem';
import { QuemSomosPage } from '../quem-somos/quem-somos';

/**
 * Página de Início
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paginaCadastro = CadastroPage;
  paginaMensagem = MensagemPage;
  paginaQuemSomos = QuemSomosPage;

  site: string = 'agamenon.adv.br';
  email: string = 'pergunte@agamenonmartins.com.br';
  celular: string = '(11) 951-444-000';
  celular_numero: string = '5511951444000';
  facebook_id: string = 'agamenonmartinsadvogado';

  linkApiWhatsapp: string = 'https://api.whatsapp.com/send?phone=';
  linkApiFacebook: string = 'http://www.facebook.com/';

  /**
   * Construtor
   * @param navCtrl 
   * @param callNumber 
   */
  constructor(public navCtrl: NavController, public callNumber: CallNumber) { }

  /**
   * Abre a página de Cadastro
   */
  abrirCadastro() {
    this.navCtrl.push(this.paginaCadastro);
  }

  /**
   * Abre a página de Mensagem
   */
  abrirMensagem() {
    this.navCtrl.push(this.paginaMensagem);
  }

  /**
   * Abre a página de Quem Somos
   */
  abrirQuemSomos() {
    this.navCtrl.push(this.paginaQuemSomos);
  }

  /**
   * Abre o site
   */
  abrirSite() {
    this.abrirUrl('http://' + this.site);
  }

  /**
   * Abre o Facebook
   */
  abrirFacebook() {
    this.abrirUrl(this.linkApiFacebook + this.facebook_id);
  }

  /**
   * Abre o WhatsApp
   */
  abrirWhatsapp() {
    this.abrirUrl(this.linkApiWhatsapp + this.celular_numero);
  }

  /**
   * Abre uma URL
   */
  abrirUrl(url): void {
    window.open(url, '_blank');
  }

  /**
   * Faz uma ligação telefônica
   */
  fazerLigacao(): void {
    this.callNumber.callNumber(this.celular, true);
  }

  /**
   * Abre a janela de envio de e-mail
   */
  abrirEmail() {
    window.open('mailto:' + this.email, '_system');
  }

}
