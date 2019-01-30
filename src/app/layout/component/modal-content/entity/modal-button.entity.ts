import { Observable } from 'rxjs';

export class ModalButtonEntity {
    name: string;
    notClose?: boolean;
    click?: Observable<any>;
    class?: string;
}
