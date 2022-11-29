<template>
    <div class="gMap" id="polygon-label-map"></div>
</template>

<script>
import loadGoogleMapsApi from "load-google-maps-api";
//import searchResults  from "./../constants/searchResults.js";
import apiKey from "./../constants/apiKey.js";

export default {
  name: "Map",
  data() {
    return {
        map:null
    };
  },
  mounted() {
    loadGoogleMapsApi({
      key: apiKey.key,
      libraries: ["places", "drawing", "geometry"],
    }).then(() => {
      const mapZoom = 9;
      const { google } = window;
      const mapOptions = {
        zoom: mapZoom,
        mapTypeId: "terrain",
        center: new google.maps.LatLng({ lat: 29.7000000, lng: -95.600000 }),
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
      const examplepolygonCoordsSet=[
        [{
        lat: 29.7352402,
        lng: -95.6299661
        },
        {
        lat: 29.7286009,
        lng: -95.3765761
        },
        {
        lat: 29.740189,
        lng: -95.317969
        },
        {
        lat: 29.8045131,
        lng: -95.3815157
        }]
      ];
      // const polygonCoordsSet = [];
      // for(let i=0;i<5;i++){
      //   let poly=[];
      //   for(let j=0;j<10;j++){
      //       const obj=searchResults.data[(i*10)+j];
      //       poly.push({lat:obj.latitude,lng:obj.longitude});
      //   }
      //   polygonCoordsSet.push(poly);
      // }
      // console.log(polygonCoordsSet);
      const fillColors = ["#038489"];
      const strokeColors=["#038489"];
      const PolygonShapes = [];
      for (let i = 0; i < examplepolygonCoordsSet.length; i++) {
        const polygonShapeContructor = new google.maps.Polygon({
          paths: examplepolygonCoordsSet[i],
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
            const endPoints=[];
            let endpointsString="";
            for(let i=0;i<polygonShapeContructor.getPath().Wc.length;i++){
              let latitude=polygonShapeContructor.getPath().Wc[i].lat();
              let longitude=polygonShapeContructor.getPath().Wc[i].lng();
              endPoints.push({lat:latitude,lng:longitude});
              endpointsString+=("[latitude : "+latitude+","+"longitude : "+longitude+"]");

            }
            console.log(endPoints);
            alert(endpointsString);
          }
        );
        PolygonShapes.push(polygonShapeContructor);
        }
        PolygonShapes.forEach((polygon) => {
        polygon.setMap(this.map);
      });
        this.map.setZoom(10);
      });
  },
};
</script>

<style scoped>
.gMap {
 height:100%;
}
</style>