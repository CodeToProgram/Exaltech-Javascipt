const number = document.getElementById("inpt");
const testButton = document.getElementById("testBtn");

testButton.addEventListener("click", function () {
    try {
        if (number.value === "") throw "please provide a value";
        if (isNaN(number.value)) throw "please provide a valid number";
        if (number.value < 50) throw "number is less than 50";
        if (number.value > 100) throw "number is greater than 100";
        window.alert("success")
    }catch (e) {
        window.alert(e);
    }finally {
        window.alert(e);
    }
});


