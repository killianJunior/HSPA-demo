
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  properties: IProperty[];

  constructor(private route: ActivatedRoute,
    private housingService: HousingService) { }

  ngOnInit(): void {
        if (this.route.snapshot.url.toString()) {
            this.sellRent = 2; //Means we are on rent property url else we are on base url
        }
    this.housingService.getAllProperties(this.sellRent).subscribe(
        data => {
        this.properties = data;
        // console.log(data);
        // console.log(this.route.snapshot.url.toString());
        },
        error => {
          console.log('httperror:');
          console.log(error);
        }
    )
    // this.http.get('data/properties.json').subscribe(
    //   data => {
    //     this.properties = data;

    //   }
    // )
  }

}
