//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 16);


// creat and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
 
 //creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize:[58,68],
  iconAnchor:[29,68],
})
 
let marker;

//create and add mark
 map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

document.querySelector('[name=lat]').value =lat;
document.querySelector('[name=lng]').value =lng;


/*remover icone*/
marker && map.removeLayer(marker)
 
//add mark
marker = L.marker([lat, lng], { icon })
 .addTo(map)
 })

 //upload images
 function addPhotoField(){
  
  //pega a caixa de upload
const container = document.querySelector('#images')
// pegar o container pra duplicar
const fieldsContainer = document.querySelectorAll('.new-upload')
//clonando aultima imagem
const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
//verificar se o campo esta vazio
const input = newFieldContainer.children[0]
if(input.value == ""){
  return
}
//limpar o campo de upload antes do up seguinte
input.value = ""
//colocando o clone na #images
container.appendChild(newFieldContainer)
 }

 function deleteField(event){
   const span = event.currentTarget
   
   const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length <= 1){
   //lipar valor do campo 
   span.parentNode.children[0].value = ""
    return}
    //deletar campo
    span.parentNode.remove();
 }


 //selecionar sim ou não
 function toggleSelect(event){

//retirara classe activa dos botões
document.querySelectorAll('.button-select button')
.forEach(function (button) {
  button.classList.remove('active')
})
   //colocar a classe active no botão clicado
const button = event.currentTarget
button.classList.add('active')
 
 //atualizar o hidden com o valor selecionado
 const input = document.querySelector('[name="open_on_weekends"]')
 input.value = button.dataset.value
}
 