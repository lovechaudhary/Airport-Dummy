import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  myHeaders = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-API-Token": "9265ee96af02fe95e132e33a447f8f08"
  });

  constructor(private http: HttpClient) {}

  getAirports() {
    return this.http.get("http://xiapp.tradewindapps.com:9912/airports", {
      headers: this.myHeaders
    });
  }

  getCurrentFlights() {
    return this.http.get("http://xiapp.tradewindapps.com:9912/currentflights", {
      headers: this.myHeaders
    });
  }
}
