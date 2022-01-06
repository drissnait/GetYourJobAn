import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './inscription/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getUtilisateurs():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public addUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/inscription`, utilisateur);
  }

  public updateUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>(`${this.apiServerUrl}/update`, utilisateur);
  }
  
}
