import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Property } from 'src/app/model/iproperty';
import { IpropertyBase } from 'src/app/model/iproperty-base';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing.service';
// import { IProperty } from '../IProperty.interface';

@Component({
  // selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

@ViewChild('formTabs') formTabs: TabsetComponent;


  addPropertyForm: FormGroup;
  nextClicked: boolean;

  property = new Property();

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  mainEntrances: Array<string> = ['East', 'West', 'South', 'North']

  cityList: Array<string> = ['Uyo', 'Eket', 'Ikot Ekpene', 'Oron' ]

  constructor(private fb: FormBuilder,
              private router: Router,
              private housingService: HousingService,
              private alertify: AlertifyService) { }


  ngOnInit() {
    this.CreateAddPropertyForm();
    console.log('success')
  }

// Two way Data Binding
propertyView: IpropertyBase = {
  Id: null,
  name: '',
  price: null,
  SellRent: null,
  ptype: null,
  ftype: null,
  BHK: null,
  builtArea: null,
  city: null,
  RTM:null,
};

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({

      BasicInfo: this.fb.group({

        SellRent: ['1', Validators.required],
        ptype: [null, Validators.required],
        name: [null, Validators.required],
        ftype: [null, Validators.required],
        city: [null, Validators.required],
        BHK: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({

        price: [null, Validators.required],
        builtArea: [null, Validators.required],
        carpetArea: [null],
        security: [null],
        maintenance:[null]
      }),

      AddressInfo: this.fb.group({
        floorNo: [null],
        totalFloor: [null],
        address:[null, Validators.required],
        landMark: [null]
      }),

      OtherInfo: this.fb.group({
        RTM: [null,Validators.required],
        possession: [null],
        AOP: [null],
        gated: [null],
        mainEntrance: [null],
        description: [null]
      })

    });
  }


//#region
  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get PriceInfo() {
      return this.addPropertyForm.controls.PriceInfo as FormGroup
  }

  get AddressInfo() {
    return this.addPropertyForm.controls.AddressInfo as FormGroup
  }

  get OtherInfo() {
    return this.addPropertyForm.controls.OtherInfo as FormGroup
  }

  //#endregion


  //#region
  get SellRent() {
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }

  get ptype() {
    return this.BasicInfo.controls.ptype as FormControl;
  }

  get ftype() {
    return this.BasicInfo.controls.ftype as FormControl;
  }

  get name() {
    return this.BasicInfo.controls.name as FormControl;
  }

  get city() {
    return this.BasicInfo.controls.city as FormControl;
  }

  get price() {
    return this.PriceInfo.controls.price as FormControl;
  }

  get builtArea() {
    return this.PriceInfo.controls.builtArea as FormControl;
  }

  get carpetArea() {
    return this.PriceInfo.controls.carpetArea as FormControl;
  }

  get security() {
    return this.PriceInfo.controls.security as FormControl;
  }

  get maintenance() {
    return this.PriceInfo.controls.maintenance as FormControl;
  }

  get floorNo() {
    return this.AddressInfo.controls.floorNo as FormControl;
  }

  get totalFloor() {
    return this.AddressInfo.controls.totalFloor as FormControl;
  }

  get address() {
    return this.AddressInfo.controls.address as FormControl;
  }

  get landMark() {
    return this.AddressInfo.controls.landMark as FormControl;
  }

  get description() {
    return this.OtherInfo.controls.description as FormControl;
  }
  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }
  get possession() {
    return this.OtherInfo.controls.possession as FormControl;
  }
  get AOP() {
    return this.OtherInfo.controls.AOP as FormControl;
  }
  get gated() {
    return this.OtherInfo.controls.gated as FormControl;
  }
  get mainEntrance () {
    return this.OtherInfo.controls.mainEntrance as FormControl;
  }



  //#endregion



  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.nextClicked = true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success("Property Added Successfully");
      // console.log(this.addPropertyForm);

      if (this.SellRent.value === '2') {
            this.router.navigate(['/rent-property'])
      } else {
            this.router.navigate(['/'])
      }
    } else {
      this.alertify.error("Please correct validation errors");
    }

  }

  mapProperty(): void {
    this.property.Id  = this.housingService.newProdId();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.ptype = this.ptype.value;
    this.property.name = this.name.value;
    this.property.city = this.city.value;
    this.property.ftype = this.ftype.value;
    this.property.price = this.price.value;
    this.property.security = this.security.value;
    this.property.builtArea = this.builtArea.value;
    this.property.carpetArea = this.carpetArea.value;
    this.property.floorNo = this.floorNo.value;
    this.property.totalFloor = this.totalFloor.value;
    this.property.address = this.address.value;
    this.property.address2 = this.landMark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.gated = this.gated.value;
    this.property.mainEntrance = this.mainEntrance.value;
    this.property.maintenance = this.maintenance.value;
    this.property.possession = this.possession.value;
    this.property.description = this.description.value;
    this.property.postedOn = new Date().toString();
  }

  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
    return false;
    }
    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
    return false;
    }
    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
    return false;
    }
    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
    return false;
    }
    return true;
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if(IsCurrentTabValid){
    this.formTabs.tabs[NextTabId].active = true;
    }
  }



}
