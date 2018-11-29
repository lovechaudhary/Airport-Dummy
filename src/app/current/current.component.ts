import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"]
})
export class CurrentComponent implements OnInit {
  currentAirports: object;
  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.getCurrentFlights().subscribe(results => {
      this.currentAirports = results;
      console.log("current airports: " + JSON.stringify(results));
    });
  }
}
