$(function(){

//ENTRADA

var botoes = $(".botao")
var titulo = $("h1")
var subtitulo = $("#subtitulo")
var icones = $("svg") 
var fundo = $("body")

//PROCESSAMENTO

titulo.click(()=>{

    botoes.css("background-color","black");

    });

titulo.dblclick(()=>{


    fundo.html("<h1> Alterado pelo js </h1>");

    });

subtitulo.click(()=>{

    icones.css("fill","black")

});

});