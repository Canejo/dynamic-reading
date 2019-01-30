import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ButtonLoadingService {

  private _concluido = new Subject<string>();
  private _falha = new Subject<string>();
  private _processando = new Subject<string>();

  concluido$ = this._concluido.asObservable();
  falha$ = this._falha.asObservable();
  processando$ = this._processando.asObservable();

  constructor() { }

  concluido(id?: string) {
    this._concluido.next(id);
  }

  falha(id?: string) {
    this._falha.next(id);
  }

  processando(id?: string) {
    this._processando.next(id);
  }
}
