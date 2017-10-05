var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo["a"] = Array(3);
matriz_jogo["b"] = Array(3);
matriz_jogo["c"] = Array(3);

matriz_jogo["a"][0] = 0;
matriz_jogo["a"][1] = 0;
matriz_jogo["a"][2] = 0;

matriz_jogo["b"][0] = 0;
matriz_jogo["b"][1] = 0;
matriz_jogo["b"][2] = 0;

matriz_jogo["c"][0] = 0;
matriz_jogo["c"][1] = 0;
matriz_jogo["c"][2] = 0;

$(document).ready(function(){
	
	$("#iniciar_jogo").click(function(){
	   
	   if( (($('#nome_jogador1').val() == '')) && (($('#nome_jogador2').val() == '')) ) {
		   alert('Verifique os nomes dos jogadores 1 é 2');
		}else{	
			if($('#nome_jogador1').val() == ''){
			   alert('Verifique o nome do jogador 1');
				return false;
			}
			if($('#nome_jogador2').val() == ''){
				alert('Verifique o nome do jogador 2');
				return false;
			}
		}
		
		//Exibir nomes no palco do jogo
		$("#nome_jogador1_palco").html($("#nome_jogador1").val());
		$("#nome_jogador2_palco").html($("#nome_jogador2").val());

		//Mostrar palco do Jogo
			$("#palco_jogo").show();
			$("#pagina_inicial").hide();
	});	

   $(".jogada").click(function(){
   	var objeto_clicado = this.id;
   	$("#" + objeto_clicado).off();
   	jogada(objeto_clicado);
   });

   function jogada(id){
   	var icone = '';
   	var ponto = 0;
      if((rodada % 2) == 1){
      	ponto = -1;
      	icone = 'url("img/marcacao_1.png")'
      }else{
      	ponto = 1;
      	icone = 'url("img/marcacao_2.png")'
      }
      rodada++;
      $("#"+id).css("background-image", icone);
      
 		//Quebra o id com base no "-" e divide em um array de 2 posições com a palavra quebrada
      var linha_coluna = id.split("-");

      matriz_jogo[linha_coluna[0]] [linha_coluna[1] - 1] = ponto;

 		console.log(matriz_jogo);

 		verifica_pontos();
      
      function verifica_pontos(){
      	//verifica horizontal
      	var pontos = 0;
      	for(i=0;i<=2;i++){
      		pontos = pontos + matriz_jogo['a'][i];
      	}
      	verifica_ganhador(pontos);
      	pontos = 0;
   	  	for(i=0;i<=2;i++){
   			pontos = pontos + matriz_jogo['b'][i];
	   	}
   		verifica_ganhador(pontos);
   		pontos = 0;
   	  	for(i=0;i<=2;i++){
   			pontos = pontos + matriz_jogo['c'][i];
   		}
   		verifica_ganhador(pontos);

   		//verifica na vertical
   		
   		for(j=0;j<=2;j++){
   			var pontos = 0;
   			pontos += matriz_jogo['a'][j];
   			pontos += matriz_jogo['b'][j];
   			pontos += matriz_jogo['c'][j];
   			verifica_ganhador(pontos);
   		}

   		//verifica diagonal
   		pontos = 0;
   		pontos = matriz_jogo['a'][0] + matriz_jogo['b'][1] + matriz_jogo['c'][2];
   		verifica_ganhador(pontos);
   		pontos = 0;
   		pontos = matriz_jogo['a'][2] + matriz_jogo['b'][1] + matriz_jogo['c'][0];
   		verifica_ganhador(pontos);
		}

      function verifica_ganhador(pontos){
         var nome1 = $('#nome_jogador1').val();
         var nome2 = $('#nome_jogador2').val();

        	if(pontos == -3){
      		alert("O Jogador " + nome1 + " é o ganhador");
      		$('.jogada').off();
      	}else if(pontos == 3){
   			alert("O Jogador " + nome2 + " é o ganhador");
   			$('.jogada').off();
      	}
      }
   }

});



		