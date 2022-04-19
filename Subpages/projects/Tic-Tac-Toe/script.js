player = true;
function btn1func() {
    if (player == true) {
        document.getElementById("btn1").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn1").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn1").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn1").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn2func() {
    if (player == true) {
        document.getElementById("btn2").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn2").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn2").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn2").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn3func() {
    if (player == true) {
        document.getElementById("btn3").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn3").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn3").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn3").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn4func() {
    if (player == true) {
        document.getElementById("btn4").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn4").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn4").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn4").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn5func() {
    if (player == true) {
        document.getElementById("btn5").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn5").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn5").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn5").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn6func() {
    if (player == true) {
        document.getElementById("btn6").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn6").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn6").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn6").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn7func() {
    if (player == true) {
        document.getElementById("btn7").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn7").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn7").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn7").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn4").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn8func() {
    if (player == true) {
        document.getElementById("btn8").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn8").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn8").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn8").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn2").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}
function btn9func() {
    if (player == true) {
        document.getElementById("btn9").style.background = "url(images/tic-x.png) white center no-repeat";
        document.getElementById("btn9").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "O";
        player = false;
    }
    else if (player == false) {  
        document.getElementById("btn9").style.background = "url(images/tic-o.png) white center no-repeat";
        document.getElementById("btn9").style.backgroundSize = "200px";
        document.getElementById("turntype").innerHTML = "X";
        player = true;
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn3").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn6").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn7").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn8").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-o.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-o.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("owin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
    if (document.getElementById("btn1").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn5").style.backgroundImage == 'url("images/tic-x.png")'&& document.getElementById("btn9").style.backgroundImage == 'url("images/tic-x.png")') {
        document.getElementById("layout").style.display = "none";
        document.getElementById("xwin").style.display = "block";
        document.getElementById("turn").style.display = "none";
    }
}