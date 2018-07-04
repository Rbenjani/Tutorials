import { Injectable, Inject } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { map, share, auditTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  public scroll$: Observable<number>;

  // Para el objeto document, Angular proporciona una referencia, pero para window no,
  // por eso sólo se inyecta document
  constructor(@Inject(DOCUMENT) private document: any) {
    // Creamos observable a partir del evento de scroll
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      // Emite el último evento recibido cada 200ms
      auditTime(200),
      map(event => {
        return window.scrollY || this.document.documentElement.scrollTop;
      }),
      share() // Para evitar que se dupliquen suscripciones
    );
  }
}
