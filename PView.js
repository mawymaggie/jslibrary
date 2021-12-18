"use strict";
// (function(global, document, $) { 
    function hoverFunction(popupId, pin) {
        const popup = document.getElementById(popupId);
        popup.className = "popup show";
        document.getElementById(popupId).addEventListener('mouseout', onMouseOut, true);
        function onMouseOut(event) {
            const e = event.toElement || event.relatedTarget;
            if (e == this) {
                return;
            }
            if(pin == true && document.getElementById(popupId + "btnpin").innerHTML == "Pin"){
                popup.className = "popup";
                resetElement(document.getElementById(popupId));
            } else if (pin == true && document.getElementById(popupId + "btnpin").innerHTML == "unPin"){
                popup.className = "popup show";
                dragElement(document.getElementById(popupId));
            } else {
                popup.className = "popup";
            }
        }
    }

    function pinfunction(elem){
        if(document.getElementById(elem.id).innerHTML == "unPin"){
            document.getElementById(elem.id).innerHTML = "Pin";
        }else{
            document.getElementById(elem.id).innerHTML = "unPin";
        }
    }

    function resetElement(elmnt) {
        elmnt.style.top = "18px";
        elmnt.style.left = "21px";
    }

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0;
        elmnt.onmousedown = dragMouseDown;
    
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos2 = e.clientX;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos2 - e.clientX;
            pos2 = e.clientX;
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            
        }
    
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function PViewGenerator(parentID, pin, color){
        this.parent = document.getElementById(parentID);
        this.parent.className = 'linkedElement';
        this.popup = document.createElement('div');
        this.popup.id = this.parent.id + 'popup';
        this.popup.className = 'popup';
        this.parent.appendChild(this.popup);


        if (pin == true) {
            this.parent.setAttribute('onmouseover','hoverFunction("'+this.popup.id+'", true);');
        } else {
            this.parent.setAttribute('onmouseover','hoverFunction("'+this.popup.id+'", false);');
        }

        const arrow = document.createElement('div');
        arrow.className = 'arrow';
        this.popup.appendChild(arrow);
        
        if (pin == true & color == true) {
            //append button
            const btnbar = document.createElement('div');
            const btnContainer = document.createElement('div');
            btnContainer.style = 'display: inline-block;';
            btnContainer.className = 'btnContainer';
            btnContainer.id  = this.popup.id + 'btnC';
        
            const btn = document.createElement("button");
            btn.innerHTML = "Pin";
            btn.className  = 'btn btn-primary';
            btn.id  = this.popup.id + 'btnpin'; 
            btn.setAttribute("onClick", "pinfunction(this)");

            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.className = 'colorbox';
            colorPicker.addEventListener('input', () => {
                const color = colorPicker.value;
                this.changePViewColor(color);
            })
            
            btnContainer.appendChild(btn);
            btnContainer.appendChild(colorPicker);
            
            btnbar.appendChild(btnContainer);
            this.popup.appendChild(btnbar);
            
        } else if(pin == true & color == false){
            const btnbar = document.createElement('div');
            const btnContainer = document.createElement('div')
            btnContainer.style = 'display: inline-block;';
            btnContainer.className = 'btnContainer';
            btnContainer.id  = this.popup.id + 'btnC';
        
            const btn = document.createElement("button");
            btn.innerHTML = "Pin";
            btn.className  = 'btn btn-primary';
            btn.id  = this.popup.id + 'btnpin';  
            btn.setAttribute("onClick", "pinfunction(this)");
            
            btnContainer.appendChild(btn);

            btnbar.appendChild(btnContainer);
            this.popup.appendChild(btnbar);
        } else if (pin == false & color == true){
            const btnbar = document.createElement('div');
            const btnContainer = document.createElement('div')
            btnContainer.style = 'display: inline-block;';
            btnContainer.className = 'btnContainer';
            btnContainer.id  = this.popup.id + 'btnC';

            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.className = 'colorbox';
            colorPicker.addEventListener('input', () => {
                const color = colorPicker.value;
                this.changePViewColor(color);
            })
            btnContainer.appendChild(colorPicker);
            
            btnbar.appendChild(btnContainer);
            this.popup.appendChild(btnbar);
        }
    }

    PViewGenerator.prototype = {

        addTextElement: function(elem) {
            const textCon = document.createElement('div');
            const textElement = document.createElement('P');
            const text = document.createTextNode(elem);
            textElement.appendChild(text);
            textElement.style = 'position: relative; max-width: 100%; overflow: auto;';
            textCon.appendChild(textElement);
            this.popup.appendChild(textCon);

        },

        addImageElement: function(imageSource) {
            const imageElement = document.createElement('img');
            imageElement.src = imageSource;
            imageElement.style = 'position: auto; max-width: 100%; height: auto;';

            this.popup.appendChild(imageElement);
        },

        addVideoElement: function(videoLink) {
            const videoElement = document.createElement('iframe');
            videoElement.src = videoLink;
            videoElement.style = 'position: auto; max-width: 100%;';

            this.popup.appendChild(videoElement)
        },

        changePViewColor: function(color) {
            this.popup.style.backgroundColor = color;
            this.popup.style.borderColor = color;
        },
    
        changePViewSize: function(width, height) {
            if (width != null) {
                this.popup.style.width = width;
            }
            if (height != null) {
                this.popup.style.height = height;
            }
        }
    }
//     global.PViewGenerator = global.PViewGenerator || PViewGenerator
// })(window, window.document, $);