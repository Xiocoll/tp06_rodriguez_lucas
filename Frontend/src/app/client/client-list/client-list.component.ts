import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from '../../client';
import { ClientService } from '../../client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {

  clients: Client[];

  constructor() { }

  ngOnInit() {
    

  }
  ngOnDestroy() {
  }
}
