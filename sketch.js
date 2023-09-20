let polySynth;

let canvas_size = 640;

let rings = 24;
let bead_size = 10;
let delta = ((canvas_size/2)-bead_size)/rings;

var bg;

var radius = [];
for(var i=1;i<=rings;i++){
  radius.push((delta*i));
}

var a_reverse = new Array(rings).fill(false);
var angle = new Array(rings).fill(0);
var pos_x = new Array(rings).fill(0);
var pos_y = new Array(rings).fill(0);

function move_delta(i){
  // return ((rings-i)*(1/rings));
  return 1-(i*(1/rings));
}
function preload(){
    bg=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAezu7PuR0KqQR3IJnWge0m-Lbj93iyKQAhkLZ77D6iPJHCHEdjnf-IJEfVs_mWeEBww0&usqp=CAU');
}
function setup() {
  createCanvas(canvas_size, canvas_size);
  angleMode(DEGREES);
}

function draw() {
  background(bg);
  
  stroke(127, 63, 220);
  for(var i =0;i<rings;i++){
    // var prev = [canvas_size/2 - radius[i] * cos(0),canvas_size/1.5 - radius[i] * sin(0)]
    for(var a = 0; a<180 ; a++){
      x = canvas_size/2 - radius[i] * cos(a);
      y = canvas_size/1.5 - radius[i] * sin(a);
      point(x,y);
      // line(prev[0],prev[1],x,y);
      // prev=[x,y];
    }
  }
  for(var i =0;i<rings;i++){
    
    if(angle[i] >= 180){
      // angle[i] = 180;
      a_reverse[i] = true;
    }
    if(angle[i] <= 0){
      // angle[i] = 0;
      a_reverse[i] = false;
    }
    
    pos_x[i] = canvas_size/2 - radius[i] * cos(angle[i]);
    pos_y[i] = canvas_size/1.5 - radius[i] * sin(angle[i]);

    // fill(204, 101, (192, 127));
    fill(204, 101, 192, (250/rings)*(i+1));
    // stroke(127, 63, 120);
    stroke(255,255,255,100);
    circle(pos_x[i], pos_y[i], bead_size);


    if(a_reverse[i] == false){
      angle[i]+=move_delta(i);
    }
    else{
      angle[i]-=move_delta(i);
    }
  }

}