function graficoBarraAtividade(){
    $( ".svg-content" ).remove();
    document.getElementById('barC').style.display = 'block';
    
    var svg = d3.select("svg"),
    margin = {
        top: 30,
        right: 20,
        bottom: 75,
        left: 50
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1);
    
    var y = d3.scaleLinear()
        .rangeRound([height, 0]);
    
    d3.csv("sharkattack.csv").then(function (data) {
    
        var contadorNado = 0;
        var contadorPesca = 0;
        var contadorMergulho = 0;
        var contadorSurfar = 0;
        var contadorCaminhar = 0;
        var contadorBanho = 0;
        var contadorOutro = 0;
    
        for (var j = 0; j < data.length; j++) {
    
            if (data[j].Activity == "Swimming"){
                contadorNado ++;    
            }
            if (data[j].Activity == "Fishing"){
                contadorPesca ++;    
            }
            if (data[j].Activity == "Diving"){
                contadorMergulho ++;    
            }
            if (data[j].Activity == "Surfing"){
                contadorSurfar ++;    
            }
            if (data[j].Activity == "Wading"){
                contadorCaminhar ++;    
            }
            if (data[j].Activity == "Bathing"){
                contadorBanho ++;    
            }
            else if (data[j].Activity == "Other"){
                contadorOutro ++;    
            }
        }
        var dadosContador = [
            {atividade: 'Nadar', dados: contadorNado},
            {atividade: 'Pescar', dados: contadorPesca},
            {atividade: 'Mergulhar', dados: contadorMergulho},
            {atividade: 'Surfar', dados: contadorSurfar},
            {atividade: 'Caminhar', dados: contadorCaminhar},
            {atividade: 'Banhar', dados: contadorBanho},
            {atividade: 'Outro', dados: contadorOutro},
        ];
    
        x.domain(dadosContador.map(function (d) {
                return d.atividade;
            }));
    
        y.domain([0, d3.max(dadosContador, function (d) {
                    return Number(d.dados);
                })]);
    
        g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .attr("font-weight", "900")
                .selectAll("text")
                    .attr("transform", "translate(-5,5)rotate(-45)")
                    .style("text-anchor", "end")
                    .style("font-size", "11");
                
    
        g.append("g")
                .call(d3.axisLeft(y))
                
                .append("text")
                .transition()
                .attr("fill", "black")
                .attr("font-size", "14")
                .attr("font-weight", "900")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Ocorrências");
    
        g.selectAll(".bar")
                .data(dadosContador)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return x(d.atividade);
                })
                
                .attr("y", function (d) {
                    return y(Number(d.dados));
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(Number(d.dados));
                })
                .append( 'title' )
                .text(function(d){
                    return "Ocorrências:  " + d.dados;
                });;
    });
    }
    