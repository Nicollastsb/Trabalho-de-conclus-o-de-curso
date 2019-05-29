var anoInicial = 1930;
var anoFinal = 1970;
$(document).ready(function() {
desenharMapaCompleto();
    $('#modalExemplo').modal({
    show: true
})
var $slider = $(".js-range-slider");
$slider.ionRangeSlider({
    skin: "round",
    type: "double",
    min: 1900,
    max: 2017,
    from: 1930,
    to: 1970,
    grid: true,
    onFinish: function dadosAno (data) {
        anoInicial = data.from;
        anoFinal = data.to;
    }
});
}); 

function verificaAtividadeSelecionada(){
    var atividadeSelecionada = document.getElementById("atividadeSelecionada").value;
    return atividadeSelecionada;
}

function verificaFatalidadeSelecionada(){
    var fatalidadeSelecionada = document.getElementById("fatalidadeSelecionada").value;
    return fatalidadeSelecionada;
}

function desenharMapa(){
    $( ".svg-content" ).remove();

    // Inicializar espaço
    var w = 1350;
    var h = 490;
    var color           =   d3.scaleQuantize().range([
        'rgb(158,202,225)', 'rgb(66,146,198)', 'rgb(33,113,181)',
        'rgb(8,81,156)', 'rgb(8,48,107)'
        ]);
        
    var svg = d3.select("div#container")
                .append("svg")
                .style("background-color","rgb(229,245,224)")
                .attr("viewBox", "0 0 " + w + " " + h)
                .classed("svg-content", true);
    var projection = d3.geoNaturalEarth1().translate([w/2, h/2]).scale(170);
    var path = d3.geoPath().projection(projection);

    // Carregar arquivos  
    var worldmap = d3.json("world.geojson");
    var sharkAttack = d3.csv("sharkattack.csv");
        
    Promise.all([worldmap, sharkAttack]).then(function(values){
        var atvEscolhida = verificaAtividadeSelecionada();
        var fatalEscolhida = verificaFatalidadeSelecionada();
        anoInicial;
        anoFinal;
        //Filtros
        for (var i = 0; i < values[0].features.length; i++) {
            var contador    =    0;
            for (var j = 0; j < values[1].length; j++) {
                
                var datas = new Date(values[1][j].Date);
                ano = datas.getFullYear();
               
                if (atvEscolhida == "Allatv"  && fatalEscolhida != "FatalAll"){

                    if (values[0].features[i].properties.name == values[1][j].Country 
                    && values[1][j].Fatal == fatalEscolhida && ano >= anoInicial && ano <= anoFinal) {  
                            contador++;
                    }
                    values[0].features[i].properties.contador = contador;
                    values[0].features[i].properties.atividade = values[1][j].Activity;

                } else if (fatalEscolhida == "FatalAll" && atvEscolhida != "Allatv"){

                    if (values[0].features[i].properties.name == values[1][j].Country && atvEscolhida == values[1][j].Activity 
                    && ano >= anoInicial && ano <= anoFinal) {  
                            contador++;
                    }
                    values[0].features[i].properties.contador = contador;
                    values[0].features[i].properties.atividade = values[1][j].Activity;

                } else if (atvEscolhida == "Allatv" && fatalEscolhida == "FatalAll"){

                    if (values[0].features[i].properties.name == values[1][j].Country && ano >= anoInicial && ano <= anoFinal) {  
                            contador++;
                    }
                    values[0].features[i].properties.contador = contador;
                    values[0].features[i].properties.atividade = values[1][j].Activity;

                } else {

                    if (values[0].features[i].properties.name == values[1][j].Country && atvEscolhida == values[1][j].Activity 
                    && ano >= anoInicial && ano <= anoFinal  && values[1][j].Fatal == fatalEscolhida) {  
                        contador++;
                    }
                    values[0].features[i].properties.contador = contador;
                    values[0].features[i].properties.atividade = values[1][j].Activity;
                }
            }
        }

        color.domain([
            d3.min( values[0].features, function(d){
                return d.properties.contador;
            }),
            d3.max( values[0].features, function(d){
                return d.properties.contador;
            })
        ]);

        svg.selectAll("path")
            .data(values[0].features)
            .enter()
            .append("path")
            .attr("class","continent")
            .attr("d", path)
            .attr("fill", function (d) {
                var num     =      d.properties.contador;
                return num ? color ( num ) : 'white';
            })
            .append( 'title' )
            .text(function(d){
                return "País: " +d.properties.name+ " / Ataques: " +d.properties.contador;
            });
    });
}

function desenharMapaCompleto(){
    var w = 1350;
    var h = 490;
    var color           =   d3.scaleQuantize().range([
        'rgb(158,202,225)', 'rgb(66,146,198)', 'rgb(33,113,181)',
        'rgb(8,81,156)', 'rgb(8,48,107)'
        ]);

    var svg = d3.select("div#container")
                .append("svg")
                .style("background-color","rgb(229,245,224)")
                .attr("viewBox", "0 0 " + w + " " + h)
                .classed("svg-content", true);
    var projection = d3.geoNaturalEarth1().translate([w/2, h/2]).scale(170);
    var path = d3.geoPath().projection(projection);

    // Carregar Dados  
    var worldmap = d3.json("world.geojson");
    var sharkAttack = d3.csv("sharkattack.csv");

    Promise.all([worldmap, sharkAttack]).then(function(values){
        for (var i = 0; i < values[0].features.length; i++) {
            contador    =    0;
            for (var j = 0; j < values[1].length; j++) {
            
                if (values[0].features[i].properties.name == values[1][j].Country) {  
                            contador++;
                    }
                values[0].features[i].properties.contador = contador;
                values[0].features[i].properties.atividade = values[1][j].Activity;
            
            }
        }

        color.domain([
            d3.min( values[0].features, function(d){
                return d.properties.contador;
            }),
            d3.max( values[0].features, function(d){
                return d.properties.contador;
            })
        ]);

        svg.selectAll("path")
            .data(values[0].features)
            .enter()
            .append("path")
            .attr("class","continent")
            .attr("d", path)
            .attr("fill", function (d) {
                var num     =      d.properties.contador;
                return num ? color ( num ) : 'white';
            })
            .append( 'title' )
            .text(function(d){
                return "País: " +d.properties.name+ " / Ataques: " +d.properties.contador;
            });
    });
}