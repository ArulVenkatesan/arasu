// select addpopup,popupbox,overlay
var addpopup = document.querySelector(".addpopup")
var popupbox = document.querySelector(".popupbox")
var overlay = document.querySelector(".overlay")
addpopup.addEventListener("click", function () {
    popupbox.style.display = "block"
    overlay.style.display = "block"
})
// select cancelbook
var cancelbook = document.querySelector(".cancelbook")
cancelbook.addEventListener("click", function (event) {
    event.preventDefault()
    popupbox.style.display = "none"
    overlay.style.display = "none"
})
//select addbook,container,booktitle,booktauthor,bookdescription
var addbook=document.querySelector(".addbook")
var container=document.querySelector(".container")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescription=document.getElementById("bookdescription") 
addbook.addEventListener("click",function(event){
 event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","book")
 div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button class="Close" onclick="deletebook(event)">Close</button>`
 container.append(div)   
  popupbox.style.display = "none"
    overlay.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()
}