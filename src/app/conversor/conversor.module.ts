import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClient } from '@angular/common/http';


@NgModule({
  //declarations: [ConversorComponent ], declaração nao necessária na versao atual do angular
  imports: [
    CommonModule //,ConversorComponent import nao necessario na versao atual do angular
                 //, objeto statico que exporta o componente ConversorComponent
                 
  ],
  providers: [MoedaService,
              ConversorService, HttpClient 
  ] //necessario para injetar o servico 
                            // MoedaService no modulo principal

 
  //exports: [ ConversorComponent ] tambem não necessario para ter a tag que 
  // chama o conversor.component.html usada 
  // em app.component.html
})
export class ConversorModule { }
