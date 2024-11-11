import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SpaHeaderComponent  } from './app/spa-header/spa-header.component';

bootstrapApplication(SpaHeaderComponent ).catch(err => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
