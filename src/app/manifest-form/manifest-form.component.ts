import { Component } from '@angular/core';

interface WasteSource {
  value: string;
  viewValue: string;
}

interface WasteType {
  value: string;
  viewValue: string;
}

interface LocationforDisposal {
  value: string;
  viewValue: string;
}

interface DisposalMethod {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-manifest-form',
  templateUrl: './manifest-form.component.html',
  styleUrls: ['./manifest-form.component.scss']
})

export class ManifestFormComponent {
    items = [
      {
        color: "blue",
        content: "Filled in by a representative of the waste generator"
      },
      {
        color: "red",
        content: "Filled in by a representative of the waste generator if waste to be transferred to 3rd party"
      },
      {
        color: "yellow",
        content: "Filled in by a driver - waste transporter"
      },
      {
        color: "purple",
        content: "Filled in by a representative of the waste store facility"
      }
    ]

    user = {
      lastName: 'Amandos',
      firstName: 'Daulet',
      badge: '123',
      phone: '+77079904871',
      email: 'daulet.amandos@tengizchevroil.com'
    }

    facility = 'Contractors'

    wasteSource: WasteSource[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]

    wasteType: WasteType[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]

    locationForDisposal: LocationforDisposal[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]

    disposalMethod: DisposalMethod[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]
}
