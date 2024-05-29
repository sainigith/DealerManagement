import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dealer } from '../models/dealer';

@Injectable({  
  providedIn: 'root'
})
export class DealerService {
  private apiUrl = 'https://pv.greatfuturetechno.com/pv-api/dealer';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token aa4d0b1b9b2794090b18febbd71cf2c90e0d5a83'
    })
  };

  constructor(private http: HttpClient) { }

  getDealers(): Observable<Dealer[]> {
    return this.http.get<Dealer[]>(this.apiUrl, this.httpOptions);
  }

  getDealer(id: number): Observable<Dealer> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Dealer>(url, this.httpOptions);
  }

  addDealer(dealer: Dealer): Observable<Dealer> {
    return this.http.post<Dealer>(this.apiUrl, dealer, this.httpOptions);
  }

  updateDealer(dealer: Dealer): Observable<Dealer> {
    const url = `${this.apiUrl}?id=${dealer.id}`;
    return this.http.put<Dealer>(url, dealer, this.httpOptions);
  }

  deleteDealer(id: number): Observable<Dealer> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete<Dealer>(url, this.httpOptions);
  }
}
