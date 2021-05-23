import { Injectable } from '@angular/core';


@Injectable()
export class EmailProvider {

   constructor() { }

  /**
   *
   * @public
   * @method enviaEmail
   * @param to    			   {string}    e-mail destinatario
   * @param cc    			   {string}    e-mail copia
   * @param bcc   			   {string}    e-mail copia oculta
   * @param attachment        {string}    Anexo
   * @param subject           {string}    Assunto
   * @param body              {string}    Mensagem
   *
   */
   enviaEmail(to         : string,
              cc         : string,
              bcc        : string,
              attachment : string,
              subject    : string,
              body       : string) : void {
      subject = subject.split(' ').join('%20');
      body = body.split(' ').join('%20');
      body = body.split('\n').join('%0A');

      window.open('mailto:' + to + '?cc=' + cc + '&subject=' + subject + '&body=' + body, '_system');
   }

}