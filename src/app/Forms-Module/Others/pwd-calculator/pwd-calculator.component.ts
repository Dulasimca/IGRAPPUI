import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pwd-calculator',
  templateUrl: './pwd-calculator.component.html',
  styleUrls: ['./pwd-calculator.component.scss']
})
export class PWDCalculatorComponent implements OnInit {
  buildingTypeOptions: SelectItem[] = [];
  buildingType: any;
  regionOptions: SelectItem[] = [];
  region: any;
  calculationPeriodOptions: SelectItem[] = [];
  calculationPeriod: any;
  insertionUnitOptions: SelectItem[] = [];
  insertionUnit: any;
  buildingAge: any;
  pwdCols: any;
  pwdData: any[] = [];
  floorNoOptions: SelectItem[] = [];
  floorNo: string = '';
  areaSqFt: any = '';
  materialOptions: SelectItem[] = [];
  material: string = '';
  woodOptions: SelectItem[] = [];
  wood: string = '';
  roofOptions: SelectItem[] = [];
  roof: string = '';
  isFloorSelected: boolean = false;
  isFloorRenewed: string = '0';
  floorAge: any;
  amenities: any[] = [];
  extraAmenities: any[] = [];
  isCompoundSelected: boolean = false;
  compoundWallTypeOptions: SelectItem[] = [];
  compoundWallType: any;
  lengthOfWall: any;
  isCompoundRenewed: string = '0';
  ageOfCompoundWall: any;
  share1: any;
  share2: any;
  isGarageSelected: boolean = false;
  garageAreaSqFt: any;
  garageAge: any;
  garageItems: any[] = [];
  selectedGarage: string = '';
  constructor() { }

  ngOnInit(): void {
    this.amenities = [
      { label: 'Electrical Installations', value: false, name: '_floor' },
      { label: 'Internal Water Supply', value: false, name: '_watersupply' },
      { label: ' Sanitary Installation', value: false, name: '_sanitary' },
    ];

    this.extraAmenities = [
      { label: 'Air Condition', value: false, name: '_ac' },
      { label: 'Electrical Motor Type', value: false, name: '_motor' },
      { label: 'Gate Type', value: false, name: '_gate' },
      { label: 'Inspection Chamber', value: false, name: '_chamber' },
      { label: 'Latrine', value: false, name: '_latrine' },
      { label: 'Open Well', value: false, name: '_well' },
      { label: 'Other Sanitary Item', value: false, name: '_othersanitary' },
      { label: 'Pipeline', value: false, name: '_pipeline' },
      { label: 'Over Head Tank', value: false, name: '_headtank' },
      { label: 'Lift Type', value: false, name: '_lift' },
      { label: 'Miscellaneous Item', value: false, name: '_miscellaneous' },
    ];

    this.garageItems = [
      { label: 'Garage(Built with brick work in lime or cement mortar and roof with Mangalore tiles or pan tile roof over flat tiles)',
       value: 0, name: '_garage1' },
      { label: 'Garage(Built with brick work in partially clay and partially lime or cement mortar and roof with RCC slab)', 
      value: 1, name: '_garage2' },
      { label: 'Garage(Built with brick work in partially clay and partially lime or cement mortar and roof with Mangalore tiles or pan tile roof over flat tiles)', 
      value: 2, name: '_garage3' },
      { label: 'Garage(Built with brick work in lime or cement mortar and roof with rcc slab )', 
      value: 3, name: '_garage4' },

    ];
  }

  onCheck() {
  }

  onSelectGarage(value: string) {
    this.selectedGarage = value
  }

}
