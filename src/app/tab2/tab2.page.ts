import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfficherProjetsService } from '../afficher-projets.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {
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