import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
declare let L: any;

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"]
})
export class CurrentComponent implements OnInit {
  currentAirports: object;
  maps;
  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.getCurrentFlights().subscribe(results => {
      this.currentAirports = results;
      console.log("current airports: " + JSON.stringify(results));
    });
  }

  FlightsOpenMap(lat, lng) {
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
