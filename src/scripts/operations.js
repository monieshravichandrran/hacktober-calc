// The calculator magic works here
function sum(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

function log(x){
  return Math.log10(x);
}

function power(x,y){
  return Math.pow(x,y);
}

function factorial(x){
  let power = 1;
  for(let i=2;i<=x;i++){
    power = power*i;
  }
  return power;
}

function cos(x){
  return Math.cos((x*22/7)/180);
}

function sin(x){
  return Math.sin((x*22/7)/180);
}

function tan(x){
  return Math.tan((x*22/7)/180);
}


export { sum, subtraction, multiplication, division, log, power, factorial, cos, sin, tan };
