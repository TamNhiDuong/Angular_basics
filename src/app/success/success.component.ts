import { Component } from '@angular/core';

@Component({
    selector: 'app-success-component',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent {
    updatedName: string = '';
    onUpdateServerName() {
        this.updatedName = (<HTMLInputElement>event.target).value;
    }


}