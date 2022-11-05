// function getCircleArea(radius) {}
// console.log (new String("Hello"))


function getCircleArea (radius) {
    this.pi = 3.14;
    this.radius = radius;
    this.getArea = function () {
        return this.pi * this.radius* this.radius;
    }
    return this;
};

const firstCircleArea = new getCircleArea (5);
console.log(firstCircle);
// console.log(firstCicle.getArea());
// console.log(firstCircle.pi);
// console.log(firstCircle.radius);