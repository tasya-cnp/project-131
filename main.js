img = "";

function preload()
{
    img = loadImage('Snapchat-802915837.jpg');

    img = loadImage('Snapchat-1334071425.jpg');    

    img = loadImage('Snapchat-1410824466.jpg');
}

function setup()
{
    canvas = createCanvas(500, 300);
    canvas.left();

    canvas_2 = createCanvas(500, 300);
    canvas_2.center();

    canvas_3 = createCanvas(500, 300);
    canvas_2.right();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill ("#FF0000");
    text ("Speaker", 40, 65);
    noFill();
    stroke('#FF0000');
    rect(10, 60, 359, 340);

    
    image(img, 0, 0, 640, 420);
    fill ("#FF0000");
    text ("Laptop", 40, 65);
    noFill();
    stroke('#FF0000');
    rect(20, 50, 359, 340);

    
    image(img, 0, 0, 640, 420);
    fill ("#FF0000");
    text ("WaterBottle", 40, 65);
    noFill();
    stroke('#FF0000');
    rect(50, 100, 359, 340);
}