function graficoBarraeuaVsAustralia(){
    $( ".svg-content" ).remove();
    document.getElementById('barC').style.display = 'block';
    
    var svg = d3.select("svg#euaVsAustralia"),
    margin = {
        top: 30,
        right: 20,
        bottom: 105,
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
       var euaContadorMorteNado = 0;
       var euaContadorMorteNadoData = [];
       var euaContadorMortePesca = 0;
       var euaContadorMortePescaData = [];
       var euaContadorMorteMergulho = 0;
       var euaContadorMorteMergulhoData = [];
       var euaContadorMorteSurfar = 0;
       var euaContadorMorteSurfarData = [];
       var euaContadorMorteCaminhar = 0;
       var euaContadorMorteCaminharData = [];
       var euaContadorMorteBanho = 0;
       var euaContadorMorteBanhoData = [];
       var euaContadorMorteOutro = 0;
       var euaContadorMorteOutroData = [];

       var australiaContadorMorteNado = 0;
       var australiaContadorMorteNadoData = [];
       var australiaContadorMortePesca = 0;
       var australiaContadorMortePescaData = [];
       var australiaContadorMorteMergulho = 0;
       var australiaContadorMorteMergulhoData = [];
       var australiaContadorMorteSurfar = 0;
       var australiaContadorMorteSurfarData = [];
       var australiaContadorMorteCaminhar = 0;
       var australiaContadorMorteCaminharData = [];
       var australiaContadorMorteBanho = 0;
       var australiaContadorMorteBanhoData = [];
       var australiaContadorMorteOutro = 0;
       var australiaContadorMorteOutroData = [];

        for (var j = 0; j < data.length; j++) {

            if (data[j].Activity == "Swimming" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteNado ++; 
                euaContadorMorteNadoData.push(data[j].Date);
            }
            else if (data[j].Activity == "Fishing" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMortePesca ++;
                euaContadorMortePescaData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Diving" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteMergulho ++;
                euaContadorMorteMergulhoData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Surfing" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteSurfar ++;
                euaContadorMorteSurfarData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Wading" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteCaminhar ++;
                euaContadorMorteCaminharData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Bathing" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteBanho ++;
                euaContadorMorteBanhoData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Other" && data[j].Fatal == "Y" && data[j].Country == "United States"){
                euaContadorMorteOutro ++;
                euaContadorMorteOutroData.push(data[j].Date);    
            }

            else if (data[j].Activity == "Swimming" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteNado ++;
                australiaContadorMorteNadoData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Fishing" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMortePesca ++;
                australiaContadorMortePescaData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Diving" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteMergulho ++;
                australiaContadorMorteMergulhoData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Surfing" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteSurfar ++;
                australiaContadorMorteSurfarData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Wading" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteCaminhar ++;
                australiaContadorMorteCaminharData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Bathing" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteBanho ++;
                australiaContadorMorteBanhoData.push(data[j].Date);    
            }
            else if (data[j].Activity == "Other" && data[j].Fatal == "Y" && data[j].Country == "Australia"){
                australiaContadorMorteOutro ++;
                australiaContadorMorteOutroData.push(data[j].Date);    
            }
        }
        
        var euaContadorMorteNadoDataNovo    = euaContadorMorteNadoData.join(' ,  ');
        var euaContadorMortePescaDataNovo       = euaContadorMortePescaData.join(' ,  ');
        var euaContadorMorteMergulhoDataNovo    = euaContadorMorteMergulhoData.join(' ,  ');
        var euaContadorMorteSurfarDataNovo      = euaContadorMorteSurfarData.join(' ,  ');
        var euaContadorMorteCaminharDataNovo    = euaContadorMorteCaminharData.join(' ,  ');
        var euaContadorMorteBanhoDataNovo      = euaContadorMorteBanhoData.join(' ,  ');
        var euaContadorMorteOutroDataNovo       = euaContadorMorteOutroData.join(' ,  ');

        var australiaContadorMorteNadoDataNovo     = australiaContadorMorteNadoData.join(' ,  ');
        var australiaContadorMortePescaDataNovo    = australiaContadorMortePescaData.join(' ,  ');
        var australiaContadorMorteMergulhoDataNovo = australiaContadorMorteMergulhoData.join(' ,  ');
        var australiaContadorMorteSurfarDataNovo   = australiaContadorMorteSurfarData.join(' ,  ');
        var australiaContadorMorteCaminharDataNovo = australiaContadorMorteCaminharData.join(' ,  ');
        var australiaContadorMorteBanhoDataNovo    = australiaContadorMorteBanhoData.join(' ,  ');
        var australiaContadorMorteOutroDataNovo    = australiaContadorMorteOutroData.join(' ,  ');

        var dadosContador = [
            {atividade: 'EUA - Nadar', dados: euaContadorMorteNado, data: euaContadorMorteNadoDataNovo},
            {atividade: 'EUA - Pescar', dados: australiaContadorMortePesca, data:euaContadorMortePescaDataNovo},
            {atividade: 'EUA - Mergulhar', dados: australiaContadorMorteMergulho, data:euaContadorMorteMergulhoDataNovo},
            {atividade: 'EUA - Surfar', dados: euaContadorMorteSurfar, data:euaContadorMorteSurfarDataNovo},
            {atividade: 'EUA - Caminhar', dados: euaContadorMorteCaminhar, data:euaContadorMorteCaminharDataNovo},
            {atividade: 'EUA - Banhar', dados: euaContadorMorteBanho, data:euaContadorMorteBanhoDataNovo},
            {atividade: 'EUA - Outro', dados: euaContadorMorteOutro, data:euaContadorMorteOutroDataNovo},

            {atividade: '', dados: 0},

            {atividade: 'Australia - Nadar', dados: australiaContadorMorteNado, data:australiaContadorMorteNadoDataNovo},
            {atividade: 'Australia - Pescar', dados: euaContadorMortePesca, data:australiaContadorMortePescaDataNovo},
            {atividade: 'Australia - Mergulhar', dados: euaContadorMorteMergulho, data:australiaContadorMorteMergulhoDataNovo},
            {atividade: 'Australia - Surfar', dados: australiaContadorMorteSurfar, data:australiaContadorMorteSurfarDataNovo},
            {atividade: 'Australia - Caminhar', dados: australiaContadorMorteCaminhar, data:australiaContadorMorteCaminharDataNovo},
            {atividade: 'Australia - Banhar', dados: australiaContadorMorteBanho, data:australiaContadorMorteBanhoDataNovo},
            {atividade: 'Australia - Outro', dados: australiaContadorMorteOutro, data:australiaContadorMorteOutroDataNovo},
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
                .attr("font-weight", "800")
                .selectAll("text")
                    .attr("transform", "translate(-5,5)rotate(-45)")
                    .style("text-anchor", "end")
                    .style("font-size", "10");
    
        g.append("g")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("font-size", "15")
                .attr("font-weight", "900")
                .transition()
                .attr("fill", "#000")
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
                    return "Ocorrências fatais:  " + d.dados + "  Datas das ocorrências:  " + d.data;
                });;
    });
}