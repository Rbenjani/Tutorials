import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, fromEvent, empty } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { map, share, auditTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  public scroll$: Observable<number>;

  // Para el objeto document, Angular proporciona una referencia, pero para window no,
  // por eso sólo se inyecta document
  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Comprobamos si estamos en navegador
    if (isPlatformBrowser(this.platformId)) {
      // Creamos observable a partir del evento de scroll
      this.scroll$ = fromEvent(window, 'scroll').pipe(
        auditTime(200),
        map(event => {
          return window.scrollY || this.document.documentElement.scrollTop;
        }),
        share() // Para evitar que se dupliquen suscripciones
      );
    } else {
      this.scroll$ = empty(); // Asignamos un observable vacío
    }
  }
}
