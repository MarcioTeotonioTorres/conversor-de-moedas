import { Component ,Directive,OnInit, ViewChild} from '@angular/core';
import { ConversorService ,MoedaService} from '../services';
import { Conversao, ConversaoResponse, Moeda } from '../models';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumeroDirective } from '../directives';
''

@Component({
  selector: 'app-conversor',
  imports: [CommonModule,FormsModule, NumeroDirective],
  providers: [MoedaService, ConversorService],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent implements OnInit
{
 
 moedas!: Moeda[];
 conversao!: Conversao;         
 possuiErro!: boolean;
 conversaoResponse!: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm!:NgForm;

  constructor( public moedaService: MoedaService,
              public conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    //console.log('moedas',this.moedas);
    this.init();
  }


  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {    
      this.conversorService.converter(this.conversao)
        .subscribe((resposta: ConversaoResponse) => {
          this.conversaoResponse = resposta;
          this.possuiErro = false;
        }, error => {
          this.possuiErro = true;
          console.error('Erro na conversão:', error);
        });
    }
  }
  valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return this.conversorService.retornaMoedaConvertida(this.conversaoResponse, this.conversao);    
    
  }
}
