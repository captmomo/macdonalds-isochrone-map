'use strict';
function toggleControl(){};

toggleControl.prototype.onAdd = function(map){
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl custom';
    this._container.innerHTML = `
    <div class='heading'><h2>Toggle travel time (mins)</h3></div>
    <span class='toggle-option' data-value='10'>10</span>
    <span class='toggle-option' data-value='20'>20</span>
    <span class='toggle-option' data-value='30'>30</span>`
    return this._container;
};

toggleControl.prototype.onRemove = function(){
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
};