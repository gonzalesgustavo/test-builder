import { element } from "protractor";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, tap, map } from "rxjs/operators";
import { Order } from "./builder/order.model";

@Injectable({
  providedIn: "root"
})
export class WarehouseService {
  private _commands = new BehaviorSubject<Order[]>([]);
  private _test = new BehaviorSubject<any[]>([]);

  constructor() {
    this._commands.asObservable();
    this._test.asObservable();
  }

  getCommands() {
    return this._commands.pipe(take(1));
  }
  assembleTest() {
    return this._test.pipe(take(1));
  }

  addCommand(command: Order) {
    return this._commands.pipe(
      take(1),
      tap(commands => {
        let str = "";
        switch (command.type) {
          case "Math":
            str = `${command.payload.attrOne} ${command.payload.symbol} ${command.payload.attrTwo} = ____________`;
            break;
          case "Fraction":
            str = `${command.payload.attrOne} ${command.payload.symbol} ${command.payload.attrTwo} = ____________`;
            break;
          case "Paragraph":
            str = `${command.payload.text}\n\n__________________________________________________\n__________________________________________________\n__________________________________________________`;
            break;
          default:
            break;
        }
        // console.log(str);
        this.buildTest(str).subscribe();
        commands.push(command);
        this._commands.next(commands);
      })
    );
  }
  private buildTest(problem) {
    return this._test.pipe(
      take(1),
      tap(testElements => {
        testElements.push(problem);
        this._test.next(testElements);
      })
    );
  }
}
