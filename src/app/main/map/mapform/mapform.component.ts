import { MapService } from './../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapform',
  templateUrl: './mapform.component.html',
  styleUrls: ['./mapform.component.scss']
})
export class MapformComponent implements OnInit {

  lat: number = 13.6186285;
  lng: number = 100.5078163;
  zoom: number = 10;

  markersData: Array<any> = [];
  docdate: string = "";
  joborderData: any = {};
  contactLists: Array<any> = []

  previous_info_window = null;
  infoWindowOpened = null;

  sideNaveOpened: Boolean = false;


  constructor(
    private mapService: MapService,
  ) { }

  ngOnInit() {
    this.getMarkerData(this.docdate);
  }

  //get data of marker on the map data is customer
  async getMarkerData(docdate) {
    this.markersData = await this.mapService.getMarkerDataList(docdate);
    console.log(this.markersData);
  }

  //click new marker on map will show balloon info and will close previous marker
  clickedInfoWindow(infoWindow) {
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
  }

  //click on map will close balloon info
  closeInfo() {
    if (this.previous_info_window != null) {
      console.log("close info");
      this.previous_info_window.close();
    }
  }

  //click select in html will push data from click marker data to ตัวแปร contactLists
  clickedMarker(item: any, index: number) {
    // this.sideNaveOpened = true;
    if (item.contactStatus === "") {
      let mIndex = this.contactLists.findIndex((el) => {
        return el._id === item._id;
      });
      let defualtStatus = "select";

      if (!item.lineUserId) {
        defualtStatus = "waitcontact";
      }

      if (mIndex === -1) {
        let itemList = {
          _id: item._id,
          contactStatus: defualtStatus,
          title: item.title,
          firstName: item.firstName,
          lastName: item.lastName,
          displayName: item.displayName,
          persanalId: item.persanalId,
          isShareHolder: item.isShareHolder,
          mobileNo1: item.mobileNo1,
          mobileNo2: item.mobileNo2,
          mobileNo3: item.mobileNo3,
          addressLine1: item.addressLine1,
          addressStreet: item.addressStreet,
          addressSubDistrict: item.addressSubDistrict,
          addressDistrict: item.addressDistrict,
          addressProvince: item.addressProvince,
          addressPostCode: item.addressPostCode,
          lineUserId: item.lineUserId,
          latitude: item.latitude,
          longitude: item.longitude,
        };

        this.contactLists.push(itemList);
      }

      this.closeInfo();

      if (this.contactLists.length > 0) {
        this.sideNaveOpened = true;
      }
    }
  }

  //delete contactlists data array in sidenavbar
  onDeleteList(index) {
    this.contactLists.splice(index, 1);
    if (this.contactLists.length === 0) {
      this.sideNaveOpened = false;
    }

  }

}
