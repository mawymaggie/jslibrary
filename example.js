/* JS Library usage examples */
"use strict";
log('----------')

//PView1 - both pin and color
const pv = new PViewGenerator('content', true, true);
pv.addTextElement('Pin and change color!');
pv.addImageElement("rj.jpeg");
pv.changePViewSize(null, '500px');

//PView2 - only pin 
const pv2 = new PViewGenerator('content2', true, false);
pv2.addTextElement('Pin me and play the Video!');
pv2.addVideoElement("https://www.youtube.com/embed/b2Az7_lLh3g");
pv2.changePViewColor('green');

//PView3 - only color
const pv3 = new PViewGenerator('content3', false, true);
pv3.addTextElement('Change my color!');
pv3.addTextElement('I have my width changed!');
pv3.changePViewSize('500px', );

//PView4 - none (default)
const pv4 = new PViewGenerator('content4', false, false);
pv4.addTextElement('I have the default style!');
pv4.addImageElement("rj.jpeg");