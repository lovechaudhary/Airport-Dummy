import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
declare let L: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  airports: object;
  maps;
  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.getAirports().subscribe(results => {
      this.airports = results;
      console.log("airpots: " + JSON.stringify(results));
    });
  }

  openMap(lat, lng) {
    if (this.maps) {
      const container = L.DomUtil.get("map");
      if (container != null) {
        container._leaflet_id = null;
      }
    }
    console.log("latitude: " + lat + " longitude: " + lng);
    this.maps = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.maps);
  }
}
