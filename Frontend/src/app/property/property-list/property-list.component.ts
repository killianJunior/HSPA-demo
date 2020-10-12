import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array <any> = [
      {

            "Id": 1,
            "name": "Birla House",
            "type": "House",
            "price": 12000
        },
        {

            "Id": 2,
            "name": "Uyo House",
            "type": "Duplex",
            "price": 50000
        },
        {

            "Id": 3,
            "name": "Trump House",
            "type": "Bungalow",
            "price": 65000
        },
        {

            "Id": 4,
            "name": "Obama House",
            "type": "House",
            "price": 45000
        },
        {

            "Id": 5,
            "name": "Bush House",
            "type": "House",
            "price": 48000
        },
        {

          "Id": 6,
          "name": "My Villa",
          "type": "Villa",
          "price": 70000
      }
]

  constructor() { }

  ngOnInit() {
  }

}
