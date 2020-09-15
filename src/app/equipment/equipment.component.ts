import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipments: object[] = [
    { name: "Habitat dome" },
    { name: "Drones" },
    { name: "Food containers" },
  ];
  memberBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}
  add(name: string) {
    if (!this.equipments.map((x) => x.name).includes(name)) {
      this.equipments.push({ name });
    }
  }

  remove(member: object) {
    let index = this.equipments.indexOf(member);
    this.equipments.splice(index, 1);
  }
  edit(member: object) {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object) {
    member["name"] = name;
    this.memberBeingEdited = null;
  }
}
