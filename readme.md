# Readme

This repo is practice for the mapbox api and general javascript coding.

## Attribution

Inspired by [Jordan Lim's McDonald's voroni map](https://gitlab.com/jordanlys95/sg-mcdonalds-store-voronoi/-/tree/master/).  
  
## Tools  
  
[MapBox](https://docs.mapbox.com/help/tutorials/get-started-isochrone-api/)

## Documentation

### [Plain isochrone map](https://github.com/captmomo/macdonalds-isochrone-map/blob/master/map.html)  
* Made with help from the tutorial below and this [demo](https://blog.mapbox.com/building-with-isochrones-3dc04a061a84).  
* [Tutorial](https://docs.mapbox.com/help/tutorials/get-started-isochrone-api/) 
  
### [Isochrone with Store locator](https://github.com/captmomo/macdonalds-isochrone-map/blob/master/map-sidebar.html)  
Made with help from the tutorial below, with some modifications.
* [Tutorial](https://docs.mapbox.com/help/tutorials/building-a-store-locator/#getting-started)

### Geocoder  
Added geocoder with results limited to Singapore. [Link to instructions.](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/).

### Custom control to toggle isochrone
Followed the instructions [here](https://blog.mapbox.com/build-mapbox-gl-js-plugins-74c52f22db63) to create a custom plugin to toggle the coverage.

### Draggable marker to display dynamic isochrone
Added a draggable marker which will also update location based on geocoder search result. 
A isochrone will be generated from the marker location based on the current settings (e.g. 10/20/30minutes).  
This [demo](https://blog.mapbox.com/building-with-isochrones-3dc04a061a84) helped a lot.  

### turf.js practice

Followed the following [example](https://docs.mapbox.com/help/tutorials/analysis-with-turf/). The mac location nearest to the draggable marker will be highlighted with a red circle. This is determined by using turf.nearest(point, featureCollection).
  
### To do:
* ~~Figure out why the last listing has differentn styling.~~ Fixed thanks to u/bigzij!
  
