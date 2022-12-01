<template>
  <div class="gMap" id="polygon-label-map"></div>
</template>

<script>
import loadGoogleMapsApi from "load-google-maps-api";
//import searchResults  from "./../constants/searchResults.js";
import apiKey from "./../constants/apiKey.js";

export default {
  name: "Map",
  props: ['searchField', 'pawnstores'],
  data() {
    return {
      map: null,
    };
  },
  watch: {
    //runs only when zipcode changes
    searchField() {
      // console.log(this.zipcode);
      // console.log(this.pawnstores);
      this.renderMap();
    }
  },
  mounted() {
    // console.log(this.zipcode,"hey");
    this.renderMap();

  },
  //AIzaSyA0SvQGtswuty_tbCv6SeEtCXEK9jH_Pyw
  methods: {
    renderMap() {
      loadGoogleMapsApi({
        key: apiKey.key,
        libraries: ["places", "drawing", "geometry"],
      }).then(async () => {
        const mapZoom = 9;
        const { google } = window;

        //   let address = ''+this.zipcode;
        //  // console.log(address,"here");
        //   let geocoder= new google.maps.Geocoder();
        //   await geocoder.geocode( { 'address': address}, function(results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //      centerlatitude = results[0].geometry.location.lat();
        //      centerlongitude = results[0].geometry.location.lng();
        //     } else {
        //     alert("Geocode was not successful for the following reason: " + status);
        //     }
        //   });

        let bounds = new google.maps.LatLngBounds();
        let arr = [];
        for (let i = 0; i < this.pawnstores.length; i++) {
          arr.push(new google.maps.LatLng(parseFloat(this.pawnstores[i].latitude), parseFloat(this.pawnstores[i].longitude)));
        }
        for (let i = 0; i < arr.length; i++) {
          bounds.extend(arr[i]);
        }

        // The Center of the Bermuda Triangle - (25.3939245, -72.473816)
        console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
        let centerlatitude = bounds.getCenter().lat()
        let centerlongitude = bounds.getCenter().lng();

        const mapOptions = {
          zoom: mapZoom,
          mapTypeId: "terrain",
          center: new google.maps.LatLng({ lat: centerlatitude, lng: centerlongitude }),
          mapTypeControl: false,
          streetViewControl: false,
          mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT,
          },
        };
        this.map = new google.maps.Map(
          document.getElementById("polygon-label-map"),
          mapOptions
        );
        //console.log("there");
        // console.log(this.pawnstores);
        const polygonCoordsSet = [];
        let recordsLength = this.pawnstores.length;
        const polyVerticesCount = 5;
        const a = Math.ceil((recordsLength / polyVerticesCount));
        //console.log(a,"aa");
        for (let i = 0; i < a; i++) {
          //console.log(i,"hey")
          let poly = [];
          for (let j = 0; j < Math.min(polyVerticesCount, parseInt(recordsLength)); j++) {
            const obj = this.pawnstores[(i * polyVerticesCount) + j];
            poly.push({ lat: parseFloat(obj.latitude), lng: parseFloat(obj.longitude) });
          }
          recordsLength = (recordsLength - polyVerticesCount);
          polygonCoordsSet.push(poly);
        }
        if (polygonCoordsSet[polygonCoordsSet.length - 1].length <= 2) {
          let arr = polygonCoordsSet[polygonCoordsSet.length - 1];
          polygonCoordsSet.pop();
          for (let i = 0; i < arr.length; i++) {
            polygonCoordsSet[polygonCoordsSet.length - 1].push(arr[i]);
          }
        }
        // for(let i=0;i<polygonCoordsSet.length;i++){
        //   polygonCoordsSet[i].push(polygonCoordsSet[i][0]);
        // }
        console.log(polygonCoordsSet);
        const fillColors = ["#038489"];
        const strokeColors = ["#038489"];
        const PolygonShapes = [];
        for (let i = 0; i < polygonCoordsSet.length; i++) {
          const polygonShapeContructor = new google.maps.Polygon({
            paths: polygonCoordsSet[i],
            strokeColor: strokeColors[0],
            map: this.map,
            strokeWeight: 2,
            fillColor: fillColors[0],
            fillOpacity: 0.2,
            zIndex: 99999,
          });
          google.maps.event.addListener(
            polygonShapeContructor,
            "mouseover",
            () => {
              polygonShapeContructor.setOptions({
                fillOpacity: 0.8,
              });
            }
          );
          google.maps.event.addListener(
            polygonShapeContructor,
            "mouseout",
            () => {
              polygonShapeContructor.setOptions({
                fillOpacity: 0.2,
              });
            }
          );
          google.maps.event.addListener(
            polygonShapeContructor,
            "click",
            () => {
              //alert("hi");
              const endPoints = [];
              // let endpointsString = "";
              console.log(polygonShapeContructor.getPath());
              for (let i = 0; i < polygonShapeContructor.getPath().Vc.length; i++) {
                let latitude = polygonShapeContructor.getPath().Vc[i].lat();
                let longitude = polygonShapeContructor.getPath().Vc[i].lng();
                endPoints.push({ lat: latitude, lng: longitude });
                // endpointsString += ("[latitude : " + latitude + "," + "longitude : " + longitude + "]");

              }
              console.log(endPoints);
              // alert(endpointsString);
            }
          );
          PolygonShapes.push(polygonShapeContructor);
        }
        PolygonShapes.forEach((polygon) => {
          polygon.setMap(this.map);
        });
        this.map.setZoom(14);
      });
    }
  }
};
</script>

<style scoped>
.gMap {
  height: 100%;
}
</style>