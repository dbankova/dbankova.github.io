/*const initialAnimation = document.querySelector(".initialAnimation");
const fullImage = document.querySelector(".fullImage");

const tl = new TimelineMax();

tl.fromTo(fullImage, 1, { height: "0%" }, { height: "80%" });
*/

function arrange() {
    var molecules = [document.getElementById("mol1"), document.getElementById("mol2"), document.getElementById("mol3"), document.getElementById("mol4"), document.getElementById("mol5"), document.getElementById("mol6"), document.getElementById("mol7"), document.getElementById("mol8"), document.getElementById("mol9"), document.getElementById("mol10"), document.getElementById("mol11"), document.getElementById("mol12"), document.getElementById("mol13"), document.getElementById("mol14"), document.getElementById("mol15")];

    molecules[0].style.top = "200px";
    molecules[0].style.left = "200px";
    molecules[1].style.top = "200px";
    molecules[1].style.left = "350px";
    molecules[2].style.top = "200px";
    molecules[2].style.left = "500px";
    molecules[3].style.top = "230px";
    molecules[3].style.left = "200px";
    molecules[4].style.top = "230px";
    molecules[4].style.left = "350px";
    molecules[5].style.top = "230px";
    molecules[5].style.left = "500px";
    molecules[6].style.top = "260px";
    molecules[6].style.left = "200px";
    molecules[7].style.top = "260px";
    molecules[7].style.left = "350px";
    molecules[8].style.top = "260px";
    molecules[8].style.left = "500px";
    molecules[9].style.top = "290px";
    molecules[9].style.left = "200px";
    molecules[10].style.top = "290px";
    molecules[10].style.left = "350px";
    molecules[11].style.top = "290px";
    molecules[11].style.left = "500px";
    molecules[12].style.top = "320px";
    molecules[12].style.left = "200px";
    molecules[13].style.top = "320px";
    molecules[13].style.left = "350px";
    molecules[14].style.top = "320px";
    molecules[14].style.left = "500px";
    /*var i;
    var pos = 200;
    for (i = 0; i < 15; i++) {
        molecules[i].style.top = pos + "px";
        molecules[i].style.left = pos + "200px";
        pos+=10;
    }*/
    //mol5.style.top = "200px";
    //mol5.style.left = "500px";

    /*var pos = 200;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            molecules[0].style.top = pos + 'px';
            molecules[0].style.left = pos + 'px';
            molecules[1].style.top = pos + 'px';
            molecules[1].style.left = pos - 'px';
            //mol3.style.top = pos - 'px';
            //mol3.style.left = pos + 'px';
            //mol4.style.top = pos - 'px';
            //mol4.style.left = pos - 'px';
        }
    }*/
}