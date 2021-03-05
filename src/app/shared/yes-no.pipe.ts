import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'yes-no' })
export class YesNoPipe implements PipeTransform {
    transform(value: string) {
        switch (value) {
            case 'O':
                return 'Oui';
            case 'N':
                return 'Non';
            default:
                return value;
        }
    }
}