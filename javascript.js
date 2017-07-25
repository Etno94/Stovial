// JavaScript Document
console.log('asdas');
$(document).ready(function(){
	console.log('asdas');
	$.ajax({
		url: 'http://stovial.xyz/app/historia.php',
		method: 'GET',
		type: 'json',
		success: function(data){
			if(data){
				$("#cuento1").append(data.texto);
			}
		}
		});
});



