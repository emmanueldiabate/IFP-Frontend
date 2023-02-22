import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficherProjetsService {

  constructor(private http: HttpClient) { }


  afficherProjet() :Observable<any>{
    return this.http.get(`http://localhost:8080/Projets/read`);
  }
  projetParid(id:number) :Observable<any>{
    return this.http.get(`http://localhost:8080/Projets/afficherParid/${id}`);
  }
}

