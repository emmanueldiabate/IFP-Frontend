import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  formulaire = new FormGroup({
    nomComplet: new FormControl('', Validators.required),
    adresse: new FormControl(''),
    siege: new FormControl('', Validators.required),
    profession: new FormControl(''),
    nomEntreprise: new FormControl(''),
    pieceJointe: new FormControl('')
  });

  onFileSelected(event:any) {
    this.formulaire.patchValue({pieceJointe: event.target.files[0]});
  }

  submitForm() {
    console.log(this.formulaire.value);
  }


  constructor() { }

  ngOnInit() {
  }

}
