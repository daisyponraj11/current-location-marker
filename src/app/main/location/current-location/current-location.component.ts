import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent {
  googleMapsApiKey = environment.googleMapsApiKey;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';

  constructor() {
    this.center = {
      lat: 0, // Default latitude
      lng: 0, // Default longitude
    };
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
