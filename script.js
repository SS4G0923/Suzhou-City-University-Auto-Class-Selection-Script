// ==UserScript==
// @name         SzcuAutoClassSelectionScript
// @namespace    szcu.edu.cn
// @version      0.1
// @description  try to take over the world!
// @author       Zheng Lian
// @match        https://*/*
// @icon
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

// modify this variable to set the interval that you prefer
var interval = 500;
//here to set the Element ID of the button in which you want to click
var id = "btnnjchoose";

function trim(str){
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    return str;
}

/*
	Start running
*/

var btn;

if(trim(id) !== "" && (btn === null | typeof(btn) !== 'object')){
	btn = document.getElementById(id);
}

var regex = new RegExp('[MK]');
for(var i = 0; i <= 20; i++){
    var classId = "dlsggkskbj_ctl0"+i+ "_lblkcjc";
    const obj = document.getElementById(classId);
    console.info(obj.innerHTML);

    if(regex.test(obj.innerHTML) === true){
        //console.info('true');
        var array = document.getElementsByTagName('a');
        for(var j = 0; j < array.length; j++){
            var targetId = 'dlsggkskbj_ctl0'+i+'_lkbchoose';

            if(array[j].id == targetId){
                console.info(array[j].href);
                console.info(array[j].innerHTML);
                array[j].click();

            }else{
                //console.info('false');
            }
        }
    }
    if(document.getElementById("dlsggkskbj_ctl0"+(i+1)+ "_lblkcjc") === null){
        break;
    }
}

setInterval(function() {
		if (btn !== null && typeof(btn) === 'object') {
            console.info("[+] AutoClicker click object: " + btn.innerHTML);
			btn.click();
		}else{
			console.warn('[-] Autoclicker does not find the click object!');
		}
	},interval);
})();
