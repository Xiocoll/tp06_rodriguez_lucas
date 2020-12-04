import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  authForm: FormGroup;
  response : Subscription =null;
  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }

  ngOnInit() {
  
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy(){
    this.response.unsubscribe();
  }

  onSubmitForm(){
    const formValue = this.authForm.value;
    this.response = this.clientService.getToken(formValue["login"], formValue["password"] ).subscribe((test:any) => {
      console.log(test);
      if(test.success){
        alert("Bravo");
      } else {
        alert("Perdu");
      }
    });
    
  }

}