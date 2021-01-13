function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#estado").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("cidade").innerHTML = response.localidade;
            //document.getElementById("estado").innerHTML = response.uf;
            //alert(response.logradouro);
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});