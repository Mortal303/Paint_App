var canvas,
    context,
    flag = {
        check: Boolean,
        index: Number
    },
    dragging = false,
    dragStartLocation,
    snapshot;
    
var i = 0;
var rect = [];
var canvas = document.getElementById("canvas");
var lower = document.getElementById("lower")
var clearCanvas = document.getElementById("clearCanvas");
context = canvas.getContext('2d');
canvas.addEventListener('dblclick', deleteItem, false);
canvas.addEventListener('mousedown', dragStart, false);
canvas.addEventListener('mousemove', drag, false);
canvas.addEventListener('mouseup', dragStop, false);
clearCanvas.addEventListener("click", eraseCanvas, false);

flag.check = false;

function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {
        x: x,
        y: y
    };
}

function deleteItem(event) {
    if (rect.length != 0) {
        for (var i = 0; i < rect.length; i++) {
            if (context.isPointInPath(rect[i], event.offsetX, event.offsetY)) {
                context.clearRect(rect[i].x, rect[i].y, rect[i].w+1, rect[i].h+1);
                rect.splice(i,1);
                //bugs
            }
        }
    }
}

function eraseCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rect = [];
}

function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
    console.log("snap" + snapshot);
}

function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
}

function dragStart(event) {
    if (rect.length != 0) {
        for (var i = 0; i < rect.length; i++) {
            if (context.isPointInPath(rect[i], event.offsetX, event.offsetY)) {
                flag.check = true;
                flag.index = i;
            }
        }
    }
    if (flag.check == false) {
        dragging = true;
        dragStartLocation = getCanvasCoordinates(event);
        takeSnapshot();
    }
}

function drag(event) {
    var position;
    if (dragging == true) {
        restoreSnapshot();
        position = getCanvasCoordinates(event);
        draw(position);
    }
}

function dragStop(event) {
    dragging = false;
    var position = getCanvasCoordinates(event);
    if (flag.check != true) {
        rect.push(draw(position));
    }
    context.fillStyle = getRndColor();
    flag.check = false;
}

function getRndColor() {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function draw(position) {
    const rectangle = new Path2D();
    rectangle.rect(dragStartLocation.x, dragStartLocation.y, position.x - dragStartLocation.x, position.y - dragStartLocation.y);
    rectangle.x = dragStartLocation.x;
    rectangle.y = dragStartLocation.y;
    rectangle.w = position.x - dragStartLocation.x;
    rectangle.h = position.y - dragStartLocation.y;
    context.fill(rectangle);
    return rectangle;
}

function show(){
    lower.style.display = "block";
    lower.scrollIntoView();
}
