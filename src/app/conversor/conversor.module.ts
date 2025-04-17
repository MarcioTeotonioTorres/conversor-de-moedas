import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ConversorComponent } from './components';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, 
    FormsModule, NumeroDirective// Adicionando FormsModule para uso de formulários, e a diretiva 
    //NumeroDirective para validar o campo de entrada de número
                 
  ],
 /* providers: [MoedaService,
              ConversorService, HttpClient
  ] //necessario para injetar o servico (Tá tudo global com providedIn: 'root' nos services) e o
  // e o provideHTtpClient() no app.config.ts deixa o HttpClient também blobal sem necessitar
  // de estar aqui no array providers*/
                            // MoedaService no modulo principal da aplicação. */

 
  //exports: [ ConversorComponent ] tambem não necessario para ter a tag que 
  // chama o conversor.component.html usada 
  // em app.component.html
})
export class ConversorModule { }
