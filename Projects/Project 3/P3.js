console.log("Final Assignment")

var canvas;
var ctx;
var w = 1024;
var h = 576;
var o1 = {
    x: w / 2,
    y: h / 2,
    w: 100,
    h: 100,
    r: 30,
    c: 50,
    a: 0,
    randomness: 0,
    change: { x: 0, y: 0, h: 0, r: 0, w: 0, c: 0, a: 0, randomness: 0 }
}
var allCircles = [];
var eventStates = {
    isonclick: false,
    isSpacebar: false,
}



document.onkeydown = keydown;

setUpCanvas();
createDataForCircles(10);
animationLoop();

function animationLoop() {
    clear();
    for (var i = 0; i < allCircles.length; i++) {
        circle_arc(allCircles[i]);
        updateData(allCircles[i]);
        bounce(allCircles[i]);
    }
    circle_arc(o1);
    updateData(o1);
    bounce(o1);
    collison_circle(o1, allCircles);

    requestAnimationFrame(animationLoop)
}

function collison_circle(o1, allCircles) {
    for (var i = 0; i < allCircles.length; i++) {
        var circle = allCircles[i];
        var differenceX = Math.abs(o1.x - circle.x);
        var differenceY = Math.abs(o1.y - circle.y);
        var hdif = Math.sqrt(differenceX * differenceX + differenceY * differenceY);

        if (hdif < o1.r + circle.r) {
            if (differenceX < differenceY) {
                o1.change.y *= -1;
                o1.a = 0
                circle.change.y *= -1;
            } else {
                o1.change.x *= -1;
                o1.a = 0
                circle.change.x *= -1;
            }
        }
    }
}

function createDataForCircles(num) {
    for (var i = 0; i < num; i++) {
        allCircles.push({
            x: 100,
            y: 100,
            r: 10,
            c: 150,
            a: 0.75,
            change: {
                x: randn(3),
                y: randn(3),
                r: 0,
                c: 0,
                a: 0,
            }
        })
    }
}

function stop() {
    o1.change.x = 0;
    o2.change.x = 0;
}

function keydown(e) {
    if (e.key == " ") {
        if (eventStates.isSpacebar) {
            eventStates.isSpacebar = false;
        } else {
            o1.a = 0.75
            eventStates.isSpacebar = true;
        }

        console.log("key down", eventStates);
    } else if (e.key == "ArrowUp") {
        o1.change.y -= 1;
        console.log('up');
    } else if (e.key == "ArrowRight") {
        o1.change.x += 1;
    } else if (e.key == "ArrowLeft") {
        o1.change.x -= 1;
    } else if (e.key == "ArrowDown") {
        o1.change.y += 1;
    }
}


function bounce(o) {
    if (o) {
        if (o.x > w || o.x < 0) {
            o.change.x *= -1;
        }
        if (o.y > h || o.y < 0)
            o.change.y *= -1;
    }
}

function updateData(o) {
    for (keys in o.change) {
        o[keys] += o.change[keys]
    }
}

function clear() {
    ctx.clearRect(0, 0, w, h);
}

function circle_arc(o) {
    if (o.r > 0) {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, 2 * Math.PI);
        ctx.fillStyle = "hsla(" + o.c + ", 100%, 50%, " + o.a + ")";
        ctx.fill();
    }
}

function rect(o) {
    o.x = o.x - o.w / 2;
    o.y = o.y - o.h / 2;
    ctx.beginPath();
    ctx.moveTo(o.x + rand(o.randomness), o.y + rand(o.randomness));
    ctx.lineTo(o.x + o.w + rand(o.randomness), o.y + rand(o.randomness));
    ctx.lineTo(o.x + o.w + rand(o.randomness), o.y + o.h + rand(o.randomness));
    ctx.lineTo(o.x + rand(o.randomness), o.y + o.h + rand(o.randomness));
    ctx.closePath();
    ctx.fillStyle = "hsla(" + o.c + ",100%, 50%, " + o.a + ")";
    ctx.lineWidth = o.lw;
    ctx.fill();
    o.x = x;
    o.y = y;
}

function rand(range) {
    var result = Math.random() * range;
    return result
}

function randn(range) {
    var result = Math.random() * range - range / 2;
    return result
}

function setUpCanvas() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "3px solid clear";

}