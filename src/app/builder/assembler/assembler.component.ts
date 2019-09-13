import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { WarehouseService } from "src/app/warehouse.service";

@Component({
  selector: "app-assembler",
  templateUrl: "./assembler.component.html",
  styleUrls: ["./assembler.component.scss"]
})
export class AssemblerComponent implements OnInit, OnDestroy {
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
