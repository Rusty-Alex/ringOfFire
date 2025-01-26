import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
(window as any).__Zone_disable_requestAnimationFrame = true; // Deaktiviert Zone.js für requestAnimationFrame
(window as any).__Zone_disable_on_property = true; // Deaktiviert Zone.js für EventListener (z. B. addEventListener)
(window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // Verhindert das Patchen bestimmter Events


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
