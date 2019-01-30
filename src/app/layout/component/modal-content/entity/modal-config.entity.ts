import { ModalButtonEntity } from './modal-button.entity';

export class ModalConfigEntity {
    title?: string;
    message?: string;
    content?: any;
    hideHeader?: boolean;
    buttons?: ModalButtonEntity[];
    size?: 'sm' | 'lg';
    windowClass?: string;
    ariaLabelledBy?: string;
    centered?: boolean;
    parameters?: any;
}
