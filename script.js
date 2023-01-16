'use strict';
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

 let elems = document.getElementsByTagName('input');
 let par = document.getElementById('test');
 for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
 }

 function func() {
	par.innerHTML = this.value;
}