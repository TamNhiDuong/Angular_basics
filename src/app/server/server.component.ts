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
    newServerStt: string = 'no new server';
    serverName: string = 'initial Name';
    userName: string = '';
    isClicked: boolean = false;

    showStatus() {
        return this.status;
    }

    constructor() {
        setTimeout(() => {
            this.enableButton= true;
        },2000)
    }

    onCreateServer() {
        this.isClicked = true;
        return this.newServerStt = 'create new server ' + this.serverName;
    }

    reset(): string {
        return this.userName = '';
    }
}