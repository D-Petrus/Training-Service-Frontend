import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferSend} from '../model/offer-send';

@Injectable({
  providedIn: 'root'
})
export class OfferSendService {
  private apiServerUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${this.apiServerUrl}`,
    }),
  };

  private mail: string | undefined;
  private subcategoryName: string | undefined;
  private categoryName: string | undefined;
  private courses: string[] | undefined;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  createOffer(offer: OfferSend) {
    this.http.post<OfferSend>(`${this.apiServerUrl}/offer`, offer, this.httpOptions).toPromise().catch(
      (error) => {
        alert(error.message);
      }
    );
  }

  get _mail(): string {
    return this.mail as string;
  }

  set _mail(value: string) {
    this.mail = value;
  }

  get _subcategoryName(): string {
    return this.subcategoryName as string;
  }

  set _subcategoryName(value: string) {
    this.subcategoryName = value;
  }

  get _categoryName(): string {
    return this.categoryName as string;
  }

  set _categoryName(value: string) {
    this.categoryName = value;
  }

  get _courses(): string[] {
    return this.courses as string[];
  }

  set _courses(value: string[]) {
    this.courses = value;
  }
}
