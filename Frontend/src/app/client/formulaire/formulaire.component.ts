import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../../client';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  clientForm: FormGroup;
  color: string = 'red'; 
  txtValue:string = '';

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router){}

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      civilite: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.clientForm.value;
    const newClient = new Client(
      formValue['nom'],
      formValue['prenom'],
      formValue['adresse'],
      formValue['codePostal'],
      formValue['ville'],
      formValue['telephone'],
      formValue['mail'],
      formValue['civilite'],
      formValue['login'],
      formValue['password'],
      formValue['password2']
    );
    if(newClient.password === newClient.password2){
      this.clientService.addClient(newClient);
      this.router.navigate(['/clients']);  
    } else {
      console.log("mauvais MDP");
    }
  }

  getColor(tmp:string) 
  {
    if(tmp == ''){
      return 'red';
    } else { 
      return 'green';
    }
  }


}

