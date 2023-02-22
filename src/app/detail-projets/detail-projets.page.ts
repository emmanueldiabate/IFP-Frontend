import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfficherProjetsService } from '../afficher-projets.service';
@Component({
  selector: 'app-detail-projets',
  templateUrl: './detail-projets.page.html',
  styleUrls: ['./detail-projets.page.scss'],
})
export class DetailProjetsPage implements OnInit {
  idprojet: any;
  projetParId: any;

  constructor(private routes:ActivatedRoute,private projet:AfficherProjetsService,) { }

  ngOnInit() {
    this.idprojet = this.routes.snapshot.params['id'];
    this.afficherParId();
  }
  afficherParId(){
    this.projet.projetParid(this.idprojet).subscribe(data=> {
      this.projetParId=data;
      console.log("mes idsss", this.projetParId);
    })
  }

}
