/*const initialAnimation = document.querySelector(".initialAnimation");
const fullImage = document.querySelector(".fullImage");

const tl = new TimelineMax();

tl.fromTo(fullImage, 1, { height: "0%" }, { height: "80%" });
*/

function myMove() {
    var mol1 = document.getElementById("mol1");
    var mol2 = document.getElementById("mol2");
    var mol3 = document.getElementById("mol3");
    var mol4 = document.getElementById("mol4");
    var pos = 200;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            mol1.style.top = pos + 'px';
            mol1.style.left = pos + 'px';
            mol2.style.top = pos + 'px';
            mol2.style.left = pos - 'px';
            mol3.style.top = pos - 'px';
            mol3.style.left = pos + 'px';
            mol4.style.top = pos - 'px';
            mol4.style.left = pos - 'px';
        }
    }
}