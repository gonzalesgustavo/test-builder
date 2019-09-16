import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WarehouseService {
  private _commands = new BehaviorSubject<string[]>([]);

  constructor() {
    this._commands.asObservable();
  }

  getCommands() {
    return this._commands.pipe(take(1));
  }

  addCommand(command: string) {
    return this._commands.pipe(
      take(1),
      tap(commands => {
        commands.push(command);
        this._commands.next(commands);
      })
    );
  }
}
