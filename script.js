console.log("hello world");
let btn =  document.querySelector('#myBtn')
btn.addEventListener('click', function() {  
    console.log("Button clicked!");
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
});

