import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle: any;

  imageSrc: string='';

  constructor(private router: Router) {}

  ngOnInit() {
    this.imageSrc = `${environment.apiUrl}/files/display/${this.vehicle.image[0]}`;
  }

  // navigateToVehicle() {
  //   this.router.navigateByUrl(`/vehicles/${this.vehicle.id}`);
  // }
}
