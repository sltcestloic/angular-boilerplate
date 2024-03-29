import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FrameworkModule } from '../angular-framework/framework.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FrameworkModule.getStandardServices()
  ]
};
