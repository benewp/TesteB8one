carrega = function () {
    chk = "\u2713";
    init = function(){
        $("#produtos").empty();
        $.getJSON( "prod/produtos.json", function( data ) {
            $.each( data, function(item) {
                montaTela(data[item]);
            });
            var botoes = document.querySelectorAll('#button');
            for (var i = 0; i < botoes.length; i++){
                botoes[i].addEventListener('click', function(event){
                    this.classList.add('button2');
                    this.classList.remove('button');
                    this.value = chk +' adicionado';
                });
            }
            var wlis = document.querySelectorAll('#elipse');
            for (var i = 0; i < wlis.length; i++){
                wlis[i].addEventListener('click', function(event){
                    this.classList.add('elipse2');
                    this.classList.remove('elipse');
                    this.children[0].classList.add('vetor2');
                    this.children[0].classList.remove('vetor');
                });
               // wlis[i].addEventListener('mouseover', function(event){
               //     botoes[0].value = 'adicionado';
               // });
            }
        });
    };
    montaTela = function(prod){
        var bhtml = "";
        bhtml +='<div class="card"><div class="image"><div id= "elipse" class="elipse"><div class="vetor"></div></div><div><img src="' + prod.imgUrl + '" /></div></div>';
	    bhtml +='<div class="descr">' + prod.descr + '</div>';
	    bhtml +='<span class="fullPr">' + prod.fullPr + '</span><span class="lowPr">' + prod.lowPr + '</span>';
	    bhtml +='<span class="condPar">' + prod.condPar + '</span>';
	    //bhtml +='<button class="button"><span class="txtBtn">adicionar</span></button></div>';
	    bhtml +='<input id = "button" class="button" type="button" value="adicionar" /></div>';
        $("#produtos").append(bhtml);
    };

    jQuery("produtos").on('click','a.click', function(e){
      e.preventDefault();

    });

    $('#botao').click(function() {
        $('#botao').textContent = 'ADICIONADO';
    });

    //

    
    init();
};
carrega();



