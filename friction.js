function setup() {
    createCanvas(1500, 900);
}


//___Classes and objects___
function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.add = function(b) {
    return new Vector(this.x + b.x, this.y + b.y);
  }

  this.sub = function(b) {
    return new Vector(this.x - b.x, this.y - b.y);
  }

  this.div = function(n) {
    return new Vector(this.x / n, this.y / n);
  }

  this.mul = function(n) {
    return new Vector(this.x / n, this.y / n);
  }

  this.mag = function() {
    return sqrt((this.x * this.x) + (this.y * this.y));
  }

  this.unit_vec = function() {
    magnitude = this.mag();
    return new Vector(this.x / magnitude, this.y / magnitude);
  }

  this.coords = function() {
    console.log(this.x, this.y);
  }
}


circle1 = {
  radius: 50,

  pos_vec: new Vector(750, 450),
  vel_vec: new Vector(0, 0),
  acc_vec: new Vector(0, 0),
  mass: 5,

  color: [80, 100, 255]
};


//___Constants___
const g = 0;
const dt = 0.01;
let F_move = new Vector(0, 0);
let F_g = new Vector(0, g);


//___Functions___
function move(obj) {
  let F = F_move.add(F_g);

  obj.acc_vec = F / obj.mass;
  obj.vel_vec += obj.acc_vec * dt;
  obj.pos_vec += obj.vel_vec * dt;

  typeof obj.acc_vec;
}


//___Rendering___
function draw() {
  background(140, 255, 180);

  move(circle1);

  fill(circle1.color);
  circle(circle1.pos_vec.x, circle1.pos_vec.y, 2 * circle1.radius);
  console.log(circle1.pos_vec.x, circle1.pos_vec.y);
}
