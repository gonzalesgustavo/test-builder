import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { Order } from '../builder/order.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testElements;
  private sub: Subscription;

  constructor(private warehouseServise: WarehouseService) { }

  ngOnInit() {
    this.sub = this.warehouseServise.getCommands().subscribe(testComponents => {
      this.testElements = testComponents.map((element, idx) => {
        console.log(element.type)
        return;
      });
    })
  }

}
