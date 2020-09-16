import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    "Moon soil sample",
    "Plant growth in orbit",
    "Human bone density changes",
    "Water droplet podcast for grades K-5",
    "Satellite launch",
  ];
  experimentHold: object[] = [];

  constructor() {}

  ngOnInit() {}

  addItem(item: object) {
    if (this.experimentHold.includes(item)) {
      return false;
    } else {
      this.experimentHold.push(item);
      return true;
    }
  }

  removeItem(item: object) {
    this.experimentHold = this.experimentHold.filter((x) => {
      return x !== item;
    });
  }

  emptyHold() {
    this.experimentHold = [];
  }
}
