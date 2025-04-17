import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor ,NG_VALUE_ACCESSOR} from '@angular/forms';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumeroDirective,
      multi: true
    }
  ] 
})
export class NumeroDirective implements ControlValueAccessor {
  // ControlValueAccessor methods 

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput($event: any) {
    let valor = $event.target.value;

    // Mantém apenas números e um único ponto decimal
    valor = valor.replace(/[^0-9.]/g, '');

    // Garante que há no máximo um ponto decimal
    const partes = valor.split('.');
    if (partes.length > 2) {
      valor = partes[0] + '.' + partes.slice(1).join('');
    }

    $event.target.value = valor;
    this.onChange($event.target.value); 
    
  }

  // ControlValueAccessor methods
  onChange: any = () => { };
  onTouched: any = () => { };     

  writeValue(value: any): void {
    // Implementação para escrever o valor no elemento, valor contido no model
    this.el.nativeElement.value = value; // Chama a função de mudança com o valor
  }     
  registerOnChange(fn: any): void {
    // Implementação para registrar a função de mudança
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Implementação para registrar a função de toque
  }

}
