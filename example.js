/* JS Library usage examples */
"use strict";
log('----------')

const parentElement1 = document.querySelector('#content');
//PView
const pv = new PViewGenerator(parentElement1, true, true)
pv.addTextElement('this is a pop-up!')
pv.addImageElement("rj.jpeg")
pv.addVideoElement("https://www.youtube.com/embed/b2Az7_lLh3g")
pv.changePViewColor('green')
pv.changePViewSize(null, '30%')