import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConversorComponent } from "./conversor/components/conversor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConversorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Conversor de Moedas';
}
