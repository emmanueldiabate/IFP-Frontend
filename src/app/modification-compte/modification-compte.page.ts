import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modification-compte',
  templateUrl: './modification-compte.page.html',
  styleUrls: ['./modification-compte.page.scss'],
})
export class ModificationComptePage implements OnInit {
  
  // myForm = new FormGroup({
  //   nomComplet: new FormControl('', Validators.required),
  //   adresse: new FormControl('', Validators.required),
  //   siege: new FormControl('', Validators.required),
  //   profession: new FormControl(''),
  //   nomEntreprise: new FormControl(''),
  //   pieceJointe: new FormControl('')
  // });
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


