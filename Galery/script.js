const besar = document.querySelector(".Besar");
const container = document.querySelector(".container");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function(e){
    
    if(e.target.className == "thumb") {

    besar.src = e.target.src;
    besar.classList.add("fade");
    setTimeout(function(){
        besar.classList.remove("fade");
    }, 500);

    thumbs.forEach(function(thumb){
        // if(thumb.classList.constains("active")){
        //     thumb.classList.remove("active");
        // }
        thumb.className = "thumb";
    });
    e.target.classList.add("active");
    }
});