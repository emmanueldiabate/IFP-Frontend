import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfficherProjetsService } from '../afficher-projets.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  mesProjets: any;

  constructor(private projet:AfficherProjetsService,private routes:ActivatedRoute) {}
  ngOnInit(): void {
    this.afficherProjet();
    console.log("ng on ints")
  }
  
  afficherProjet(){
    console.log("mes donnees")
    this.projet.afficherProjet().subscribe(data =>{
      this.mesProjets=data;
      console.log("mes projets",this.mesProjets)
    } )
  }
}
