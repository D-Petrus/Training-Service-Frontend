import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferSend} from '../model/offer-send';
import {tap} from 'rxjs/operators';

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

  private mail = '';
  private subcategoryName = '';
  private categoryName = '';
  private courses: string[] = [];
  private sumPrice = 0;
  private sumDuration = 0;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  createOffer = (offer: OfferSend) =>
    this.http.post<OfferSend>(`${this.apiServerUrl}/offer`, offer, this.httpOptions).pipe(
      tap(() => console.log('TODO reset offer service data'))
    )

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

  get _sumPrice(): number {
    return this.sumPrice as number;
  }

  set _sumPrice(value: number) {
    this.sumPrice = value;
  }

  get _sumDuration(): number {
    return this.sumDuration as number;
  }

  set _sumDuration(value: number) {
    this.sumDuration = value;
  }
}
