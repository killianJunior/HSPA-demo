
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from 'src/app/model/iproperty-base';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IpropertyBase[];

  constructor(private route: ActivatedRoute,
    private housingService: HousingService) { }

  ngOnInit(): void {
        if (this.route.snapshot.url.toString()) {
            this.SellRent = 2; //Means we are on rent property url else we are on base url
        }
        this.housingService.getAllProperties(this.SellRent).subscribe(
            data => {
            this.properties = data;
            // const newProperty = JSON.parse(localStorage.getItem('newProp'));

            // if(newProperty.SellRent == this.SellRent){
            //   this.properties = [newProperty, ...this.properties]
            // }
            console.log(data);
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
