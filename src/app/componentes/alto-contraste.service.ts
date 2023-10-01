import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AltoContrasteService {
  private altoContrasteAtivo = false;

  toggleAltoContraste() {
    this.altoContrasteAtivo = !this.altoContrasteAtivo;
    this.atualizarEstiloAltoContraste();
  }

  private atualizarEstiloAltoContraste() {
    const elementosGlobais = document.querySelectorAll('body, button, input, select, h1, div:not(.buttons, .contraste)');
  
    elementosGlobais.forEach((elemento: Element) => {
      const elementoHtml = elemento as HTMLElement;
      if (this.altoContrasteAtivo) {

        elementoHtml.style.backgroundColor = 'black';
        elementoHtml.style.color = 'white';
        elementoHtml.style.borderColor = 'yellow';

      } else {
        elementoHtml.style.backgroundColor = '';
        elementoHtml.style.color = '';
        elementoHtml.style.borderColor = '';
      }
    });
  }
  
  estaAtivo() {
    return this.altoContrasteAtivo;
  }
}
