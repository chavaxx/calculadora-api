var x;
var y;




function suma() {
 var n1 = $('#n1').val();
 var n2 = $('#n2').val();
 var url ="http://localhost:8085/Suma/?x=" + n1  + "&y=" + n2;
 console.log('url');
 console.log(url);
 $.getJSON(url,
  function(json) {
    console.log(json);
	$('#resultado').html('<h1>' +json.suma + '</h1>');
	}
  );
}


function resta() {
  var n1 = $('#n1').val();
  var n2 = $('#n2').val();
  var url ="http://localhost:8085/Resta/?x=" + n1  + "&y=" + n2;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function multiplicacion() {
  var n1 = $('#n1').val();
  var n2 = $('#n2').val();
  var url ="http://localhost:8085/Multiplicacion/?x=" + n1  + "&y=" + n2;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function division() {
  var n1 = $('#n1').val();
  var n2 = $('#n2').val();
  var url ="http://localhost:8085/Division/?x=" + n1  + "&y=" + n2;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function pow() {
  var n1 = $('#n1').val();
  var n2 = $('#n2').val();
  var url ="http://localhost:8085/Pow/?x=" + n1  + "&y=" + n2;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function raiz() {
  var n3 = $('#nUnico').val();
  var url ="http://localhost:8085/Raiz/?x=" + n3;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado2').html('<h1>' +json.suma + '</h1>');
   }
   );
 }



function cuadrado() {
  var n3 = $('#nUnico').val();
  var url ="http://localhost:8085/Cuadrado/?x=" + n3;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado2').html('<h1>' +json.suma + '</h1>');
   }
   );
 }

