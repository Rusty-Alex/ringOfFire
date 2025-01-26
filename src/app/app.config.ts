import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "ringoffire-1d486", appId: "1:1013610750487:web:f0bd9f0d3b55d0a1ad7252", storageBucket: "ringoffire-1d486.firebasestorage.app", apiKey: "AIzaSyAmi666CoEYU548o7__S87axzUSgsPSDpU", authDomain: "ringoffire-1d486.firebaseapp.com", messagingSenderId: "1013610750487", measurementId: "G-KVHRQE3T20" })), provideFirestore(() => getFirestore())]
};
