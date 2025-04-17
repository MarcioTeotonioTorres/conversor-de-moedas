import { Injectable } from '@angular/core';
// Importamos o HttpClient ao invés do Http para o Angular 7
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';


@Injectable({providedIn: 'root'})
export class ConversorService {
  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  constructor(private http: HttpClient) {}
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
  // Na linha abaixo altere a '?' por '&'
  let params = `&base=${conversao.converter}&symbols=${conversao.convertido}`;
  return this.http
      .get(this.BASE_URL + params);
      // No Angular 6 as duas próximas linha não são mais necessárias
      //.map(response => response.json() as ConversaoResponse)
      //.catch(error => Observable.throw(error));
  }
  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
  if (conversaoResponse === undefined) {
  return 0;
  }
  return conversaoResponse.rates[conversao.convertido];
  }
  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
  if (conversaoResponse === undefined) {
  return '0';
  }
  return (1 / conversaoResponse.rates[conversao.convertido])
  .toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }

  retornaMoedaConvertida(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    
    let cotacao = conversaoResponse.rates[conversao.convertido];
    let valorInput = parseFloat(conversao.valor.toString());
    let valorConvertido = (cotacao * valorInput).toFixed(4);
    
    return valorConvertido;
  }

}
//O HttpClient citado acima pertence a outro módulo no Angular 12, que deverá ser modificado também no arquivo 'app.module.ts', conforme código a seguir:

/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importe o módulo HttpClientModule ao invés de HttpModule
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Modifique aqui a importação do módulo também
    //HttpModule,
    HttpClientModule,
    ConversorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/