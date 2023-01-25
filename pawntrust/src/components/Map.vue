<template>
  <div class="gMap" id="polygon-label-map"></div>
</template>

<script>
import loadGoogleMapsApi from "load-google-maps-api";
//import searchResults  from "./../constants/searchResults.js";
import apiKey from "./../constants/apiKey.js";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import polylabel from 'polylabel';
//import simplify from 'simplify-js';

export default {
  name: "Map",
  props: ['searchField', 'pawnstores', 'filterPawnstores', 'unfilterPawnstores', 'getStoreToPolygonMap'],
  data() {
    return {
      map: null,
    };
  },
  watch: {
    pawnstores: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler() {
        this.renderMap();
      }
    }
    //runs only when zipcode changes
    // mapsearchField() {
    //   // console.log(this.zipcode);
    //   // console.log(this.pawnstores);
    //   this.renderMap();
    // }
  },
  mounted() {
    // console.log(this.zipcode,"hey");
    this.renderMap();

  },
  methods: {
    renderMap() {
      loadGoogleMapsApi({
        key: apiKey.key,
        libraries: ["places", "drawing", "geometry"],
      }).then(async () => {
        const mapZoom = 14;
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


        // let centerlatitude = bounds.getCenter().lat()
        // let centerlongitude = bounds.getCenter().lng();
        //  let lat_arr = [];
        let min_lat = 10000000;
        let max_lat = -10000000;
        // let lng_arr = [];
        let min_lng = 10000000;
        let max_lng = -10000000;
        for (let i = 0; i < this.pawnstores.length; i++) {
          let latitude = this.pawnstores[i].latitude;
          let longitude = this.pawnstores[i].longitude;
          // lat_arr.push(parseFloat(latitude));
          //lng_arr.push(parseFloat(longitude));
          min_lat = Math.min(latitude, min_lat);
          max_lat = Math.max(latitude, max_lat);
          min_lng = Math.min(longitude, min_lng);
          max_lng = Math.max(longitude, max_lng);
          //console.log(min_lat, this.pawnstores[i].name, i, latitude, longitude);
        }
        //lat_arr.sort(); lng_arr.sort();
        // let centerlatitude = lat_arr[parseInt(Math.ceil(lat_arr.length / 2))];
        // let centerlongitude = lng_arr[parseInt(Math.ceil(lng_arr.length / 2))];
        //console.log(centerlatitude, centerlongitude, "hey");
        //centered according to created polygons at the end of file
        const mapOptions = {
          zoom: mapZoom,
          center: new google.maps.LatLng({ lat: 29, lng: -95 }),
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
        //collision avoidance:

        //getting standard deviation(neglect)
        let lat_low = Math.floor(min_lat) - 1;
        let lat_high = Math.ceil(max_lat) + 1;
        let lng_low = Math.floor(min_lng) - 1;
        let lng_high = Math.ceil(max_lng) + 1;
        //console.log("here");
        //console.log(lat_low, lat_high);
        //console.log(lng_low, lng_high);
        const factor = 0.25;
        let no_lats = parseInt(Math.abs(lat_low - lat_high)) * (parseInt((1 / factor)));
        let no_lngs = parseInt(Math.abs(lng_low - lng_high)) * (parseInt((1 / factor)));
        let no_rects = no_lats * no_lngs;
        //console.log(no_rects);
        let polygon_sets = {

        }
        let poly_shops = {

        };
        for (let i = 1; i <= no_rects; i++) {
          polygon_sets[i] = [];
          poly_shops[i] = [];
        }



        for (let i = 0; i < this.pawnstores.length; i++) {
          let latitude = parseFloat(this.pawnstores[i].latitude);
          let longitude = parseFloat(this.pawnstores[i].longitude);
          //console.log(latitude, longitude);
          let k = 1;
          let up = -1;
          for (let j = lat_low; j < lat_high; j += factor) {
            if (latitude >= j && latitude < (j + factor)) {
              break;
            }
            k++;
          }
          up = k;
          //console.log(up);
          k = 1;
          let right = -1;
          for (let j = lng_low; j < lng_high; j += factor) {
            if (longitude >= j && longitude < (j + factor)) {
              break;
            }
            k++;
          }
          right = k;
          //console.log(right);
          let index = (right * no_lats) + up;
          //console.log(index);
          polygon_sets[index].push({
            lat: latitude,
            lng: longitude,
          });
          poly_shops[index].push(this.pawnstores[i]);
          //console.log(poly_shops[index])


        }
        //console.log(polygon_sets);
        let polygonCoordsSet = [];
        let index_poly_shops = {};
        for (let j = 1; j <= no_rects; j++) {
          if (polygon_sets[j].length == 0) {
            continue;
          }

          // let u = parseInt((j % no_lats));
          // let r = parseInt((j - u) / no_lats);
          // console.log(u, r);
          // let min_la = lat_low + ((u - 1) * 0.25);
          // let max_la = min_la + 0.25;
          // let min_ln = lng_low + ((u - 1) * 0.25);
          // let max_ln = min_ln + 0.25;
          // polygon_sets[j].push({
          //   lat: (min_la + max_la) / 2,
          //   lng: (min_ln + max_ln) / 2,
          // });
          // polygon_sets[j].push({
          //   lat: min_la + 0.1,
          //   lng: max_ln - 0.1,
          // });
          // polygon_sets[j].push({
          //   lat: max_la - 0.15,
          //   lng: max_ln - 0.12,
          // });
          // if (polygon_sets[j].length <= 3) { 
          // added some extra points in rectangular confined regions to make polygon shapes better
          let lati = polygon_sets[j][0].lat;
          let lngi = polygon_sets[j][0].lng;
          let min_la = lat_low + (parseInt((lati - lat_low) / factor)) * factor;
          let min_ln = lng_low + (parseInt((lngi - lng_low) / factor)) * factor;
          //console.log(polygon_sets[j]);
          //console.log(min_la, min_ln);

          polygon_sets[j].push({
            lat: 0.15 + min_la,
            lng: 0.12 + min_ln,
          });
          polygon_sets[j].push({
            lat: 0.2 + min_la,
            lng: 0.157 + min_ln,
          });
          polygon_sets[j].push({
            lat: 0.13 + min_la,
            lng: 0.20 + min_ln,
          });
          polygon_sets[j].push({
            lat: 0.05 + min_la,
            lng: 0.10 + min_ln,
          });
          // for good shapes :
          // polygon_sets[j].push({
          //   lat: 0.05 + min_la,
          //   lng: 0.24 + min_ln,
          // });
          // polygon_sets[j].push({
          //   lat: 0.125 + min_la,
          //   lng: 0.125 + min_ln,
          // });


          // }

          polygonCoordsSet.push(polygon_sets[j]);
          index_poly_shops[polygonCoordsSet.length - 1] = j;





        }










        /*let polygonCoordsSet = [];
        let recordsLength = this.pawnstores.length;
        const polyVerticesCount = 10;
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
        if (polygonCoordsSet[polygonCoordsSet.length - 1].length < 10) {
          let arr = polygonCoordsSet[polygonCoordsSet.length - 1];
          polygonCoordsSet.pop();
          if (polygonCoordsSet.length !== 0) {
            for (let i = 0; i < arr.length; i++) {
              polygonCoordsSet[polygonCoordsSet.length - 1].push(arr[i]);
            }
          }
          else {
            let mini_pol = [];
            for (let i = 0; i < arr.length; i++) {
              mini_pol.push(arr[i]);
            }
            polygonCoordsSet.push(mini_pol)
          }
        }*/
        // for(let i=0;i<polygonCoordsSet.length;i++){
        //   polygonCoordsSet[i].push(polygonCoordsSet[i][0]);
        // }
        //console.log(polygonCoordsSet);
        /*  let circleCoordsSet = [];
  
          for (let i = 0; i < polygonCoordsSet.length; i++) {
            lat_arr = [];
            lng_arr = [];
            for (let j = 0; j < polygonCoordsSet[i].length; j++) {
              lat_arr.push(parseFloat(polygonCoordsSet[i][j].lat));
              lng_arr.push(parseFloat(polygonCoordsSet[i][j].lng));
            }
  
            lat_arr.sort(); lng_arr.sort();
            // console.log(lat_arr);
            // console.log(lng_arr);
            // console.log((lat_arr.length / 2));
            // console.log(lat_arr[(lat_arr.length / 2)]);
            let center_lat = lat_arr[parseInt(Math.ceil(lat_arr.length / 2))];
            let center_lng = lng_arr[parseInt(Math.ceil(lng_arr.length / 2))];
            //console.log(center_lat, center_lng, i);
            let max_radius = 0;
            for (let j = 0; j < polygonCoordsSet[i].length; j++) {
              var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(center_lat, center_lng), new google.maps.LatLng(polygonCoordsSet[i][j].lat, polygonCoordsSet[i][j].lng));
              max_radius = Math.max(max_radius, parseInt(Math.ceil(distance)));
            }
            circleCoordsSet.push({
              center: { lat: center_lat, lng: center_lng },
              radius: max_radius
            })
          }
          //console.log(circleCoordsSet);*/

        //polygons ordering

        let polyset = [];
        for (let i = 0; i < polygonCoordsSet.length; i++) {
          let arr = polygonCoordsSet[i];
          //console.log(arr);
          arr.sort((a, b) => {
            if (a.lng !== b.lng) {
              return (a.lng - b.lng);
            }
            else {
              return (b.lat - a.lat);
            }
          });
          //console.log(arr);
          let min_lng = arr[0].lng;
          let max_lng = arr[arr.length - 1].lng;
          let min_lng_min_lat = 100000000;
          let max_lng_min_lat = 100000000;
          for (let j = 0; j < arr.length; j++) {
            if (arr[j].lng === min_lng) {
              min_lng_min_lat = Math.min(min_lng_min_lat, arr[j].lat);
            }
            if (arr[j].lng === max_lng) {
              max_lng_min_lat = Math.min(max_lng_min_lat, arr[j].lat);
            }
          }
          //console.log(min_lng_min_lat, max_lng_min_lat);
          let base_line = Math.min(min_lng_min_lat, max_lng_min_lat);
          min_lng = min_lng - 0.0000001;
          //console.log(base_line);
          let arr_n = [];
          arr_n.push({
            lat: min_lng_min_lat,
            lng: min_lng,

          });
          let fin_arr = arr_n.concat(arr);
          //console.log(fin_arr);
          let visited = [];
          for (let j = 0; j < fin_arr.length; j++) {
            visited.push(false);
          }
          let ans_arr = [];
          let j = 0;
          let opt_arr = [];
          let prev = {
            lat: -100000,
            lng: -100000,
          };

          while (j < fin_arr.length) {

            if (fin_arr[j].lat >= base_line) {
              ans_arr.push(fin_arr[j]);
              //console.log(j, fin_arr[j]);
              visited[j] = true;
              if (fin_arr[j].lng !== prev.lng) {
                if (fin_arr[j].lat > prev.lat) {
                  prev = {
                    lat: fin_arr[j].lat,
                    lng: fin_arr[j].lng,
                  }
                  opt_arr.push(fin_arr[j]);
                }
                if (fin_arr[j].lng === max_lng) {
                  if (prev.lat !== fin_arr[j].lat || (prev.lat === fin_arr[j].lat && opt_arr[opt_arr.length - 1].lng !== max_lng && prev.lat !== base_line)) {
                    prev = {
                      lat: prev.lat,
                      lng: fin_arr[j].lng,
                    }
                    opt_arr.push(prev);
                  }
                }

              }

            }


            j++;
          }
          if (base_line === min_lng_min_lat) {
            ans_arr.push({
              lat: min_lng_min_lat - 0.0000001,
              lng: max_lng
            });
          }

          opt_arr.push({
            lat: base_line,
            lng: max_lng
          });

          // opt_arr.push({
          //   lat: base_line - 0.0000001,
          //   lng: max_lng
          // });
          j = fin_arr.length - 1;
          prev = {
            lat: base_line,
            lng: max_lng
          }

          while (j >= 0) {

            if (visited[j] !== true) {
              ans_arr.push(fin_arr[j]);
              //console.log(j, fin_arr[j]);
              visited[j] = true;
              if (fin_arr[j] !== prev.lng) {
                if (fin_arr[j].lat < prev.lat) {
                  prev = {
                    lat: fin_arr[j].lat,
                    lng: fin_arr[j].lng,
                  }
                  opt_arr.push(prev);
                }

              }

            }


            j--;
          }
          if (base_line === max_lng_min_lat) {
            ans_arr.push({
              lat: max_lng_min_lat - 0.0000001,
              lng: min_lng,
            });
          }

          // if (base_line === max_lng_min_lat) {
          //   opt_arr.push({
          //     lat: prev.lat,
          //     lng: min_lng,
          //   });
          // }

          opt_arr.push({
            lat: base_line,
            lng: min_lng,
          })
          //console.log(ans_arr);
          //  ans_arr.splice(0, 1);
          // console.log(ans_arr);
          //polyset.push(ans_arr);
          //console.log(opt_arr);
          polyset.push(opt_arr);
        }

        // Douglas Pecker algorithm using simplify-js 
        // let tot_arr = [];
        // for (let k = 0; k < polyset.length; k++) {
        //   let polygon_arr = polyset[k];
        //   let arr = [];
        //   for (let p = 0; p < polygon_arr.length; p++) {
        //     let obj = { x: null, y: null };
        //     obj.x = polygon_arr[p].lng;
        //     obj.y = polygon_arr[p].lat;
        //     arr.push(obj);
        //   }
        //   console.log(arr);
        //   let res_arr = simplify(arr, 5, true);
        //   console.log(res_arr);
        //   let r_arr = [];
        //   for (let p = 0; p < res_arr.length; p++) {
        //     r_arr.push({ lat: res_arr[p].y, lng: res_arr[p].x });
        //   }
        //   tot_arr.push(r_arr);
        // }
        // polygonCoordsSet = tot_arr;


        polygonCoordsSet = polyset;

        //console.log(polygonCoordsSet);

        /* let center_lat_arr = [];
         let center_lng_arr = [];
         for (let q = 0; q < polygonCoordsSet.length; q++) {
           for (let r = 0; r < polygonCoordsSet[q].length; r++) {
             center_lat_arr.push(polygonCoordsSet[q][r].lat);
             center_lng_arr.push(polygonCoordsSet[q][r].lng);
           }
         }
         let center_lat = center_lat_arr[parseInt(Math.ceil(center_lat_arr.length / 2))];
         let center_lng = center_lng_arr[parseInt(Math.ceil(center_lng_arr.length / 2))];
 
         const mapOptions = {
           zoom: mapZoom,
           mapTypeId: "terrain",
           center: new google.maps.LatLng({ lat: center_lat, lng: center_lng }),
           mapTypeControl: false,
           streetViewControl: false,
           mapTypeControlOptions: {
             position: google.maps.ControlPosition.BOTTOM_LEFT,
           },
         };
         this.map = new google.maps.Map(
           document.getElementById("polygon-label-map"),
           mapOptions
         );*/






        //the only issue now has is single record result handling and collision avoidance


        const fillColors = ["#038489"];
        const strokeColors = ["#038489"];
        const PolygonShapes = [];
        let polygon_centers = {

        };
        let dict = {

        };
        for (let i = 0; i < polygonCoordsSet.length; i++) {
          dict[i] = null;


          //let poly_lat_arr = []; let poly_lng_arr = [];
          // let lat_sum = 0;
          // let lng_sum = 0;
          //var bound = new google.maps.LatLngBounds();
          // const polygon = [[[3116, 3071], [3118, 3068], [3108, 3102], [3751, 927]]];
          // polylabel(polygon);
          // polylabel(polygon, 1.0);
          let polygon = [[]]
          for (let j = 0; j < polygonCoordsSet[i].length; j++) {
            // lat_sum = lat_sum + polygonCoordsSet[i][j].lat;
            // lng_sum = lng_sum + polygonCoordsSet[i][j].lng;
            //bound.extend(new google.maps.LatLng(polygonCoordsSet[i][j].lat, polygonCoordsSet[i][j].lng));
            polygon[0].push([polygonCoordsSet[i][j].lng, polygonCoordsSet[i][j].lat]);



            //poly_lat_arr.push(polygonCoordsSet[i][j].lat);
            //poly_lng_arr.push(polygonCoordsSet[i][j].lng);

          }
          // console.log(bound.getCenter().lat(), bound.getCenter().lng());
          //console.log("centerrrrrrrrrrrrrrr");
          let center_arr = polylabel(polygon, 10.0);
          //console.log(center_arr);
          //poly_lat_arr.sort(); poly_lng_arr.sort();
          // lat_sum = lat_sum / polygonCoordsSet[i].length;
          // lng_sum = lng_sum / polygonCoordsSet[i].length;
          // polygon_centers[i] = {
          //   lat: poly_lat_arr[parseInt(Math.ceil(poly_lat_arr.length / 2))],
          //   lng: poly_lng_arr[parseInt(Math.ceil(poly_lng_arr.length / 2))],
          // };
          // polygon_centers[i] = {
          //   lat: lat_sum,
          //   lng: lng_sum
          // };
          // polygon_centers[i] = {
          //   lat: bound.getCenter().lat(),
          //   lng: bound.getCenter().lng(),
          // };
          polygon_centers[i] = {
            lat: center_arr[1],
            lng: center_arr[0],
          };
          //console.log(i, polygon_centers[i]);
          //bounded rectangles midpoints


        }
        let storeToPolygonMap = {

        };
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

          let arr = poly_shops[index_poly_shops[i]];
          for (let j = 0; j < arr.length; j++) {
            storeToPolygonMap[arr[j]["uuid"]] = polygonShapeContructor;
            //console.log(arr[j].name, index_poly_shops[i]);
          }
          //console.log("OOOOOO");

          google.maps.event.addListener(
            polygonShapeContructor,
            "mouseover",
            () => {
              polygonShapeContructor.setOptions({
                fillOpacity: 0.6,
              });




            }
          );
          google.maps.event.addListener(
            polygonShapeContructor,
            "mouseout",
            () => {
              if (dict[i] === null) {
                polygonShapeContructor.setOptions({
                  fillOpacity: 0.2,
                });
              }
            }
          );
          google.maps.event.addListener(
            polygonShapeContructor,
            "click",
            () => {
              //alert("hi");
              // const endPoints = [];
              // let endpointsString = "";
              // console.log(polygonShapeContructor.getPath());
              // for (let i = 0; i < polygonShapeContructor.getPath().Vc.length; i++) {
              //   let latitude = polygonShapeContructor.getPath().Vc[i].lat();
              //   let longitude = polygonShapeContructor.getPath().Vc[i].lng();
              //   endPoints.push({ lat: latitude, lng: longitude });
              //   endpointsString += ("[latitude : " + latitude + "," + "longitude : " + longitude + "]");

              // }
              // console.log(endPoints);
              // alert(endpointsString);

              if (dict[i] !== null) {
                dict[i].setMap(null);
                dict[i] = null;
                polygonShapeContructor.setOptions({
                  fillOpacity: 0.2,
                });
                this.unfilterPawnstores(index_poly_shops[i], polygonShapeContructor, this.map, poly_shops[index_poly_shops[i]]);

              }
              else {

                let center_pos = {
                  lat: polygon_centers[i].lat,
                  lng: polygon_centers[i].lng,
                };
                var marker = new google.maps.Marker({
                  position: center_pos,
                  map: this.map,
                  icon: {
                    path: faCircleCheck.icon[4],
                    fillColor: "#00656c",
                    fillOpacity: 1,
                    anchor: new google.maps.Point(
                      faCircleCheck.icon[0] / 6, // width
                      faCircleCheck.icon[1] / 3 // height
                    ),
                    strokeWeight: 2,
                    strokeColor: "#00656c",
                    scale: 0.060,
                  },

                });
                polygonShapeContructor.setOptions({
                  fillOpacity: 0.6,
                });

                marker.setMap(this.map);
                dict[i] = marker;
                this.filterPawnstores(index_poly_shops[i], polygonShapeContructor, this.map, poly_shops[index_poly_shops[i]]);
                // let shops_arr = poly_shops[index_poly_shops[i]];
                // console.log(poly_shops[index_poly_shops[i]]);
                // for (let k = 0; k < shops_arr.length; k++) {
                //   console.log(shops_arr[k].latitude, shops_arr[k].longitude);
                // }
              }

            }
          );
          PolygonShapes.push(polygonShapeContructor);
        }
        //console.log(storeToPolygonMap);
        this.getStoreToPolygonMap(storeToPolygonMap);

        PolygonShapes.forEach((polygon) => {
          polygon.setMap(this.map);
        });

        //centering and zooming corresponding to created polygons because here now polygons are main cases
        //let lat_arr = []; let lng_arr = [];
        var bounds = new google.maps.LatLngBounds();
        //let arr = [];
        for (var j = 0; j < PolygonShapes.length; j++) {
          for (var i = 0; i < PolygonShapes[j].getPath().getLength(); i++) {
            let k = PolygonShapes[j].getPath().getAt(i);
            bounds.extend(k);
            // console.log("abc");
            // lat_arr.push(k.lat());
            // lng_arr.push(k.lng());
            // arr.push({ lng: k.lng(), lat: k.lat() });
          }
        }

        // lat_arr.sort();
        // lng_arr.sort();
        // arr.sort((a, b) => {
        //   if (a.lng !== b.lng) {
        //     return (a.lng - b.lng);
        //   }
        //   else {
        //     return (a.lat - b.lat);
        //   }
        // })
        // let center_point = arr[parseInt(Math.ceil(arr.length / 2))];

        // let centerlatitude = lat_arr[parseInt(Math.ceil(lat_arr.length / 2))];
        // let centerlongitude = lng_arr[parseInt(Math.ceil(lng_arr.length / 2))];
        //sets zoom level accordingly to bounds of polygons:
        this.map.fitBounds(bounds);
        //sets center accordingly to bounds of polygons:
        this.map.setCenter(new google.maps.LatLng(bounds.getCenter().lat(), bounds.getCenter().lng()));
        //console.log(this.map.getCenter().lat(), this.map.getCenter().lng());
        //this.map.setCenter(new google.maps.LatLng(centerlatitude, centerlongitude));
        // this.map.setZoom(12);
        // this.map.setCenter(new google.maps.LatLng(center_point.lat, center_point.lng));
        // this.map.setZoom(12);




        /* const circleShapes = [];
 
         for (let i = 0; i < circleCoordsSet.length; i++) {
 
           const cityCircle = new google.maps.Circle({
             strokeColor: strokeColors[0],
             map: this.map,
             strokeWeight: 2,
             fillColor: fillColors[0],
             fillOpacity: 0.2,
             zIndex: 99999,
             center: circleCoordsSet[i].center,
             radius: circleCoordsSet[i].radius,
           });
 
           google.maps.event.addListener(
             cityCircle,
             "mouseover",
             () => {
               cityCircle.setOptions({
                 fillOpacity: 0.8,
               });
             }
           );
           google.maps.event.addListener(
             cityCircle,
             "mouseout",
             () => {
               cityCircle.setOptions({
                 fillOpacity: 0.2,
               });
             }
           );
           google.maps.event.addListener(
             cityCircle,
             "click",
             () => {
               //alert("hi");
               //console.log(cityCircle.center.lat(), cityCircle.center.lng());
               //console.log(cityCircle.radius);
               //alert("centerlat : " + cityCircle.center.lat() + ", centerlng : " + cityCircle.center.lng() + ", radius : " + cityCircle.radius);
             }
           );
           circleShapes.push(cityCircle);
         }
         console.log(circleShapes);
         circleShapes.forEach((circle) => {
           circle.setMap(this.map);
         });
         this.map.setZoom(14);*/

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