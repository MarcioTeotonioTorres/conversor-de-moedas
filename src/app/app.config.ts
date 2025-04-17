import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient()
  ]
};
/* provideHttpClient() garante que o
 HttpClient está registrado no escopo global da aplicação,
  sendo acessível para qualquer serviço ou componente. */