import { Component, OnInit } from '@angular/core';

export interface Hotel {
  name: string;
  address: string;
  contact: string;
  link: string;
  display_link: string;
  distance: string;
}

export interface CabService {
  cab_service_name: string;
  cab_service_contact: string;
}

const HOTEL_DATA: Hotel[] = [
  {name: 'Vivanta by Taj', address: 'Nikita Complex, G S Road, Khanapara, Khanapara, Guwahati, Assam 781022', contact: '+91 361 710 6710',
    link: 'https://www.vivantahotels.com/', display_link: 'www.vivantahotels.com', distance: '29 km'},
  {name: 'The Lily Hotel', address: 'G.S. Road, Six Mile, Khanapara, Assam 781022, India', contact: '+91 361 222 9791',
    link: 'https://www.thelilyhotel.com/', display_link: 'www.thelilyhotel.com', distance: '29 km'},
  {name: 'Hotel Gateway Grandeur', address: 'G.S.Road, Christian Basti, Guwahati, Assam 781005, India', contact: '+91 361 711 0022',
    link: 'http://www.gatewaygrandeur.com/', display_link: 'www.gatewaygrandeur.com', distance: '22 km'},
  {name: 'Pragati Manor', address: 'GS Rd, Christian Basti, Guwahati, Assam 781005, India', contact: '+91 361 234 1265',
    link: 'https://www.hotelpragatimanor.com/', display_link: 'www.hotelpragatimanor.com', distance: '22 km'},
  {name: 'Hotel Dynasty', address: 'SS Road, Lakhtokia, Guwahati, Assam 781001, India', contact: '+91 361 251 6021',
    link: 'https://www.dynastyhotel.in/', display_link: 'www.dynastyhotel.in', distance: '18 km'},
  {name: 'Hotel Millennium', address: 'Dhanuka Complex - B, Sati Joymati Road, Athgaon, Guwahati, Assam 781001, India',
    contact: '+91 361 273 9057', link: 'https://www.hotelmillennium.in/', display_link: 'www.hotelmillennium.in', distance: '18 km'},
  {name: 'Hotel Rajmahal', address: 'A.T Road, Paltan Bazar, Guwahati, Assam 781001, India', contact: '+91 361 254 9141',
    link: 'https://www.hotelrajmahal.in/', display_link: 'www.hotelrajmahal.in', distance: '18 km'},
];

const CAB_DATA: CabService[] = [
  {cab_service_name: 'Prime Cabz', cab_service_contact: '+91 361 222 2233'},
  {cab_service_name: 'Green Cabs', cab_service_contact: '+91 361 715 1515'},
  {cab_service_name: 'My Taxi', cab_service_contact: '+91 361 222 8888, +91 80110 14013'},
  {cab_service_name: 'Geo Cabs Northeast', cab_service_contact: '+91 361 222 2727, +91 99575 74026'},
  {cab_service_name: 'Kamakshi Tours', cab_service_contact: '+91 361 245 7866, +91 98640 47996'},
  {cab_service_name: 'Cherry Cabs', cab_service_contact: '+91 88762 22288, +91 98641 24697'},
];

@Component({
  selector: 'app-hotels-and-cabs',
  templateUrl: './hotels-and-cabs.component.html',
  styleUrls: ['./hotels-and-cabs.component.css']
})
export class HotelsAndCabsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'contact', 'display_link', 'distance'];
  dataSource = HOTEL_DATA;

  cabDisplayedColumns: string[] = ['cab_service_name', 'cab_service_contact'];
  cabDataSource = CAB_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
