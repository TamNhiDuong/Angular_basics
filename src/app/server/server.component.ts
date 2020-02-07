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

    showStatus() {
        return this.status;
    }

    constructor() {
        setTimeout(() => {
            this.enableButton= true;
        },2000)
    }

    onCreateServer() {
        return this.newServerStt = 'create new server ' + this.serverName;
    }


}