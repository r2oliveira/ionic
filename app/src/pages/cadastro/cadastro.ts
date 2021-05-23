import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { EmailProvider } from '../../providers/email/email';

/**
 * Página do Cadastro
 */
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  nome: string;
  telefone: string;
  whatsapp: string;
  email: string;
  permiteContato: string = '1';

  // Serviços Jurídicos a serem selecionados para o cadastro
  servicosJuridicos: string[] = [
    'Remédio Gratuito Fornecido Pelo Estado',
    'Planos de Demissão Voluntária ou Não',
    'Convênio Médico/Planos de Saúde',
    'Isenção de Impostos a Doentes/Deficientes Físicos',
    'Reintegração No Emprego',
    'Horas Extras',
    'Adicional Noturno',
    'Equiparação Salarial',
    'Desvio de Função',
    'PLR (Participação em Lucros e Resultados)',
    'Dano Moral e Material Decorrente De Acidente/Doença No Trabalho',
    'Assédio Sexual No Ambiente De Trabalho',
    'Integração De Remuneração Variável E Seus Reflexos',
    'Estabilidade No Emprego (Temporária/Definitiva)',
    'Propriedade Intelectual',
    'Discriminação De Funcionários De Carreira',
    'Periculosidade',
    'Insalubridade',
    'Seguro de Vida em Grupo',
    'Esvaziamento de Função',
    'Liberação de Plano de Previdência Complementar (Aposentadoria)',
    'Aposentadoria Pelo INSS',
    'Pecúlio',
    'Conferência de cálculos e Fatos Correlatos'];

  listaServicosJuridicos: Array<{id: number, marcado: boolean, titulo: string}>;

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
    this.whatsapp = "";
    this.email = "";
    this.listaServicosJuridicos = [];
    for (let index = 0; index < this.servicosJuridicos.length; index++) {
      this.listaServicosJuridicos.push({
        id: index,
        marcado: false,
        titulo: this.servicosJuridicos[index]});
    }
  }

  /**
   * Faz a marcação o serviço jurídico selecionado.
   * @param index 
   */
  marcaServicoJuridico(index: number) {
    this.listaServicosJuridicos[index].marcado = !this.listaServicosJuridicos[index].marcado;
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
   * @return Os campos do formulário foram preenchidos corretamente?
   */
  private validaCampos() : boolean {
    if (this.nome.trim() == "") {
      this.mensagemAlerta("Nome","Informe o seu Nome.");
      return false;
    }
    if (this.telefone.trim() == "" && this.whatsapp.trim() == "" && this.email.trim() == "") {
      this.mensagemAlerta("Contato","Informe pelo menos o seu Telefone, ou seu WhatsApp, ou seu e-mail.");
      return false;
    }
    if (!this.existeAlgumServicoMarcado()) {
      this.mensagemAlerta("Serviço Jurídico", "Selecione pelo menos um Serviço!");
      return false;
    }
    return true;
  }


  /**
   * Verifica se algum serviço jurídico foi marcado.
   * @return Algum serviço selecionado?
   */
  existeAlgumServicoMarcado() : boolean {
    for (let index = 0; index < this.servicosJuridicos.length; index++) {
      if (this.listaServicosJuridicos[index].marcado){
        return true;
      }
    }
    return false;
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
   * Envia a mensagem de cadastro.
   * @public
   * @method enviarMenssagem
   * @return {none}
   */
  enviarMenssagem() : void
  {
    let to 		: string		= 'pergunte@agamenonmartins.com.br',
        cc 		: string		= 'dramago@terra.com.br',
        bcc 		: string		= '',
        subject 	: string		= 'APP | CADASTRO',
        mensagem 	: string		= this.montarTextoMensagem();

    this.emailProvider.enviaEmail(to, cc, bcc, null, subject, mensagem);
  }

  /**
   * Monta o texto da mensagem
   * @return textoMensagem
   */
  montarTextoMensagem() : string {
    var textoMensagem : string = 
        '|| AGAMENON MARTINS ||\n\n-- Cadastro do APP --\n\n' +
        'Remetente: ' + this.nome + '\n' +
        'Telefone: ' + this.telefone + '\n' +
        'WhatsApp: ' + this.whatsapp + '\n' +
        'E-mail: ' + this.email + '\n\n' +
        'Serviços Jurídicos solicitados:\n\n';
    for (let index = 0; index < this.servicosJuridicos.length; index++) {

      if (this.listaServicosJuridicos[index].marcado){
        textoMensagem += '_ ' + (this.listaServicosJuridicos[index].titulo) + '\n';
      }
    }
    textoMensagem += '\n\nPermite retorno do contato: ';

    if (this.permiteContato == '1') {
      textoMensagem += 'SIM'
    } else {
      textoMensagem += 'NÃO'
    }
    textoMensagem += '\n';
    return textoMensagem;
  }
}
