import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

	properties: Array<any> = [
		{
			"Id": 1,
			"Name": "Birla House",
			"Type": "House",
			"Price": "$12000"
    },
		{
			"Id": 2,
			"Name": "Erose Villa",
			"Type": "House",
			"Price": "$19000"
    },
		{
			"Id": 3,
			"Name": "Macro Home",
			"Type": "House",
			"Price": "$14300"
    },
		{
			"Id": 4,
			"Name": "Timberlake Home",
			"Type": "House",
			"Price": "$23000"
    },
		{
			"Id": 5,
			"Name": "Village Condo",
			"Type": "Condominium",
			"Price": "$9000"
    },
		{
			"Id": 6,
			"Name": "Pearl White House",
			"Type": "House",
			"Price": "$35000"
    }
]


}
