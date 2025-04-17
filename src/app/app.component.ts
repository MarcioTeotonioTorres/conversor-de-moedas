import { Component } from '@angular/core';
import { ConversorComponent } from "./conversor/components/conversor.component";

@Component({
  selector: 'app-root',
  imports: [ ConversorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Conversor de Moedas';
}
