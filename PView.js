"use strict";

function $$$(selector) {

	const _self = {}
	_self.selector = selector
	_self.element = document.querySelector(selector) 

	return _self
};
function hoverFunction(popupId) {
    //document.getElementsByClassName(popup).style = "display: block;"
    const popup = document.getElementById(popupId);
   // popup.classList.toggle('show');
   // popup.getElementsByClassName.style.display = "block";
   popup.className = "popup show";

   var specifiedElement = document.getElementById(popupId);
alert(popup.className);
//I'm using "click" but it works with any event
document.addEventListener('mouseover', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
      specifiedElement.className = "popup";
  }
});

}

function PViewGenerator(parentElement, pin, customize){
    this.parent = parentElement
    this.parent.className = 'linkedElement'
    this.popup = document.createElement('div');
    this.popup.id = this.parent.id + 'popup';
    this.popup.className = 'popup';
    this.parent.appendChild(this.popup);
  //  this.parent.setAttribute("id",this.popup.id);
   // this.parent.setAttribute('onClick', hoverFunction(this.popup.id))

 this.parent.setAttribute('onmouseover','hoverFunction("'+this.popup.id+'");');
    //this.parent.onClick = hoverFunction(this.popup.id)

    //if (pin = true) {
        //const pinbutton = document.createElement('button')
        //pinbutton.onclick = function() {
            //
        //}
    //}

    //if (customize = true) {
        //
    //}



}

function dosomething()
{

}
PViewGenerator.prototype = {

    addTextElement: function(elem) {
        const textElement = document.createElement('P')
        const text = document.createTextNode(elem)
        textElement.appendChild(text)
        textElement.style = 'position: relative; max-width: 100%;'

        this.popup.appendChild(textElement)
    },

    addImageElement: function(imageSource) {
        const imageElement = document.createElement('img')
        imageElement.src = imageSource;
        imageElement.style = 'position: auto; max-width: 100%; height: auto;'

        //const imageContainer = document.createElement('div')
        //imageContainer.style = 'position: auto; max-width: 100%; '
        //imageContainer.appendChild(imageElement)
        this.popup.appendChild(imageElement)
    },

    addVideoElement: function(videoLink) {
        const videoElement = document.createElement('iframe')
        videoElement.src = videoLink;
        videoElement.style = 'position: auto; max-width: 100%;'

        this.popup.appendChild(videoElement)
    },

    changePViewColor: function(color) {
        this.popup.style.backgroundColor = color
    },

    changePViewSize: function(width, height) {
        if (!width == null) {this.popup.style.width = width}
        if (!height == null) {this.popup.style.height = height}
    }
}




function hoveroutFunction(popup) {
    return document.getElementsByClassName(popup).style = "display: none;"
}

//unction pinFunction() {

//}