const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
scrollWheelZoom: false,
zoomControl: false
}

//pegando valores pelo html pelo html
const lat = document.querySelector('span[data-lat]').dataSet.lat   
const lng = document.querySelector('span[data-lng]').dataSet.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 16);


// creat and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
 
 //creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize:[58,68],
  iconAnchor:[29,68],
  popupAnchor:[170,2]
})


 //create and add mark
 L
 .marker([lat,lng], { icon })
 .addTo(map)


 /*image gallery*/

 function selectImage(event){
const button = event.currentTarget

/*remover classes actives*/
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)


/*selecionar imagem click*/
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

/*atualizar imagem principal*/
imageContainer.src = image.src

function removeActiveClass(button){
button.classList.remove("active")
}

button.classList.add("active") 
 }