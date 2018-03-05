var rValue = document.getElementById('r-value');
var gValue = document.getElementById('g-value');
var bValue = document.getElementById('b-value');

var colorValue = document.getElementById('color-value');

var rControl = document.getElementById('r-control');
var gControl = document.getElementById('g-control');
var bControl = document.getElementById('b-control');

rControl.addEventListener('change', function () {
    'use strict';
    colorValue.style.backgroundColor = "rgb(" + rControl.value.toString() + "," + gControl.value.toString() + "," + bControl.value.toString() + ")";
    
    rValue.innerText = this.value;
}, false);

gControl.addEventListener('change', function () {
    'use strict';
    colorValue.style.backgroundColor = "rgb(" + rControl.value.toString() + "," + gControl.value.toString() + "," + bControl.value.toString() + ")";
    
    gValue.innerText = this.value;
}, false);

bControl.addEventListener('change', function () {
    'use strict';
    colorValue.style.backgroundColor = "rgb(" + rControl.value.toString() + "," + gControl.value.toString() + "," + bControl.value.toString() + ")";
    
    bValue.innerText = this.value;
}, false);