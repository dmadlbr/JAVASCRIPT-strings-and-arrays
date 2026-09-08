//Event Propogation

// btn.addEventListener("click", function () {
//     console.log("First function");
// });

// btn.addEventListener("click", function () {
//     console.log("Second function");
// });

parent.addEventListener("click", function (event) {
    console.log("First function");
      event.stopPropagation();
});

btn.addEventListener("click", function (event) {
  
    console.log("Second function");
});
