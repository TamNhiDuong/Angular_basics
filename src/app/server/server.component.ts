import { Component } from '@angular/core';

@Component({
    selector: 'app-server-component',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id: number = 4;
    status: string = 'offline';
    enableButton: boolean = false;

    showStatus() {
        return this.status;
    }

    constructor() {
        setTimeout(() => {
            this.enableButton= true;
        },2000)
    }
}