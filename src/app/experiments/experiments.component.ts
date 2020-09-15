import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    { name: "Mars soil sample" },
    { name: "Plant growth in habitat" },
    { name: "Human bone density" },
  ];
  memberBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}
  add(name: string) {
    if (!this.experiments.map((x) => x.name).includes(name)) {
      this.experiments.push({ name });
    }
  }

  remove(member: object) {
    let index = this.experiments.indexOf(member);
    this.experiments.splice(index, 1);
  }
  edit(member: object) {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object) {
    member["name"] = name;
    this.memberBeingEdited = null;
  }

}
