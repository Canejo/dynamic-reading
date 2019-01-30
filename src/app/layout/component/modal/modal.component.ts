import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalHeaderTemplateDirective, ModalFooterTemplateDirective } from './modal-templates.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() activeModal: NgbActiveModal;
  @Input() exibirFooter = true;

  exibirTitulo = true;

  @ContentChild(ModalHeaderTemplateDirective, { read: TemplateRef }) modalHeaderTemplate: TemplateRef<any>;
  @ContentChild(ModalFooterTemplateDirective, { read: TemplateRef }) modalFooterTemplate: TemplateRef<any>;

  constructor(
  ) {}


  ngOnInit() {
    if (!this.modalHeaderTemplate) {
      this.exibirTitulo = false;
    }
  }
}
