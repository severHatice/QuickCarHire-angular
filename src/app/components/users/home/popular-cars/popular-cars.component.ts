import { Component,OnInit } from '@angular/core';
import { VehicleService} from 'src/app/service/vehicle-service';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.css']
})
export class PopularCarsComponent implements OnInit {

  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: data => {
        this.vehicles = data.slice(0, 8);
      },
      error: error => {
        console.error("Vehicles could not be fetched", error);
      }
    });
  }

}
