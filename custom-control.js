'use strict';
function toggleControl(){};

toggleControl.prototype.onAdd = function(map){
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl custom';
    this._container.innerHTML = `
    <div class='heading'>
    <p class='is-title is-3'>Toggle travel time (mins) <a style="color: #ffffff;" class="control-toggle">
    <i class="fa fa-angle-down"></i>
</a></div></p>
<div class='control-content'>
    <span class='toggle-option selected' data-value='10'>10</span>
    <span class='toggle-option' data-value='20'>20</span>
    <span class='toggle-option' data-value='30'>30</span>
</div>`
    return this._container;
};

toggleControl.prototype.onRemove = function(){
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
};

