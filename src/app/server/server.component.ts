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
    servers= ['server 1', 'server 2'];

    constructor() {
        setTimeout(() => {
            this.enableButton= true;
        },2000)

        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    showStatus() {
        return this.status;
    }

    onCreateServer() {
        this.isClicked = true;
        this.newServerStt = 'create new server ' + this.serverName;
        this.servers.push(this.serverName);
    }

    reset(): string {
        return this.userName = '';
    }

    getColor() {
        return this.status=== 'online' ? 'blue' : 'red'; 
    }
}