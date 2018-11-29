import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  airports: object;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.getAirports().subscribe(results => {
      this.airports = results;
      console.log("airpots: " + JSON.stringify(results));
    });
  }
}
