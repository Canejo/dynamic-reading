import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonLoadingService } from './service/button-loading.service';

@Component({
  selector: 'button-loading',
  templateUrl: './button-loading.component.html',
  styleUrls: ['./button-loading.component.scss']
})
export class ButtonLoadingComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  class: string;

  @Output()
  executar: EventEmitter<any> = new EventEmitter();

  concluido = false;
  falha = false;
  processando = false;

  constructor(
    private _buttonLoadingService: ButtonLoadingService
  ) {
  }

  ngOnInit() {
    this._buttonLoadingService.concluido$.subscribe((id: string) => {
      if (id === this.id) {
        this.processando = false;
        this.concluido = true;

        setTimeout(() => {
          this.concluido = false;
        }, 1500);
      }
    });

    this._buttonLoadingService.falha$.subscribe((id: string) => {
      if (id === this.id) {
        this.processando = false;
        this.falha = true;
        setTimeout(() => {
          this.falha = false;
        }, 1500);
      }
    });

    this._buttonLoadingService.processando$.subscribe((id: string) => {
      if (id === this.id) {
        this.processando = true;
      }
    });
  }

  onClick() {
    if (!this.processando && !this.concluido && !this.falha) {
      this.executar.emit();
    }
  }
}
