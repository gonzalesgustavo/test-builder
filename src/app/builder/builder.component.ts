import { WarehouseService } from "./../warehouse.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"]
})
export class BuilderComponent implements OnInit {
  private sub: Subscription;
  public commands: string[];

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit() {
    this.sub = this.warehouseService.getCommands().subscribe(sentcommands => {
      this.commands = sentcommands;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
