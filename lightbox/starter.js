const images = document.querySelectorAll(".content img");
images.forEach(item => item.addEventListener("click", handlezoomimage));

function handlezoomimage(events) {
const img = events.target.getAttribute("src")
const template = `<div class="lightbox">
<div class="lightbox-content">
<i class="fa fa-angle-left lightbox-prev"></i>

  <img src="${img}" 
  alt="" 
  class="lightbox-image">
  <i class="fa fa-angle-right lightbox-next"></i>
</div>
</div>`;
document.body.insertAdjacentHTML("beforeend", template);

let index = 0;
document.body.addEventListener("click", function(e) {
const lightimage = document.querySelector(".lightbox-image");
let lightsrc = "";
if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
}
else if (e.target.matches(".lightbox-next")) {
    //handle next img
    lightsrc = lightimage.getAttribute("src");

   index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightsrc
   )   
    index = index +1;
    if(index > images.length - 1){
        index = 0;
    }
    const newsrc = [...images][index].getAttribute("src");
    lightimage.setAttribute("src", newsrc);

}
else if (e.target.matches(".lightbox-prev")) {
//handle prev img
lightsrc = lightimage.getAttribute("src");

index = [...images].findIndex(
 (item) => item.getAttribute("src") === lightsrc
)   
 index = index - 1;
 if(index < 0){
     index = images.length - 1;
 }
 const newsrc = [...images][index].getAttribute("src");
 lightimage.setAttribute("src", newsrc);

}

})}