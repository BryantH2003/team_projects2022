let slider1 = document.getElementById("range1");
let output1 = document.getElementById("value1");
let slider2 = document.getElementById("range2");
let output2 = document.getElementById("value2");
let slider3 = document.getElementById("range3");
let output3 = document.getElementById("value3");
let slider4 = document.getElementById("range4");
let output4 = document.getElementById("value4");
let slider5 = document.getElementById("range5");
let output5 = document.getElementById("value5");
let slider6 = document.getElementById("range6");
let output6 = document.getElementById("value6");

// Update the current slider value (each time you drag the slider handle)
output1.innerHTML = slider1.value;
slider1.oninput = function () {
    output1.innerHTML = this.value;
};
output2.innerHTML = slider2.value;
slider2.oninput = function () {
    output2.innerHTML = this.value;
};
output3.innerHTML = slider3.value;
slider3.oninput = function () {
    output3.innerHTML = this.value;
};
output4.innerHTML = slider4.value;
slider4.oninput = function () {
    output4.innerHTML = this.value;
};
output5.innerHTML = slider5.value;
slider5.oninput = function () {
    output5.innerHTML = this.value;
};
output6.innerHTML = slider6.value;
slider6.oninput = function () {
    output6.innerHTML = this.value;
};

