import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EmailProvider } from '../../providers/email/email';

/**
 * Página de Mensagem
 */
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html'
})
export class MensagemPage {

  nome: string;
  telefone: string;
  mensagem: string;

  /**
   * Construtor
   * @param navCtrl
   * @param alerCtrl
   * @param emailProvider
   */
  constructor(public navCtrl: NavController,
              public alerCtrl: AlertController,
              private emailProvider : EmailProvider) {
    this.nome = "";
    this.telefone = "";
    this.mensagem = "";
  }

  /**
   * Clique do botão enviar
   */
  cliqueBotaoEnviar() {
    if (this.validaCampos()) {
      this.enviarMenssagem();
      this.navCtrl.pop();
    }
  }

  /**
   * Valida os campos preenchidos.
   */
  private validaCampos() : boolean {
    if (this.nome.trim() == "") {
      this.mensagemAlerta("Nome","Informe o Nome.");
      return false;
    }
    if (this.telefone.trim() == "") {
      this.mensagemAlerta("Telefone", "Informe o seu Telefone.");
      return false;
    }
    if (this.mensagem.trim() == "") {
      this.mensagemAlerta("Mensagem", "Informe sua mensagem.");
      return false;
    }
    return true;
  }

  /**
   * Mensagem de alerta
   * @param titulo 
   * @param mensagem 
   */
  mensagemAlerta(titulo: string, mensagem: string) {
    let confirm = this.alerCtrl.create({
      title: titulo,
      message: mensagem,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        }]
    });
    confirm.present()
  }

  /**
   * Envia a mensagem.
   * @public
   * @method enviarMenssagem
   * @return {none}
   */
  enviarMenssagem() : void
  {
    let to 		: string		= 'pergunte@agamenonmartins.com.br',
        cc 		: string		= 'dramago@terra.com.br',
        bcc 		: string		= '',
        subject 	: string		= 'APP | MENSAGEM',
        mensagem 	: string		= this.montarTextoMensagem();

    this.emailProvider.enviaEmail(to, cc, bcc, null, subject, mensagem);
  }

  /**
   * Monta o texto da mensagem
   * @return textoMensagem
   */
  montarTextoMensagem() : string {
    var textoMensagem : string = 
        '|| AGAMENON MARTINS ||\n\n-- Mensagem do APP --\n\n' +
        'Remetente: ' + this.nome + '\n' +
        'Telefone: ' + this.telefone + '\n\n' +
        'Mensagem:\n' + this.mensagem;
    return textoMensagem;
  }
}
