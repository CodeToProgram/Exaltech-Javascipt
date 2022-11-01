function getCircleArea (radius) {
    return {
        pi: 3.14,
        radius, //radius:radius

        getArea () {
            function () {
return this.pi*this.radius*this.radius;
            },
        };
    };
}
const circleFirst = getCircleArea(10);
const circlesecond = getCircleArea(5);