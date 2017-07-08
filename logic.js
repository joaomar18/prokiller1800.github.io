<<<<<<< HEAD
﻿var tipoinstalacao= document.getElementById("tipoinst");
var tipocarga= document.getElementById("tipocar");
var tipocarga1= document.getElementById("tipocar1");
var resultado= document.getElementById("secao");
var resultadocorrente = document.getElementById("correnteprot");
var protecao = document.getElementById("tipoprot");
var condutor = document.getElementById("tipocond");
var isolamento = document.getElementById("tipoisol");
var modoinstalacao = document.getElementById("mododeinst");


var tempsolo= document.getElementById("temp_solo");
var camadas= document.getElementById("camadas_cabos");
var grupocabos= document.getElementById("grupo_cabos");
var resistividade_solo= document.getElementById("resistividade_termica");


var tempambiente = document.getElementById("temp");



var com_neutro = document.getElementById("resultado_neutro");

var secao_neutro = document.getElementById("secaoneutro");


                                                       
var cabosparalelos = document.getElementById("cabos");   //Para metodos de referencia influenciados por temperatura ambiente
var cabosparalelos1 = document.getElementById("cabos1"); //Para metodos de referencia não influenciados por temperatura ambiente






var comprimento = document.getElementById("co");

var verificacaopa= document.getElementById("selectpa");
var verificacaopu= document.getElementById("selectpu");

var pacv= document.getElementById("selectpacv");
var pakw= document.getElementById("selectpakw");

var pucv= document.getElementById("selectpucv");
var pukw= document.getElementById("selectpukw");


var potencia_ativa_cv= document.getElementById("pacv"); //Potências Ativas Absorvidas
var potencia_ativa_kw= document.getElementById("pakw");

var potencia_util_cv= document.getElementById("pucv");
var potencia_util_kw= document.getElementById("pukw");

var rendimento= document.getElementById("rend");
var cosfi= document.getElementById("fp");



var tabela = document.getElementById("valores"); //Para motores
var tabela1 = document.getElementById("valores1"); //Para iluminação e outras cargas

var com_estrela_triangulo = document.getElementById("margintop1");
var sem_estrela_triangulo = document.getElementById("margintop");


var considerar = document.getElementById("considerar"); //Para metodos de referencia influenciados por temperatura ambiente
var considerar1 = document.getElementById("considerar1"); //Para metodos de referencia não influenciados por temperatura ambiente
var considerar2 = document.getElementById("considerar2");

var valordireto = document.getElementById("1"); // Para utilizar quando se pretende verificar a proteção com uma proteção existente.
var valordireto1 = document.getElementById("2"); // Para utilizar quando se pretende verificar a proteção com uma proteção existente.
var verificaovalordireto= document.getElementById("vc"); //Alternar entre calcular proteção e verificar proteção feita por uma existente.
var tabelaaumentar= document.getElementById("tabela1-5"); // Aumentar uma tabela existente.
var selectordisjuntor= document.getElementById("11"); //Valor do disjuntor existente.
var selectorfusivel= document.getElementById("22"); //Valor do fusivel existente.


var tipo_cabo_mono= document.getElementById("mono");

var tipo_cabo_multi= document.getElementById("multi");

var tipo_cabo_vertical= document.getElementById("vertical");

var tipo_cabo_horizontal= document.getElementById("horizontal");

var tipo_inst_esteira= document.getElementById("esteira"); 

var tipo_inst_triangulo= document.getElementById("triangulo");

var tipo_afastamento_afastados= document.getElementById("afastados");

var tipo_afastamento_nao_afastados= document.getElementById("naoafastados");


setInterval(refresh, 1500);

//Função Refresh
function refresh(){

var tipoi = Number(Number(tipoinstalacao.value));

    if(tipoi==0){
    com_estrela_triangulo.style.display='none';
    sem_estrela_triangulo.style.display='block';
}
   else{
    com_estrela_triangulo.style.display='block';
    sem_estrela_triangulo.style.display='none';
    }


    if(verificacaopa.checked==true){
        pucv.disabled=true;
        pukw.disabled=true;
        potencia_util_cv.disabled=true;
        potencia_util_kw.disabled=true;
        pucv.checked=false;
        pukw.checked=false;
        potencia_util_cv.value="";
        potencia_util_kw.value="";
        rendimento.value="";
        rendimento.disabled=true;
        pacv.disabled=false;
        pakw.disabled=false;

    }


    if(pacv.checked==true && verificacaopu.checked==false){
        potencia_ativa_cv.disabled=false;
        potencia_ativa_kw.disabled=true;
        potencia_ativa_kw.value="";
    }
    if(pakw.checked==true && verificacaopu.checked==false){
        potencia_ativa_cv.disabled=true;
        potencia_ativa_kw.disabled=false;
        potencia_ativa_cv.value="";
    }
    if(verificacaopu.checked==true){
        pacv.disabled=true;
        pakw.disabled=true;
        potencia_ativa_cv.disabled=true;
        potencia_ativa_kw.disabled=true;
        pacv.checked=false;
        pakw.checked=false;
        potencia_ativa_cv.value="";
        potencia_ativa_kw.value="";
        pucv.disabled=false;
        pukw.disabled=false;
    }
    if(pucv.checked==true && verificacaopa.checked==false){
        potencia_util_cv.disabled=false;
        potencia_util_kw.disabled=true;
        rendimento.disabled=false;
        potencia_util_kw.value="";
    }
    if(pukw.checked==true && verificacaopa.checked==false){
        potencia_util_cv.disabled=true;
        potencia_util_kw.disabled=false;
        rendimento.disabled=false;
        potencia_util_cv.value="";
    }

var tabela_fatores_correcao= document.getElementById("tabela5");

var tipoc = Number(Number(tipocarga.value));
var protec = Number(Number(protecao.value));
var modinst = Number(Number(modoinstalacao.value));




if(modinst==0 || modinst==1 || modinst==2){
//tabela_fatores_correcao.style.height="150px";
considerar1.style.display='block';
}
else{
considerar1.style.display='none';
}

if(modinst==3 || modinst==4 || modinst==5 || modinst==6 || modinst==7 || modinst==8 || modinst==9 || modinst==10 || modinst==11 || modinst==12 || modinst==13 || modinst==14 || modinst==15 || modinst==16){
//tabela_fatores_correcao.style.height="200px";
considerar.style.display='block';
}
else{
considerar.style.display='none';
}
if(modinst==17 || modinst==18 || modinst==19){
//tabela_fatores_correcao.style.height="250px";
considerar2.style.display='block';
}
else{
considerar2.style.display='none';
}


//Botoes


var tipo_cabo_mono= document.getElementById("mono");

var tipo_cabo_multi= document.getElementById("multi");

var tipo_cabo_vertical= document.getElementById("vertical");

var tipo_cabo_horizontal= document.getElementById("horizontal");

var tipo_inst_esteira= document.getElementById("esteira"); 

var tipo_inst_triangulo= document.getElementById("triangulo");

var tipo_afastamento_afastados= document.getElementById("afastados");

var tipo_afastamento_nao_afastados= document.getElementById("naoafastados");



//Tabelas

var tabela_dados_cabos= document.getElementById("fatoresmodo");

var tabela_dados_inst= document.getElementById("disposicao");

var tabela_dados_afastadosoun= document.getElementById("afastadosoun");

var tabela_dados_vertouhor= document.getElementById("vertouhor");


//Metodo de referencia E, F , G

if(modinst==9 || modinst==10 || modinst==11 || modinst==12){

tabela_dados_cabos.style.display='block';
tipo_cabo_mono.style.display='block';
tipo_cabo_multi.style.display='block';


if((tipoi==1 || tipoi==2) && tipo_cabo_mono.checked==true){

tabela_dados_inst.style.display='block';
tipo_inst_esteira.style.display='block';
tipo_inst_triangulo.style.display='block';


if(tipo_inst_esteira.checked==true){

tabela_dados_afastadosoun.style.display='block';
tipo_afastamento_afastados.style.display='block';
tipo_afastamento_nao_afastados.style.display='block';

if(tipo_afastamento_afastados.checked==true){
tabela_dados_vertouhor.style.display='block';
tipo_cabo_horizontal.style.display='block';
tipo_cabo_vertical.style.display='block';

}
else{
tabela_dados_vertouhor.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.checked=false;
tipo_cabo_vertical.checked=false;
}
}

else{
tabela_dados_afastadosoun.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
}
}
else{
tabela_dados_inst.style.display='none';
tabela_dados_afastadosoun.style.display='none';
tabela_dados_vertouhor.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_inst_esteira.style.display='none';
tipo_inst_triangulo.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_cabo_vertical.checked=false;
tipo_cabo_horizontal.checked=false;
tipo_inst_esteira.checked=false;
tipo_inst_triangulo.checked=false;
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_mono.style.display='block';
tipo_cabo_multi.style.display='block';
}
}

else{

tabela_dados_cabos.style.display='none';
tabela_dados_inst.style.display='none';
tabela_dados_afastadosoun.style.display='none';
tabela_dados_vertouhor.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_inst_esteira.style.display='none';
tipo_inst_triangulo.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_cabo_vertical.checked=false;
tipo_cabo_horizontal.checked=false;
tipo_inst_esteira.checked=false;
tipo_inst_triangulo.checked=false;
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_mono.style.display='none';
tipo_cabo_multi.style.display='none';
tipo_cabo_mono.checked=false;
tipo_cabo_multi.checked=false;
}





//Mudança de Ecras de Secção

var tabela_tambem_aumentar = document.getElementById("tabela8");


if(tipoi==2){
com_neutro.style.display='block';
//tabela_tambem_aumentar.style.height="350px";
}
else{
com_neutro.style.display='none';
//tabela_tambem_aumentar.style.height="250px";
secao_neutro.value="";
}


//Proteçoes

if(verificaovalordireto.checked===true){

    if(protec==0){
    
    valordireto.style.display ='block';
//    tabelaaumentar.style.height= "200px";
}
    else{
    valordireto.style.display ='none';
    }
    if(protec==1){
    valordireto1.style.display = 'block';
//    tabelaaumentar.style.height= "200px";
}
    else{
    valordireto1.style.display ='none';
    }
}

else{
    valordireto.style.display = 'none';
    valordireto1.style.display = 'none';
//    tabelaaumentar.style.height= "130px";
}
}
//Fim Função Refresh


//Lógica

function calcular(){


var pa_cv = Number(Number(potencia_ativa_cv.value));
var pa_kw = Number(Number(potencia_ativa_kw.value));
var pu_cv = Number(Number(potencia_util_cv.value));
var pu_kw = Number(Number(potencia_util_kw.value));

var fatorp = Number(Number(cosfi.value)); 
var rendi = Number(Number(rendimento.value)); 
var tipoc = Number(Number(tipocarga.value));
var tipoc1 = Number(Number(tipocarga1.value));
var tipoi = Number(Number(tipoinstalacao.value));
var protec = Number(Number(protecao.value));
var modinst = Number(Number(modoinstalacao.value));
var valorrendimento=0;
var valor_fator_potencia=0;

var potencia_inicial=0;
var potencia_absorvida=0;

var corrente_constante=0;
var corrente_serviço=0;
var corrente_arranque=0;

var valor_carga;


if(tipoi==0){
valor_carga=tipoc;    
}
else{
valor_carga=tipoc1; 
}




if(pukw.checked==true || pucv.checked==true){
valorrendimento=rendi/100;
}
if(pakw.checked==true || pacv.checked==true){
valorrendimento=1;
}
if(valorrendimento==0){
resultadocorrente.value="Insira Dados!";
}
if(valorrendimento>1 || valorrendimento<0){
resultadocorrente.value="Rendimento inválido!";
valorrendimento=0;
}


if(valorrendimento>0){

if(pukw.checked==true){
potencia_absorvida= (pu_kw*1000)/valorrendimento;
}
if(pucv.checked==true){
potencia_absorvida= (pu_cv*735)/valorrendimento;
}
if(pakw.checked==true){
potencia_absorvida= (pa_kw*1000)/valorrendimento;
}
if(pacv.checked==true){
potencia_absorvida= (pa_cv*735)/valorrendimento;
}
if(potencia_absorvida==0){
resultadocorrente.value="Insira Dados!";
}
if(potencia_absorvida<0){
resultadocorrente.value="Potência inválida!";
}
}

if(fatorp>0 && fatorp<=1){
valor_fator_potencia=fatorp;
}
if(fatorp==0){
resultadocorrente.value="Insira Dados!";
}
if(fatorp<0 || fatorp>1){
resultadocorrente.value="Fator de Potência inválido!";
}


if(potencia_absorvida>0 && valor_fator_potencia>0){

if(tipoi==0){
corrente_constante=potencia_absorvida/(230*fatorp);
}
if(tipoi==1 || tipoi==2){
corrente_constante=potencia_absorvida/(230*3*fatorp);
}
}

if(corrente_constante>0){

if(valor_carga==0){
corrente_serviço=((6*corrente_constante)/3)+corrente_constante;

}
if(valor_carga==1){
corrente_serviço=((3*corrente_constante)/3)+corrente_constante;

}

if(valor_carga==2){
corrente_serviço=((2.21*corrente_constante)/3)+corrente_constante;

}
if(valor_carga==3){
corrente_serviço=corrente_constante;

}
if(valor_carga==4){
corrente_serviço=corrente_constante;
}
}

// Seleção de Proteções

var valor_disjuntor_existente= Number(Number(selectordisjuntor.value));
var valor_fusivel_existente= Number(Number(selectorfusivel.value));
var protec = Number(Number(protecao.value));

var valor_disjuntor;
var valor_fusivel;
var valor_protecao=0;
var correnteconvencional=0;

if(verificaovalordireto.checked===true){

if(protec==0){

if(corrente_serviço<valor_disjuntor_existente && corrente_serviço>0){

valor_disjuntor= valor_disjuntor_existente;
valor_protecao= valor_disjuntor;
resultadocorrente.value=valor_protecao;

correnteconvencional=Math.round(1.45*valor_disjuntor);
}
if(corrente_serviço>valor_disjuntor_existente){

resultadocorrente.value="Proteção demasiado baixa!";
}

}

if(protec==1){


if(corrente_serviço<valor_fusivel_existente && corrente_serviço>0){

valor_fusivel= valor_fusivel_existente;
valor_protecao= valor_fusivel;
resultadocorrente.value=valor_protecao;

        if(valor_fusivel>0 && valor_fusivel<=4){
            correnteconvencional=Math.round(2.1*valor_fusivel);    
        }
        if(valor_fusivel>4 && valor_fusivel<=16){
            correnteconvencional=Math.round(1.9*valor_fusivel);    
        }
        if(valor_fusivel>16){
            correnteconvencional=Math.round(1.6*valor_fusivel);   
        }

}
if(corrente_serviço>valor_fusivel_existente){

resultadocorrente.value="Proteção demasiado baixa!";
}
}
}
else{
if (protec==0){

if(corrente_serviço>0){

if(corrente_serviço>0 && corrente_serviço<=10){
    valor_disjuntor=10;
    correnteconvencional=14;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>10 && corrente_serviço<=16){
    valor_disjuntor=16;
    correnteconvencional=23;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>16 && corrente_serviço<=20){
    valor_disjuntor=20;
    correnteconvencional=29;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>20 && corrente_serviço<=25){
    valor_disjuntor=25;
    correnteconvencional=36;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>25 && corrente_serviço<=32){
    valor_disjuntor=32;
    correnteconvencional=46;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>32 && corrente_serviço<=40){
    valor_disjuntor=40;
    correnteconvencional=58;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>40 && corrente_serviço<=50){
    valor_disjuntor=50;
    correnteconvencional=72;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>50 && corrente_serviço<=63){
    valor_disjuntor=63;
    correnteconvencional=91;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>63 && corrente_serviço<=80){
    valor_disjuntor=80;
    correnteconvencional=116;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>80 && corrente_serviço<=100){
    valor_disjuntor=100;
    correnteconvencional=145;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>100 && corrente_serviço<=125){
    valor_disjuntor=125;
    correnteconvencional=181;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>125){
    resultadocorrente.value="Fora da Gama!";
}

valor_protecao=valor_disjuntor;

}
}

if (protec==1){

if(corrente_serviço>0){

if(corrente_serviço>0 && corrente_serviço<=2){
    valor_fusivel=2;
    correnteconvencional=4;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>2 && corrente_serviço<=4){
    valor_fusivel=4;
    correnteconvencional=8;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>4 && corrente_serviço<=6){
    valor_fusivel=6;
    correnteconvencional=11;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>6 && corrente_serviço<=8){
    valor_fusivel=8;
    correnteconvencional=15;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>8 && corrente_serviço<=10){
    valor_fusivel=10;
    correnteconvencional=19;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>10 && corrente_serviço<=12){
    valor_fusivel=12;
    correnteconvencional=23;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>12 && corrente_serviço<=16){
    valor_fusivel=16;
    correnteconvencional=30;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>16 && corrente_serviço<=20){
    valor_fusivel=20;
    correnteconvencional=32;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>20 && corrente_serviço<=25){
    valor_fusivel=25;;
    correnteconvencional=40;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>25 && corrente_serviço<=32){
    valor_fusivel=32;
    correnteconvencional=51;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>32 && corrente_serviço<=40){
    valor_fusivel=40;
    correnteconvencional=64;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>40 && corrente_serviço<=50){
    valor_fusivel=50;
    correnteconvencional=80;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>50 && corrente_serviço<=63){
    valor_fusivel=63;
    correnteconvencional=101;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>63 && corrente_serviço<=80){
    valor_fusivel=80;
    correnteconvencional=128;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>80 && corrente_serviço<=100){
    valor_fusivel=100;
    correnteconvencional=160;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>100 && corrente_serviço<=125){
    valor_fusivel=125;
    correnteconvencional=200;
}
if(corrente_serviço>125 && corrente_serviço<=160){
    valor_fusivel=160;
    correnteconvencional=256;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>160 && corrente_serviço<=200){
    valor_fusivel=200;
    correnteconvencional=320;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>200 && corrente_serviço<=250){
    valor_fusivel=250;
    correnteconvencional=400;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>250 && corrente_serviço<=315){
    valor_fusivel=315;
    correnteconvencional=504;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>315 && corrente_serviço<=400){
    valor_fusivel=400;
    correnteconvencional=640;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>400 && corrente_serviço<=500){
    valor_fusivel=500;
    correnteconvencional=800;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>500 && corrente_serviço<=630){
    valor_fusivel=630;
    correnteconvencional=1008;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>630 && corrente_serviço<=800){
    valor_fusivel=800;
    correnteconvencional=1280;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>800 && corrente_serviço<=1000){
    valor_fusivel=1000;
    correnteconvencional=1600;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>1000){
    resultadocorrente.value="Fora da Gama!";
}


valor_protecao=valor_fusivel;

}
}
}

// Fim da Selecão das Proteções******************************************************************************

//Correntes Admissíveis**************************************************************************************

var grupos_cabos=Number(Number(grupocabos.value));
var camadas_cabos=Number(Number(camadas.value));
var resistividade_solo1 = Number(Number(resistividade_solo.value));
var temp_solo=Number(Number(tempsolo.value));


var cond = Number(Number(condutor.value));
var isol = Number(Number(isolamento.value));
var modinst = Number(Number(modoinstalacao.value));
var tempera = Number(Number(tempambiente.value)); 
var cabospara = Number(Number(cabosparalelos.value));
var cabospara1 = Number(Number(cabosparalelos1.value));
var cabos_paralelos;

//Fatores para cabos solo

var fatorcorrecao_camadas_cabos=0;
var fatorcorrecao_grupo_cabos=0;
var fatorcorrecao_resistividade_solo=0;
var fatorcorrecao_temp_solo=0;




var fatorcorrecaotemp=0;
var numerocircuitos;
var fatorcorrecaocircuitos=0;
var novovalorsecao;



//Fatores_Correcao_Cabos_Paralelos_e_Condutas_Paralelas*****************************************************


if(modinst==0 || modinst==1 || modinst==2){
    cabos_paralelos=cabospara1;
}
if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst== 8 || modinst== 3 || modinst== 5 || modinst== 4 || modinst== 13 || modinst== 14 || modinst== 9 || modinst== 11 || modinst== 10 || modinst== 12){
    cabos_paralelos=cabospara;
}




var verdadeiro_camadas=true;
    
if(camadas_cabos%1==0){
    verdadeiro_camadas=false;
}


var verdadeiro_grupos=true;
    
if(grupos_cabos%1==0){
    verdadeiro_grupos=false;
}

var verdadeiro_cabos_paralelos=true;
    
if(cabos_paralelos%1==0){
verdadeiro_cabos_paralelos=false;
}



if(valor_protecao>0){

//Fatores_Correcao_Instalações_Enterradas***************************************************************

//Fatores correção Temperatura_Solo

if(modinst==17 || modinst==18 || modinst==19){
if(isol==0){

    if(temp_solo<=10){
        fatorcorrecao_temp_solo=1.10;
    }
    
    if(temp_solo<=15 && temp_solo>10){
        fatorcorrecao_temp_solo=1.05;
    }
    if(temp_solo<=20 && temp_solo>15){
        fatorcorrecao_temp_solo=1;
    }
    if(temp_solo<=25 && temp_solo>20){
        fatorcorrecao_temp_solo=0.95;
    }
    if(temp_solo<=30 && temp_solo>25){
        fatorcorrecao_temp_solo=0.89;
    }
    if(temp_solo<=35 && temp_solo>30){
        fatorcorrecao_temp_solo=0.84;
    }
    if(temp_solo<=40 && temp_solo>35){
        fatorcorrecao_temp_solo=0.77;
    }
        if(temp_solo<=45 && temp_solo>40){
        fatorcorrecao_temp_solo=0.71;
    }
    if(temp_solo<=50 && temp_solo>45){
        fatorcorrecao_temp_solo=0.63;
    }
    if(temp_solo<=55 && temp_solo>50){
        fatorcorrecao_temp_solo=0.55;
    }
    if(temp_solo<=60 && temp_solo>55){
        fatorcorrecao_temp_solo=0.45;
    }
    if(temp_solo>60){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
    }
}

if(isol==1){

        if(temp_solo<=10){
        fatorcorrecao_temp_solo=1.07;
    }
    
        if(temp_solo<=15 && temp_solo>10){
        fatorcorrecao_temp_solo=1.04;
    }
        if(temp_solo<=20 && temp_solo>15){
        fatorcorrecao_temp_solo=1;
    }
        if(temp_solo<=25 && temp_solo>20){
        fatorcorrecao_temp_solo=0.96;
    }
        if(temp_solo<=30 && temp_solo>25){
        fatorcorrecao_temp_solo=0.93;
    }
        if(temp_solo<=35 && temp_solo>30){
        fatorcorrecao_temp_solo=0.89;
    }
        if(temp_solo<=40 && temp_solo>35){
        fatorcorrecao_temp_solo=0.85;
    }
        if(temp_solo<=45 && temp_solo>40){
        fatorcorrecao_temp_solo=0.8;
    }
        if(temp_solo<=50 && temp_solo>45){
        fatorcorrecao_temp_solo=0.76;
    }
        if(temp_solo<=55 && temp_solo>50){
        fatorcorrecao_temp_solo=0.71;
    }
        if(temp_solo<=60 && temp_solo>55){
        fatorcorrecao_temp_solo=0.65;
    }
        if(temp_solo<=65 && temp_solo>60){
        fatorcorrecao_temp_solo=0.6;
    }
        if(temp_solo<=70 && temp_solo>65){
        fatorcorrecao_temp_solo=0.53;
    }
        if(temp_solo<=75 && temp_solo>70){
        fatorcorrecao_temp_solo=0.46;
    }
        if(temp_solo<=80 && temp_solo>75){
        fatorcorrecao_temp_solo=0.38;
    }
        if(temp_solo>80){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}
}
else{
fatorcorrecao_temp_solo=1;
}

//Fim Fatores correção Temperatura_Solo


//Fatores_Correcao_Camadas_cabos

if(modinst==17 || modinst==18 || modinst== 19){
    
    if(camadas_cabos==0){
    resultado.value="Insira número de camadas!";
    secao_neutro.value=resultado.value;
    }
    if(camadas_cabos==1){
    fatorcorrecao_camadas_cabos=1;
    }
    if(camadas_cabos==2){
    fatorcorrecao_camadas_cabos=0.8;
    }
    if(camadas_cabos==3){
    fatorcorrecao_camadas_cabos=0.73;
    }
    if(camadas_cabos==4 || camadas_cabos==5){
    fatorcorrecao_camadas_cabos=0.7;
    }
    if(camadas_cabos==6 || camadas_cabos==7 || camadas_cabos==8){
    fatorcorrecao_camadas_cabos=0.68;
    }
    if(camadas_cabos>=9){
    fatorcorrecao_camadas_cabos=0.66;
    }
    if(verdadeiro_camadas==true || camadas_cabos<0){
    fatorcorrecao_camadas_cabos=0;
    resultado.value="Camadas de cabos inválidas!";
    secao_neutro.value=resultado.value;
    }
}
else{
fatorcorrecao_camadas_cabos=1;
}

//Fim Fatores_Correcao_Camadas_Cabos

//Cabos Paralelos (Grupos Cabos)

if(modinst==17 || modinst==18 || modinst== 19){

    if(grupos_cabos==0){
    fatorcorrecao_grupo_cabos=1;
    }
    if(grupos_cabos==1){
    fatorcorrecao_grupo_cabos=0.85;
    }
    if(grupos_cabos==2){
    fatorcorrecao_grupo_cabos=0.78;
    }
    if(grupos_cabos==3 || grupos_cabos==4 ){
    fatorcorrecao_grupo_cabos=0.72;
    }
    if(grupos_cabos==5 || grupos_cabos==6 || grupos_cabos==7){
    fatorcorrecao_grupo_cabos=0.62;
    }
    if(grupos_cabos>=8){
    fatorcorrecao_grupo_cabos=0.55;
    }
    if(verdadeiro_grupos==true || grupos_cabos<0){
    fatorcorrecao_grupo_cabos=0;
    resultado.value="Cabos paralelos inválidos!";
    secao_neutro.value=resultado.value;
    }
}
else{
fatorcorrecao_grupo_cabos=1;
}

//Fim Cabos Paralelos (Grupos Cabos)

//Resistividade do Solo

if(modinst==17 || modinst==18 || modinst==19){

    if(resistividade_solo1==0){
    fatorcorrecao_resistividade_solo=1.25;
    }
    if(resistividade_solo1==1){
    fatorcorrecao_resistividade_solo=1.21;
    }
    if(resistividade_solo1==2){
    fatorcorrecao_resistividade_solo=1.13;
    }
    if(resistividade_solo1==3){
    fatorcorrecao_resistividade_solo=1.05;
    }
    if(resistividade_solo1==4){
    fatorcorrecao_resistividade_solo=1;
    }
    if(resistividade_solo1==5){
    fatorcorrecao_resistividade_solo=0.86;
    }
    if(resistividade_solo1==6){
    fatorcorrecao_resistividade_solo=0.65;
    }
}
else{
fatorcorrecao_resistividade_solo=1;
}

//Fim Resistividade do Solo

//FIM_Fatores_Correcao_Instalações_Enterradas***************************************************************

//Fatores_Cabos_Paralelos

//Fatores_Correcao_Cabos_Paralelos_Metodo_Referencia_A_e_A2

if(modinst==0 || modinst==1 || modinst==2){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.7;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.65;    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.6;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.57;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.54;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.52;
    }
    if(cabos_paralelos==8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.5;
    }
    if(cabos_paralelos<=11 && cabos_paralelos>8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.45;
    }
    if(cabos_paralelos<=15 && cabos_paralelos>11){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.41;
    }
    if(cabos_paralelos>15){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.38;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_Referencia_B

if(modinst==3 || modinst==5 || modinst== 4 || modinst== 13 || modinst== 14){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.85;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75;    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.71;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.7;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_C_Teto
if(modinst==7 || modinst==8){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.95;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.81;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.68; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.66;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.64;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.63;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.62;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.61;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_C_Paredes

if(modinst==6 || modinst== 15 || modinst== 16){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.85;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.71;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.70;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}

//Fatores_Correcao_Cabos_Paralelos_Metodo_E_F(Caminhos de Cabos Perfurados e Derivados)

if(modinst==9 || modinst== 11){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.88;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.82;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.77; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}

//Fatores_Correcao_Cabos_Paralelos_Metodo_E_F(Consolas, Escadas e Derivados)

if(modinst==10 || modinst== 12){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.87;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.82;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.78;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.78;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}
if(modinst==17 || modinst==18 || modinst== 19){
fatorcorrecaocircuitos=1;
}

//FIM_FATORES_CORRECAO_CABOS_PARALELOS****************************************************

//FATORES_CORRECAO_TEMPERATURA_AMBIENTE******************************************************

if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst==8 || modinst==3 || modinst== 5 || modinst==4 || modinst== 13 || modinst== 14 || modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

if(isol==0){

    if(tempera<=10){
        fatorcorrecaotemp=1.22;
    }
    
    if(tempera<=15 && tempera>10){
        fatorcorrecaotemp=1.17;
    }
    if(tempera<=20 && tempera>15){
        fatorcorrecaotemp=1.12;
    }
    if(tempera<=25 && tempera>20){
        fatorcorrecaotemp=1.06;
    }
    if(tempera<=30 && tempera>25){
        fatorcorrecaotemp=1;
    }
    if(tempera<=35 && tempera>30){
        fatorcorrecaotemp=0.94;
    }
    if(tempera<=40 && tempera>35){
        fatorcorrecaotemp=0.87;
    }
        if(tempera<=45 && tempera>40){
        fatorcorrecaotemp=0.79;
    }
    if(tempera<=50 && tempera>45){
        fatorcorrecaotemp=0.71;
    }
    if(tempera<=55 && tempera>50){
        fatorcorrecaotemp=0.61;
    }
    if(tempera<=60 && tempera>55){
        fatorcorrecaotemp=0.5;
    }
    if(tempera>60){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}

if(isol==1){

    if(tempera<=10){
        fatorcorrecaotemp=1.15;
    }
    
    if(tempera<=15 && tempera>10){
        fatorcorrecaotemp=1.12;
    }
        if(tempera<=20 && tempera>15){
        fatorcorrecaotemp=1.08;
    }
        if(tempera<=25 && tempera>20){
        fatorcorrecaotemp=1.04;
    }
        if(tempera<=30 && tempera>25){
        fatorcorrecaotemp=1;
    }
        if(tempera<=35 && tempera>30){
        fatorcorrecaotemp=0.96;
    }
        if(tempera<=40 && tempera>35){
        fatorcorrecaotemp=0.91;
    }
        if(tempera<=45 && tempera>40){
        fatorcorrecaotemp=0.87;
    }
        if(tempera<=50 && tempera>45){
        fatorcorrecaotemp=0.82;
    }
        if(tempera<=55 && tempera>50){
        fatorcorrecaotemp=0.76;
    }
        if(tempera<=60 && tempera>55){
        fatorcorrecaotemp=0.71;
    }
        if(tempera<=65 && tempera>60){
        fatorcorrecaotemp=0.65;
    }
        if(tempera<=70 && tempera>65){
        fatorcorrecaotemp=0.58;
    }
        if(tempera<=75 && tempera>70){
        fatorcorrecaotemp=0.5;
    }
        if(tempera<=80 && tempera>75){
        fatorcorrecaotemp=0.41;
    }
        if(tempera>80){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}
}
else{
fatorcorrecaotemp=1;
}




var fatores_correcao;

fatores_correcao=fatorcorrecao_camadas_cabos*fatorcorrecao_resistividade_solo*fatorcorrecao_temp_solo*fatorcorrecao_grupo_cabos*fatorcorrecaotemp*fatorcorrecaocircuitos;


var valordecorrenteadmissivel=0;
var valordecorrenteadmissivel=Number((correnteconvencional)/(1.45*fatores_correcao));
var valorsecaotermica=0;

if(fatores_correcao==0){
valordecorrenteadmissivel=0;
}

// Modo de Instalação ---> Método de Referência
// 0-->A
// 1-->C
// 4-->A2
// 5-->B
// 6-->B2
// 7-->E, F ou G
// 8-->D
// 9-->D
//10-->E, F ou G


if(valordecorrenteadmissivel>0){

//Método de Referência ------> A************************************************************************

if(modinst==0 || modinst==1){

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>14.5 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=34){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=61){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=80){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=99){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=119){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=151){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>151 && valordecorrenteadmissivel <=182){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=210){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=240){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>240 && valordecorrenteadmissivel <=273){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=320){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>320 && valordecorrenteadmissivel <=367){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>367){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }
    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>15 && valordecorrenteadmissivel <=20){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=26){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=48){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=63){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=77){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=93){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>93 && valordecorrenteadmissivel <=118){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=142){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>142 && valordecorrenteadmissivel <=164){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=189){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>189 && valordecorrenteadmissivel <=215){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>215 && valordecorrenteadmissivel <=252){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>252 && valordecorrenteadmissivel <=289){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>289){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    
    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>13.5 && valordecorrenteadmissivel <=18){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=31){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=42){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=56){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>56 && valordecorrenteadmissivel <=73){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=89){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=108){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=136){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=164){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=188){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=216){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=245){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=286){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>286 && valordecorrenteadmissivel <=328){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>328){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>14 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=43){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=57){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=70){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=84){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=107){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=129){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>129 && valordecorrenteadmissivel <=149){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=170){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>170 && valordecorrenteadmissivel <=194){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>194 && valordecorrenteadmissivel <=227){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=261){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>261){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>19 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=45){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=61){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=81){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>81 && valordecorrenteadmissivel <=106){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>106 && valordecorrenteadmissivel <=131){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=158){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=278){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>278 && valordecorrenteadmissivel <=318){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>318 && valordecorrenteadmissivel <=362){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>362 && valordecorrenteadmissivel <=424){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=486){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>486){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=20){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=27){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=35){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=48){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=64){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>64 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=125){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=158){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=191){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>191 && valordecorrenteadmissivel <=220){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>220 && valordecorrenteadmissivel <=253){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=288){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>288 && valordecorrenteadmissivel <=338){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>338 && valordecorrenteadmissivel <=387){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>387){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>17 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=40){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=73){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=95){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>95 && valordecorrenteadmissivel <=117){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=141){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>141 && valordecorrenteadmissivel <=179){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=216){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=249){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>249 && valordecorrenteadmissivel <=285){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>285 && valordecorrenteadmissivel <=324){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>324 && valordecorrenteadmissivel <=380){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>380 && valordecorrenteadmissivel <=435){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>435){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=58){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=76){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=94){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=113){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>113 && valordecorrenteadmissivel <=142){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>142 && valordecorrenteadmissivel <=171){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=197){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=226){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=256){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>256 && valordecorrenteadmissivel <=300){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=344){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>387){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


}

//Metodo de Referência ------> C***********************************************************************

if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst==8){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=27){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=36){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=46){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=63){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=85){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>85 && valordecorrenteadmissivel <=112){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=138){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=168){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>168 && valordecorrenteadmissivel <=213){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>213 && valordecorrenteadmissivel <=258){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>258 && valordecorrenteadmissivel <=299){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>299 && valordecorrenteadmissivel <=344){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>344 && valordecorrenteadmissivel <=392){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>392 && valordecorrenteadmissivel <=461){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>461 && valordecorrenteadmissivel <=530){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>530){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=49){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=66){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=83){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>83 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=125){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=160){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=195){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>195 && valordecorrenteadmissivel <=226){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=261){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=298){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>298 && valordecorrenteadmissivel <=352){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=406){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>406){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=96){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=119){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=144){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=184){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>184 && valordecorrenteadmissivel <=223){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>223 && valordecorrenteadmissivel <=259){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=299){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>299 && valordecorrenteadmissivel <=341){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>341 && valordecorrenteadmissivel <=403){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>403 && valordecorrenteadmissivel <=464){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>464){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=59){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>59 && valordecorrenteadmissivel <=73){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=90){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=110){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=140){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>140 && valordecorrenteadmissivel <=170){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=197){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=227){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=259){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=305){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>305 && valordecorrenteadmissivel <=351){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>351){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=33){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=45){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=58){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=80){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=107){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=138){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=171){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=209){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>209 && valordecorrenteadmissivel <=269){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>269 && valordecorrenteadmissivel <=328){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=382){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>382 && valordecorrenteadmissivel <=441){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>441 && valordecorrenteadmissivel <=506){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>506 && valordecorrenteadmissivel <=599){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>599 && valordecorrenteadmissivel <=693){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>693){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=45){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=62){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=84){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=126){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>126 && valordecorrenteadmissivel <=154){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>154 && valordecorrenteadmissivel <=198){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>198 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=280){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>280 && valordecorrenteadmissivel <=324){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>324 && valordecorrenteadmissivel <=371){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>371 && valordecorrenteadmissivel <=439){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>439 && valordecorrenteadmissivel <=508){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>508){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=52){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=71){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=96){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=147){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147 && valordecorrenteadmissivel <=179){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=229){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>229 && valordecorrenteadmissivel <=278){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>278 && valordecorrenteadmissivel <=322){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>322 && valordecorrenteadmissivel <=371){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>371 && valordecorrenteadmissivel <=424){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=500){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>500 && valordecorrenteadmissivel <=576){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>576){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=90){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=112){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=136){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=174){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=211){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=245){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=283){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>283 && valordecorrenteadmissivel <=323){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>323 && valordecorrenteadmissivel <=382){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>382 && valordecorrenteadmissivel <=440){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>440){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;

        }
    }

}

//Metodo de Referência ------> A2***********************************************************************


if(modinst==2){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>14 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=43){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=57){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=75){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=92){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>92 && valordecorrenteadmissivel <=110){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=139){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=167){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=192){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=219){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>219 && valordecorrenteadmissivel <=248){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>248 && valordecorrenteadmissivel <=291){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>291 && valordecorrenteadmissivel <=334){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>334){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>14.5 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=44){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=58){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=71){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=86){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=108){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=130){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=150){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=172){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=195){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>195 && valordecorrenteadmissivel <=229){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>229 && valordecorrenteadmissivel <=263){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>263){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>13 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=29){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>29 && valordecorrenteadmissivel <=39){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=52){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=68){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=83){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>83 && valordecorrenteadmissivel <=99){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=125){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=150){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=172){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=196){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=223){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>223 && valordecorrenteadmissivel <=261){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=298){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>298){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>13.5 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=53){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=65){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>65 && valordecorrenteadmissivel <=78){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=98){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>98 && valordecorrenteadmissivel <=118){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=135){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=155){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>155 && valordecorrenteadmissivel <=176){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>176 && valordecorrenteadmissivel <=207){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=237){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>237){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=42){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=99){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=121){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>121 && valordecorrenteadmissivel <=145){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>145 && valordecorrenteadmissivel <=183){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>183 && valordecorrenteadmissivel <=220){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>220 && valordecorrenteadmissivel <=253){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=290){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>290 && valordecorrenteadmissivel <=329){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>329 && valordecorrenteadmissivel <=386){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>386 && valordecorrenteadmissivel <=442){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>442){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=33){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=45){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=60){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=78){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=96){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=115){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=145){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>145 && valordecorrenteadmissivel <=175){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=201){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>201 && valordecorrenteadmissivel <=230){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>230 && valordecorrenteadmissivel <=262){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>262 && valordecorrenteadmissivel <=307){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>307 && valordecorrenteadmissivel <=352){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>352){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=22){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=51){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=68){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=109){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>109 && valordecorrenteadmissivel <=130){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=164){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=197){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=227){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=259){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=295){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>295 && valordecorrenteadmissivel <=346){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=396){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>396){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;

        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=31){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=55){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>55 && valordecorrenteadmissivel <=71){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=87){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=131){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=157){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=180){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>180 && valordecorrenteadmissivel <=206){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=233){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=273){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=313){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>313){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> B***********************************************************************


if(modinst==3 || modinst== 5){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=125){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=151){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>151 && valordecorrenteadmissivel <=192){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=232){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>232 && valordecorrenteadmissivel <=269){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>269){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=60){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=79){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>79 && valordecorrenteadmissivel <=97){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>97 && valordecorrenteadmissivel <=118){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=150){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=181){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>181 && valordecorrenteadmissivel <=210){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>210){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>15.5 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=28){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=36){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=50){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>50 && valordecorrenteadmissivel <=68){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=110){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=134){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=171){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=207){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=239){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>239){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=22){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=28){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=39){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=53){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=70){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=86){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=133){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=161){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=186){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>186){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=42){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=75){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=100){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>100 && valordecorrenteadmissivel <=133){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=164){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=198){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>198 && valordecorrenteadmissivel <=253){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=306){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>306 && valordecorrenteadmissivel <=354){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>354){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=43){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=59){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>59 && valordecorrenteadmissivel <=79){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>79 && valordecorrenteadmissivel <=105){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=130){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=157){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=242){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>242 && valordecorrenteadmissivel <=281){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>281){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=20){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=28){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=37){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>37 && valordecorrenteadmissivel <=48){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=66){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=88){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88 && valordecorrenteadmissivel <=117){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=144){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=175){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=222){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>222 && valordecorrenteadmissivel <=269){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>269 && valordecorrenteadmissivel <=312){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>312){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=29){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>29 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=52){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=71){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=93){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>93 && valordecorrenteadmissivel <=116){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=140){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>140 && valordecorrenteadmissivel <=179){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=217){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>217 && valordecorrenteadmissivel <=251){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>251){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }
}

//Metodo de Referência ------> B2***********************************************************************


if(modinst==4 || modinst== 13 || modinst== 14){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=30){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=52){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=69){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>69 && valordecorrenteadmissivel <=90){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=111){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=133){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=168){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>168 && valordecorrenteadmissivel <=191){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>191 && valordecorrenteadmissivel <=232){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>232){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=30){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=41){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=54){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=71){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=86){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=131){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=157){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=181){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>181){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>15 && valordecorrenteadmissivel <=20){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=27){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=34){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=62){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=80){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=99){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=118){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=149){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=179){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=206){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>206){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>15.5 && valordecorrenteadmissivel <=21){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=27){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=36){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=48){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=62){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=77){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=92){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>92 && valordecorrenteadmissivel <=116){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=139){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=160){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>160){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=51){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=69){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>69 && valordecorrenteadmissivel <=91){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>91 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=146){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=175){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=221){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>221 && valordecorrenteadmissivel <=265){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>265 && valordecorrenteadmissivel <=305){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>305){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=40){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=72){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>72 && valordecorrenteadmissivel <=94){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=115){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=138){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=175){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=210){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=242){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>242){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=44){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=60){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=80){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=105){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=128){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>128 && valordecorrenteadmissivel <=154){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>154 && valordecorrenteadmissivel <=194){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>194 && valordecorrenteadmissivel <=233){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=268){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>268){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=28){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=35){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=48){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=64){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>64 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=124){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>124 && valordecorrenteadmissivel <=156){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>156 && valordecorrenteadmissivel <=188){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=216){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>216){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> E, F, G******************************************************************

if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){


//Metodo de Referência ------> E************************************************************************


if(tipo_cabo_multi.checked==true){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=51){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=70){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=94){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=148){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>148 && valordecorrenteadmissivel <=180){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>180 && valordecorrenteadmissivel <=232){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>232 && valordecorrenteadmissivel <=282){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=328){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=379){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>379 && valordecorrenteadmissivel <=434){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=514){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514 && valordecorrenteadmissivel <=593){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>593){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=39){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=73){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=111){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=135){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=173){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=210){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=244){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>244 && valordecorrenteadmissivel <=282){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=322){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>322 && valordecorrenteadmissivel <=380){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>380 && valordecorrenteadmissivel <=479){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>479){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=34){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=43){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=60){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=80){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=126){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>126 && valordecorrenteadmissivel <=153){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>153 && valordecorrenteadmissivel <=196){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=238){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>238 && valordecorrenteadmissivel <=276){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>276 && valordecorrenteadmissivel <=319){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>319 && valordecorrenteadmissivel <=364){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>364 && valordecorrenteadmissivel <=430){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=497){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>497){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=33){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=61){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=78){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=96){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=117){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=150){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=182){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=212){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>212 && valordecorrenteadmissivel <=245){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=280){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>280 && valordecorrenteadmissivel <=330){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>330 && valordecorrenteadmissivel <=381){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>381){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=49){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=63){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=86){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=115){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=149){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=185){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>185 && valordecorrenteadmissivel <=225){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>225 && valordecorrenteadmissivel <=289){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>289 && valordecorrenteadmissivel <=352){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=410){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410 && valordecorrenteadmissivel <=473){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>473 && valordecorrenteadmissivel <=542){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>542 && valordecorrenteadmissivel <=641){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>641 && valordecorrenteadmissivel <=741){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>741){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=28){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=38){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=49){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=67){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=91){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>91 && valordecorrenteadmissivel <=108){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=135){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=164){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=211){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=257){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>257 && valordecorrenteadmissivel <=300){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=346){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=397){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>397 && valordecorrenteadmissivel <=470){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>470 && valordecorrenteadmissivel <=543){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>543){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=32){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=75){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=100){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>100 && valordecorrenteadmissivel <=127){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>127 && valordecorrenteadmissivel <=158){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=192){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=246){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>246 && valordecorrenteadmissivel <=298){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>298 && valordecorrenteadmissivel <=346){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=399){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>399 && valordecorrenteadmissivel <=456){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>456 && valordecorrenteadmissivel <=538){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>538 && valordecorrenteadmissivel <=621){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>621){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=58){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=77){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=97){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>97 && valordecorrenteadmissivel <=120){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>120 && valordecorrenteadmissivel <=146){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=187){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>187 && valordecorrenteadmissivel <=227){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=263){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>263 && valordecorrenteadmissivel <=304){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=347){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>347 && valordecorrenteadmissivel <=407){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>407 && valordecorrenteadmissivel <=471){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>471){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> F************************************************************************

if(tipo_cabo_mono.checked==true){


    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=131){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=162){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>162 && valordecorrenteadmissivel <=196){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=251){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>251 && valordecorrenteadmissivel <=304){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=352){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=406){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>406 && valordecorrenteadmissivel <=463){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>463 && valordecorrenteadmissivel <=546){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>546 && valordecorrenteadmissivel <=629){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>629 && valordecorrenteadmissivel <=754){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>754 && valordecorrenteadmissivel <=868){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>868 && valordecorrenteadmissivel <=1005){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1005){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=98){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>98 && valordecorrenteadmissivel <=122){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>122 && valordecorrenteadmissivel <=149){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=192){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=235){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>235 && valordecorrenteadmissivel <=273){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=316){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>316 && valordecorrenteadmissivel <=363){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>363 && valordecorrenteadmissivel <=430){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=497){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>497 && valordecorrenteadmissivel <=600){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>600 && valordecorrenteadmissivel <=694){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>694 && valordecorrenteadmissivel <=808){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>808){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=161){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=200){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=242){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>242 && valordecorrenteadmissivel <=310){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>310 && valordecorrenteadmissivel <=377){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>377 && valordecorrenteadmissivel <=437){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>437 && valordecorrenteadmissivel <=504){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>504 && valordecorrenteadmissivel <=575){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>575 && valordecorrenteadmissivel <=679){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>679 && valordecorrenteadmissivel <=783){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>783 && valordecorrenteadmissivel <=940){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>940 && valordecorrenteadmissivel <=1083){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1083 && valordecorrenteadmissivel <=1254){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1254){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=121){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>121 && valordecorrenteadmissivel <=150){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=184){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>184 && valordecorrenteadmissivel <=237){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=289){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>289 && valordecorrenteadmissivel <=337){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>337 && valordecorrenteadmissivel <=389){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>389 && valordecorrenteadmissivel <=447){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>447 && valordecorrenteadmissivel <=530){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>530 && valordecorrenteadmissivel <=613){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>613 && valordecorrenteadmissivel <=740){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>740 && valordecorrenteadmissivel <=856){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>856 && valordecorrenteadmissivel <=996){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>996){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

if(tipo_inst_triangulo.checked==true){

    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=110){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=137){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137 && valordecorrenteadmissivel <=167){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=216){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=264){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>264 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=356){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>356 && valordecorrenteadmissivel <=409){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>409 && valordecorrenteadmissivel <=485){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>485 && valordecorrenteadmissivel <=561){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>561 && valordecorrenteadmissivel <=656){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>656 && valordecorrenteadmissivel <=749){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>749 && valordecorrenteadmissivel <=855){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>855){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=105){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=128){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>128 && valordecorrenteadmissivel <=166){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>166 && valordecorrenteadmissivel <=203){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>203 && valordecorrenteadmissivel <=237){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=274){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>274 && valordecorrenteadmissivel <=315){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>315 && valordecorrenteadmissivel <=375){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>375 && valordecorrenteadmissivel <=434){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=526){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>526 && valordecorrenteadmissivel <=610){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>610 && valordecorrenteadmissivel <=711){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>711){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=135){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=169){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>169 && valordecorrenteadmissivel <=207){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=268){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>268 && valordecorrenteadmissivel <=328){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=383){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>383 && valordecorrenteadmissivel <=444){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>444 && valordecorrenteadmissivel <=510){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>510 && valordecorrenteadmissivel <=607){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>607 && valordecorrenteadmissivel <=703){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>703 && valordecorrenteadmissivel <=823){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>823 && valordecorrenteadmissivel <=946){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>946 && valordecorrenteadmissivel <=1088){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1088){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=103){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=129){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>129 && valordecorrenteadmissivel <=159){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>159 && valordecorrenteadmissivel <=206){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=253){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=296){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>296 && valordecorrenteadmissivel <=343){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=395){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>395 && valordecorrenteadmissivel <=471){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>471 && valordecorrenteadmissivel <=547){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>547 && valordecorrenteadmissivel <=663){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>663 && valordecorrenteadmissivel <=770){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>770 && valordecorrenteadmissivel <=899){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>899){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

if(tipo_afastamento_nao_afastados.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=114){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=143){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>143 && valordecorrenteadmissivel <=174){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=225){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>225 && valordecorrenteadmissivel <=275){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=321){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>321 && valordecorrenteadmissivel <=372){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>372 && valordecorrenteadmissivel <=427){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>427 && valordecorrenteadmissivel <=507){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>507 && valordecorrenteadmissivel <=587){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>587 && valordecorrenteadmissivel <=689){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>689 && valordecorrenteadmissivel <=789){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>789 && valordecorrenteadmissivel <=905){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>905){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=87){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=109){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>109 && valordecorrenteadmissivel <=133){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=173){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=212){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>212 && valordecorrenteadmissivel <=247){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>247 && valordecorrenteadmissivel <=287){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>287 && valordecorrenteadmissivel <=330){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>330 && valordecorrenteadmissivel <=392){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>392 && valordecorrenteadmissivel <=455){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>455 && valordecorrenteadmissivel <=552){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>552 && valordecorrenteadmissivel <=640){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>640 && valordecorrenteadmissivel <=746){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>746){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=141){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>141 && valordecorrenteadmissivel <=176){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>176 && valordecorrenteadmissivel <=216){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=279){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>279 && valordecorrenteadmissivel <=342){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>342 && valordecorrenteadmissivel <=400){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>400 && valordecorrenteadmissivel <=464){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>464 && valordecorrenteadmissivel <=533){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>533 && valordecorrenteadmissivel <=634){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>634 && valordecorrenteadmissivel <=736){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>736 && valordecorrenteadmissivel <=868){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>868 && valordecorrenteadmissivel <=998){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>998 && valordecorrenteadmissivel <=1151){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1151){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=107){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=135){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=165){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>165 && valordecorrenteadmissivel <=215){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>215 && valordecorrenteadmissivel <=264){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>264 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=358){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>358 && valordecorrenteadmissivel <=413){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>413 && valordecorrenteadmissivel <=492){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>492 && valordecorrenteadmissivel <=571){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>571 && valordecorrenteadmissivel <=694){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>694 && valordecorrenteadmissivel <=806){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>806 && valordecorrenteadmissivel <=942){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>942){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}

//Metodo de Referência ------> G************************************************************************

if(tipo_cabo_horizontal.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=146){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=181){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>181 && valordecorrenteadmissivel <=219){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>219 && valordecorrenteadmissivel <=281){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>281 && valordecorrenteadmissivel <=341){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>341 && valordecorrenteadmissivel <=396){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>396 && valordecorrenteadmissivel <=456){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>456 && valordecorrenteadmissivel <=521){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>521 && valordecorrenteadmissivel <=615){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>615 && valordecorrenteadmissivel <=709){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>709 && valordecorrenteadmissivel <=852){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>852 && valordecorrenteadmissivel <=982){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>982 && valordecorrenteadmissivel <=1138){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1138){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=112){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=139){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=169){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>169 && valordecorrenteadmissivel <=217){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>217 && valordecorrenteadmissivel <=265){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>265 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=356){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>356 && valordecorrenteadmissivel <=407){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>407 && valordecorrenteadmissivel <=482){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>482 && valordecorrenteadmissivel <=557){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>557 && valordecorrenteadmissivel <=671){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>671 && valordecorrenteadmissivel <=775){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>775 && valordecorrenteadmissivel <=900){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>900){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=182){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=226){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=275){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=353){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>353 && valordecorrenteadmissivel <=430){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=500){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>500 && valordecorrenteadmissivel <=577){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>577 && valordecorrenteadmissivel <=661){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>661 && valordecorrenteadmissivel <=781){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>781 && valordecorrenteadmissivel <=902){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>902 && valordecorrenteadmissivel <=1085){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>1085 && valordecorrenteadmissivel <=1253){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1253 && valordecorrenteadmissivel <=1454){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1454){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=138){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=172){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=210){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=271){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>271 && valordecorrenteadmissivel <=332){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>332 && valordecorrenteadmissivel <=387){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>387 && valordecorrenteadmissivel <=448){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>448 && valordecorrenteadmissivel <=515){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>515 && valordecorrenteadmissivel <=611){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>611 && valordecorrenteadmissivel <=708){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>708 && valordecorrenteadmissivel <=856){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>856 && valordecorrenteadmissivel <=991){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>991 && valordecorrenteadmissivel <=1154){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1154){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}

if(tipo_cabo_vertical.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=130){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=162){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>162 && valordecorrenteadmissivel <=197){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=254){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=311){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>311 && valordecorrenteadmissivel <=362){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>362 && valordecorrenteadmissivel <=419){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>419 && valordecorrenteadmissivel <=480){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>480 && valordecorrenteadmissivel <=569){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>569 && valordecorrenteadmissivel <=659){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>659 && valordecorrenteadmissivel <=795){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>795 && valordecorrenteadmissivel <=920){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>920 && valordecorrenteadmissivel <=1070){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1070){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=99){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=124){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>124 && valordecorrenteadmissivel <=152){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>152 && valordecorrenteadmissivel <=196){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=282){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=327){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>327 && valordecorrenteadmissivel <=376){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>376 && valordecorrenteadmissivel <=447){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>447 && valordecorrenteadmissivel <=519){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>519 && valordecorrenteadmissivel <=629){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>629 && valordecorrenteadmissivel <=730){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>730 && valordecorrenteadmissivel <=852){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>852){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=161){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=201){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>201 && valordecorrenteadmissivel <=246){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>246 && valordecorrenteadmissivel <=318){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>318 && valordecorrenteadmissivel <=389){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>389 && valordecorrenteadmissivel <=454){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>454 && valordecorrenteadmissivel <=527){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>527 && valordecorrenteadmissivel <=605){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>605 && valordecorrenteadmissivel <=719){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>719 && valordecorrenteadmissivel <=833){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>833 && valordecorrenteadmissivel <=1008){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>1008 && valordecorrenteadmissivel <=1169){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1169 && valordecorrenteadmissivel <=1362){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1362){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=122){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>122 && valordecorrenteadmissivel <=153){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>153 && valordecorrenteadmissivel <=188){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=244){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>244 && valordecorrenteadmissivel <=300){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=351){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351 && valordecorrenteadmissivel <=408){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>408 && valordecorrenteadmissivel <=470){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>470 && valordecorrenteadmissivel <=561){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>561 && valordecorrenteadmissivel <=652){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>652 && valordecorrenteadmissivel <=792){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>792 && valordecorrenteadmissivel <=921){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>921 && valordecorrenteadmissivel <=1077){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1077){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}
else{
resultado.value="Complete as informações!";
secao_neutro.value=resultado.value;
}
}

//Metodo de Referência ------> D************************************************************************

if(modinst==17){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=32*0.8){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>32*0.8 && valordecorrenteadmissivel <=42*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>42*0.8 && valordecorrenteadmissivel <=54*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>54*0.8 && valordecorrenteadmissivel <=67*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>67*0.8 && valordecorrenteadmissivel <=90*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>90*0.8 && valordecorrenteadmissivel <=116*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>116*0.8 && valordecorrenteadmissivel <=148*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>148*0.8 && valordecorrenteadmissivel <=178*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>178*0.8 && valordecorrenteadmissivel <=211*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>211*0.8 && valordecorrenteadmissivel <=261*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>261*0.8 && valordecorrenteadmissivel <=308*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>308*0.8 && valordecorrenteadmissivel <=351*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351*0.8 && valordecorrenteadmissivel <=397*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>397*0.8 && valordecorrenteadmissivel <=445*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>445*0.8 && valordecorrenteadmissivel <=514*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514*0.8 && valordecorrenteadmissivel <=581*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>581*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=68*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>68*0.8 && valordecorrenteadmissivel <=88*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88*0.8 && valordecorrenteadmissivel <=114*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114*0.8 && valordecorrenteadmissivel <=137*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137*0.8 && valordecorrenteadmissivel <=161*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>161*0.8 && valordecorrenteadmissivel <=200*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200*0.8 && valordecorrenteadmissivel <=237*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>237*0.8 && valordecorrenteadmissivel <=270*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>270*0.8 && valordecorrenteadmissivel <=304*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304*0.8 && valordecorrenteadmissivel <=343*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>343*0.8 && valordecorrenteadmissivel <=396*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>396*0.8 && valordecorrenteadmissivel <=447*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>447*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26*0.8 && valordecorrenteadmissivel <=34*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>34*0.8 && valordecorrenteadmissivel <=44*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>44*0.8 && valordecorrenteadmissivel <=56*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>56*0.8 && valordecorrenteadmissivel <=74*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>74*0.8 && valordecorrenteadmissivel <=96*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96*0.8 && valordecorrenteadmissivel <=123*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>123*0.8 && valordecorrenteadmissivel <=147*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147*0.8 && valordecorrenteadmissivel <=174*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174*0.8 && valordecorrenteadmissivel <=216*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216*0.8 && valordecorrenteadmissivel <=256*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>256*0.8 && valordecorrenteadmissivel <=290*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>290*0.8 && valordecorrenteadmissivel <=328*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>328*0.8 && valordecorrenteadmissivel <=367*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>367*0.8 && valordecorrenteadmissivel <=424*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424*0.8 && valordecorrenteadmissivel <=480*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>480*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=57*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57*0.8 && valordecorrenteadmissivel <=74*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>74*0.8 && valordecorrenteadmissivel <=94*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94*0.8 && valordecorrenteadmissivel <=114*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>114*0.8 && valordecorrenteadmissivel <=134*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134*0.8 && valordecorrenteadmissivel <=167*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>167*0.8 && valordecorrenteadmissivel <=197*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197*0.8 && valordecorrenteadmissivel <=224*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>224*0.8 && valordecorrenteadmissivel <=254*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>254*0.8 && valordecorrenteadmissivel <=285*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>285*0.8 && valordecorrenteadmissivel <=328*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>328*0.8 && valordecorrenteadmissivel <=371*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>371*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=37*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>37*0.8 && valordecorrenteadmissivel <=48*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>48*0.8 && valordecorrenteadmissivel <=63*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>63*0.8 && valordecorrenteadmissivel <=80*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>80*0.8 && valordecorrenteadmissivel <=104*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>104*0.8 && valordecorrenteadmissivel <=136*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>136*0.8 && valordecorrenteadmissivel <=173*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>173*0.8 && valordecorrenteadmissivel <=208*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>208*0.8 && valordecorrenteadmissivel <=247*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>247*0.8 && valordecorrenteadmissivel <=304*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>304*0.8 && valordecorrenteadmissivel <=360*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>360*0.8 && valordecorrenteadmissivel <=410*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410*0.8 && valordecorrenteadmissivel <=463*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>463*0.8 && valordecorrenteadmissivel <=518*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>518*0.8 && valordecorrenteadmissivel <=598*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>598*0.8 && valordecorrenteadmissivel <=677*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>677*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=80*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80*0.8 && valordecorrenteadmissivel <=104*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>104*0.8 && valordecorrenteadmissivel <=133*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133*0.8 && valordecorrenteadmissivel <=160*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>160*0.8 && valordecorrenteadmissivel <=188*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188*0.8 && valordecorrenteadmissivel <=233*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>233*0.8 && valordecorrenteadmissivel <=275*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275*0.8 && valordecorrenteadmissivel <=314*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>314*0.8 && valordecorrenteadmissivel <=359*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>359*0.8 && valordecorrenteadmissivel <=398*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>398*0.8 && valordecorrenteadmissivel <=458*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>458*0.8 && valordecorrenteadmissivel <=520*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>520*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=31*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>31*0.8 && valordecorrenteadmissivel <=41*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>41*0.8 && valordecorrenteadmissivel <=53*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>53*0.8 && valordecorrenteadmissivel <=66*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>66*0.8 && valordecorrenteadmissivel <=87*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>87*0.8 && valordecorrenteadmissivel <=113*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>113*0.8 && valordecorrenteadmissivel <=144*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>144*0.8 && valordecorrenteadmissivel <=174*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>174*0.8 && valordecorrenteadmissivel <=206*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>206*0.8 && valordecorrenteadmissivel <=254*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254*0.8 && valordecorrenteadmissivel <=301*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>301*0.8 && valordecorrenteadmissivel <=343*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>343*0.8 && valordecorrenteadmissivel <=387*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>387*0.8 && valordecorrenteadmissivel <=434*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434*0.8 && valordecorrenteadmissivel <=501*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>501*0.8 && valordecorrenteadmissivel <=565*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>565*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=67*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67*0.8 && valordecorrenteadmissivel <=87*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>87*0.8 && valordecorrenteadmissivel <=111*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>111*0.8 && valordecorrenteadmissivel <=134*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>134*0.8 && valordecorrenteadmissivel <=160*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>160*0.8 && valordecorrenteadmissivel <=197*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>197*0.8 && valordecorrenteadmissivel <=234*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>234*0.8 && valordecorrenteadmissivel <=266*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>266*0.8 && valordecorrenteadmissivel <=300*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>300*0.8 && valordecorrenteadmissivel <=337*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>337*0.8 && valordecorrenteadmissivel <=388*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>388*0.8 && valordecorrenteadmissivel <=400*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>400*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}


if(modinst==18 || modinst== 19){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=32){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=67){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=90){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=116){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=148){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>148 && valordecorrenteadmissivel <=178){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>178 && valordecorrenteadmissivel <=211){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=261){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=308){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=351){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351 && valordecorrenteadmissivel <=397){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>397 && valordecorrenteadmissivel <=445){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>445 && valordecorrenteadmissivel <=514){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514 && valordecorrenteadmissivel <=581){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>581){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=68){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=88){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88 && valordecorrenteadmissivel <=114){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=137){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137 && valordecorrenteadmissivel <=161){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=237){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=270){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>270 && valordecorrenteadmissivel <=304){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=343){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=396){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>396 && valordecorrenteadmissivel <=447){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>447){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=34){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=44){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=56){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>56 && valordecorrenteadmissivel <=74){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>74 && valordecorrenteadmissivel <=96){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=123){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>123 && valordecorrenteadmissivel <=147){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147 && valordecorrenteadmissivel <=174){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=216){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=256){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>256 && valordecorrenteadmissivel <=290){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>290 && valordecorrenteadmissivel <=328){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=367){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>367 && valordecorrenteadmissivel <=424){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=480){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>480){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=74){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>74 && valordecorrenteadmissivel <=94){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=114){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=134){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=167){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=197){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=224){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>224 && valordecorrenteadmissivel <=254){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=285){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>285 && valordecorrenteadmissivel <=328){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=371){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>371){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=37){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>37 && valordecorrenteadmissivel <=48){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=63){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=80){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=104){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=136){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=173){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=208){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>208 && valordecorrenteadmissivel <=247){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>247 && valordecorrenteadmissivel <=304){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=360){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>360 && valordecorrenteadmissivel <=410){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410 && valordecorrenteadmissivel <=463){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>463 && valordecorrenteadmissivel <=518){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>518 && valordecorrenteadmissivel <=598){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>598 && valordecorrenteadmissivel <=677){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>677){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=80){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=104){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=133){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=160){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=188){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=233){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=275){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=314){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>314 && valordecorrenteadmissivel <=359){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>359 && valordecorrenteadmissivel <=398){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>398 && valordecorrenteadmissivel <=458){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>458 && valordecorrenteadmissivel <=520){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>520){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=31){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=53){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=66){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=87){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=113){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>113 && valordecorrenteadmissivel <=144){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=174){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=206){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=254){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=301){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>301 && valordecorrenteadmissivel <=343){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=387){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>387 && valordecorrenteadmissivel <=434){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=501){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>501 && valordecorrenteadmissivel <=565){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>565){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=67){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=87){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=111){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=134){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=160){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=197){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=234){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>234 && valordecorrenteadmissivel <=266){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>266 && valordecorrenteadmissivel <=300){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=337){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>337 && valordecorrenteadmissivel <=388){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>388 && valordecorrenteadmissivel <=400){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>400){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

}
}

//Fim correntes Admissiveis***********************************************************************************

//Quedas Tensão**********************************************************************************************

var secaoquedatensao=0;
var correntedequedatensao=0;
var compri = Number(Number(comprimento.value));

if(valorsecaotermica>0){

// Monofasico com cobre

        if(tipoi==0 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }




// Monofasico com aluminio PVC


        if(tipoi==0 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==0 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }





// Monofasico com aluminio XPLE

        if(tipoi==0 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==0 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }





//Trifasico com Cobre

 if(tipoi==1 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==0 && valor_carga==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

//Trifásico com aluminio PVC

        if(tipoi==1 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==1 && isol==0){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }


//Trifásico com Alumínio XLPE

        if(tipoi==1 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==1 && isol==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }



//Trifasico Neutro com Cobre

 if(tipoi==2 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==0 && valor_carga==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

//Trifásico Neutro com aluminio PVC

        if(tipoi==2 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==1 && isol==0){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }


//Trifásico Neutro com Alumínio XLPE

        if(tipoi==2 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==1 && isol==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }







    if(secaoquedatensao>valorsecaotermica){


    if(modinst==0 || modinst== 1 || modinst==6 || modinst==7 || modinst==8 || modinst== 15 || modinst== 16 || modinst==2 || modinst==17 || modinst==18 || modinst== 19){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;                
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }

    if(modinst==3 || modinst==5 || modinst==4 || modinst== 13 || modinst== 14){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }

    if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300 && secaoquedatensao<=400){
                novovalorsecao=400;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>400 && secaoquedatensao<=500){
                novovalorsecao=500;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>500 && secaoquedatensao<=630){
                novovalorsecao=630;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>630){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;                
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300 && secaoquedatensao<=400){
                novovalorsecao=400;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>400 && secaoquedatensao<=500){
                novovalorsecao=500;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>500 && secaoquedatensao<=630){
                novovalorsecao=630;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>630){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }


    }

    if(secaoquedatensao<=valorsecaotermica){
        secaoquedatensao=valorsecaotermica;
        novovalorsecao=valorsecaotermica;
        resultado.value=novovalorsecao;
}
}
    if(compri<=0){
        resultado.value="Insira um comprimento válido!";
        secao_neutro.value=resultado.value;

    }
    if(correnteconvencional==0 && compri>0){
        resultado.value="Dados em Falta!";
        secao_neutro.value=resultado.value;
    }

// Correntes de Curto-circuito mínimas

// Curva para canalizações ----> B
// Tipo de fusível ----> gG

if(valorsecaotermica>0 && secaoquedatensao>0 && compri>0){

var resistividade;

    if(cond==0){
        resistividade=0.0172*1.1;
    }
    if(cond==1){
        resistividade=0.0292*1.1;
    }

var constantetemperatura;

    if(cond==0 && isol==0){
        constantetemperatura=115;
    }
    if(cond==1 && isol==0){
        constantetemperatura=76;
    }
    if(cond==0 && isol==1){
        constantetemperatura=143;
    }
    if(cond==1 && isol==1){
        constantetemperatura=94;
    }

var corrente_curto_circuito_minima;

if(tipoi==0){
corrente_curto_circuito_minima=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==1){
corrente_curto_circuito_minima=Number((0.95*230*Math.sqrt(3))/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==2){
corrente_curto_circuito_minima=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}

var tempo_atuacao=0;
var tempo_fadiga_termica=Number((Math.pow(constantetemperatura, 2)* Math.pow(novovalorsecao, 2))/(Math.pow(corrente_curto_circuito_minima, 2)));
var multiplo=Number(corrente_curto_circuito_minima/valor_protecao);
var aumentar;



if (protec==0){
    
    if(multiplo<=3){
    aumentar=true;
    }
    if(multiplo>3){

    if(multiplo<=3.5 && multiplo>3){
    tempo_atuacao=0.015;
}
    if(multiplo>3.5){
    tempo_atuacao=0.01;
    }
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){

        if(multiplo<=4){
        aumentar=true;
    }
        if(multiplo>4 && multiplo<=4.5){
        tempo_atuacao=4;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>5 && multiplo<=5.5){
        tempo_atuacao=1;
    }
        if(multiplo>5.5 && multiplo<=9){
        tempo_atuacao=0.2;
    }
        if(multiplo>9 && multiplo<=10){
        tempo_atuacao=0.1;
    }
        if(multiplo>10 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=17.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>=17.5){
        tempo_atuacao=0.01;
    }
}

//Fusiveis superiores a 25 A

if(valor_protecao>25){

        if(multiplo<=5){
        aumentar=true;
    }
        if(multiplo>5 && multiplo<=5.625){
        tempo_atuacao=4;
    }
        if(multiplo>5.625 && multiplo<=6.25){
        tempo_atuacao=2;
    }
        if(multiplo>6.25 && multiplo<=7.5){
        tempo_atuacao=1;
    }
        if(multiplo>7.5 && multiplo<=8.75){
        tempo_atuacao=0.4;
    }
        if(multiplo>8.75 && multiplo<=10){
        tempo_atuacao=0.2;
    }
        if(multiplo>10 && multiplo<=12.5){
        tempo_atuacao=0.1;
    }
        if(multiplo>12.5 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=22.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>22.5){
        tempo_atuacao=0.01;
    }
}
}    


if(tempo_atuacao>tempo_fadiga_termica){
aumentar=true;
}
if(tempo_atuacao<=tempo_fadiga_termica){
aumentar=false;
}

var verificacaomultiplo=0;
var ajuste_tempo=0;

if(aumentar==true){

    if(protec==0){

    if(tipoi==0){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}

if(protec==1){
    
    if(valor_protecao>0 && valor_protecao<=25){

    if(tipoi==0){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
    if(valor_protecao>25){

    if(tipoi==0){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
}


if(tempo_fadiga_termica<tempo_atuacao){


var ola=true;    
var tempo_a_corrigir=tempo_fadiga_termica;
var novo_multiplo;
    


    if (protec==0){

    if(tempo_a_corrigir>0.015){
    novo_multiplo=3.5;
}
    if(tempo_a_corrigir<=0.01){
    novo_multiplo=4;
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){

	if(tempo_a_corrigir<=5 && tempo_a_corrigir>4){
        novo_multiplo=4;
    }
    if(tempo_a_corrigir<=4 && tempo_a_corrigir>2){
        novo_multiplo=4.5;
    }
    if(tempo_a_corrigir<=2 && tempo_a_corrigir>1){
        novo_multiplo=5;
    }
    if(tempo_a_corrigir<=1 && tempo_a_corrigir>0.4){
        novo_multiplo=5.5;
    }
	if(tempo_a_corrigir<=0.4 && tempo_a_corrigir>0.2){
        novo_multiplo=7.5;
    }
    if(tempo_a_corrigir<=0.2 && tempo_a_corrigir>0.1){
        novo_multiplo=9;
    }
    if(tempo_a_corrigir<=0.1 && tempo_a_corrigir>0.04){
        novo_multiplo=10;
    }
    if(tempo_a_corrigir<=0.04 && tempo_a_corrigir>0.02){
        novo_multiplo=15;
    }
    if(tempo_a_corrigir<=0.02 && tempo_a_corrigir>0.01){
        novo_multiplo=17.5;
    }
    if(tempo_a_corrigir<=0.01){
        novo_multiplo=20;
    }
}

//Fusiveis superiores a 25 A

    if(valor_protecao>25){

	if(tempo_a_corrigir<=5 && tempo_a_corrigir>4){
        novo_multiplo=5;
    }
    if(tempo_a_corrigir<=4 && tempo_a_corrigir>2){
        novo_multiplo=6.25;
    }
    if(tempo_a_corrigir<=2 && tempo_a_corrigir>1){
        novo_multiplo=7.5;
    }
    if(tempo_a_corrigir<=1 && tempo_a_corrigir>0.4){
        novo_multiplo=8.75;
    }
	if(tempo_a_corrigir<=0.4 && tempo_a_corrigir>0.2){
        novo_multiplo=10;
    }
    if(tempo_a_corrigir<=0.2 && tempo_a_corrigir>0.1){
        novo_multiplo=12.5;
    }
    if(tempo_a_corrigir<=0.1 && tempo_a_corrigir>0.04){
        novo_multiplo=15;
    }
    if(tempo_a_corrigir<=0.04 && tempo_a_corrigir>0.02){
        novo_multiplo=17.5;
    }
    if(tempo_a_corrigir<=0.02){
        novo_multiplo=22.5;
    }
}
}



if(tipoi==0){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
if(tipoi==1){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
}
if(tipoi==2){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
}
    
if(verificacaomultiplo>novovalorsecao){

        if(cond==0){
            if(verificacaomultiplo>0 && verificacaomultiplo<=1.5){
                novovalorsecao=1.5;
            }
            if(verificacaomultiplo>1.5 && verificacaomultiplo<=2.5){
                novovalorsecao=2.5;
            }
            if(verificacaomultiplo>2.5 && verificacaomultiplo<=4){
                novovalorsecao=4;
            }
            if(verificacaomultiplo>4 && verificacaomultiplo<=6){
                novovalorsecao=6;
            }
            if(verificacaomultiplo>6 && verificacaomultiplo<=10){
                novovalorsecao=10;
            }
            if(verificacaomultiplo>10 && verificacaomultiplo<=16){
                novovalorsecao=16;
            }
            if(verificacaomultiplo>16 && verificacaomultiplo<=25){
                novovalorsecao=25;
            }
            if(verificacaomultiplo>25 && verificacaomultiplo<=35){
                novovalorsecao=35;
            }
            if(verificacaomultiplo>35 && verificacaomultiplo<=50){
                novovalorsecao=50;
            }
            if(verificacaomultiplo>50 && verificacaomultiplo<=70){
                novovalorsecao=70;
            }
            if(verificacaomultiplo>70 && verificacaomultiplo<=95){
                novovalorsecao=95;
            }
            if(verificacaomultiplo>95 && verificacaomultiplo<=120){
                novovalorsecao=120;
            }
            if(verificacaomultiplo>120 && verificacaomultiplo<=150){
                novovalorsecao=150;
            }
            if(verificacaomultiplo>150 && verificacaomultiplo<=185){
                novovalorsecao=185;
            }
            if(verificacaomultiplo>185 && verificacaomultiplo<=240){
                novovalorsecao=240;
            }
            if(verificacaomultiplo>240 && verificacaomultiplo<=300){
                novovalorsecao=300;
            }
            if(verificacaomultiplo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }
        }
        
        if(cond==1){
            if(verificacaomultiplo>0 && verificacaomultiplo<=2.5){
                novovalorsecao=2.5;
            }
            if(verificacaomultiplo>2.5 && verificacaomultiplo<=4){
                novovalorsecao=4;
            }
            if(verificacaomultiplo>4 && verificacaomultiplo<=6){
                novovalorsecao=6;
            }
            if(verificacaomultiplo>6 && verificacaomultiplo<=10){
                novovalorsecao=10;
            }
            if(verificacaomultiplo>10 && verificacaomultiplo<=16){
                novovalorsecao=16;
            }
            if(verificacaomultiplo>16 && verificacaomultiplo<=25){
                novovalorsecao=25;
            }
            if(verificacaomultiplo>25 && verificacaomultiplo<=35){
                novovalorsecao=35;
            }
            if(verificacaomultiplo>35 && verificacaomultiplo<=50){
                novovalorsecao=50;
            }
            if(verificacaomultiplo>50 && verificacaomultiplo<=70){
                novovalorsecao=70;
            }
            if(verificacaomultiplo>70 && verificacaomultiplo<=95){
                novovalorsecao=95;
            }
            if(verificacaomultiplo>95 && verificacaomultiplo<=120){
                novovalorsecao=120;
            }
            if(verificacaomultiplo>120 && verificacaomultiplo<=150){
                novovalorsecao=150;
            }
            if(verificacaomultiplo>150 && verificacaomultiplo<=185){
                novovalorsecao=185;
            }
            if(verificacaomultiplo>185 && verificacaomultiplo<=240){
                novovalorsecao=240;
            }
            if(verificacaomultiplo>240 && verificacaomultiplo<=300){
                novovalorsecao=300;
            }
            if(verificacaomultiplo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }


}
}

if(verificacaomultiplo<=novovalorsecao){
novovalorsecao=novovalorsecao;
}

if(ajuste_tempo>novovalorsecao){

        if(cond==0){
            if(ajuste_tempo>0 && ajuste_tempo<=1.5){
                novovalorsecao=1.5;
            }
            if(ajuste_tempo>1.5 && ajuste_tempo<=2.5){
                novovalorsecao=2.5;
            }
            if(ajuste_tempo>2.5 && ajuste_tempo<=4){
                novovalorsecao=4;
            }
            if(ajuste_tempo>4 && ajuste_tempo<=6){
                novovalorsecao=6;
            }
            if(ajuste_tempo>6 && ajuste_tempo<=10){
                novovalorsecao=10;
            }
            if(ajuste_tempo>10 && ajuste_tempo<=16){
                novovalorsecao=16;
            }
            if(ajuste_tempo>16 && ajuste_tempo<=25){
                novovalorsecao=25;
            }
            if(ajuste_tempo>25 && ajuste_tempo<=35){
                novovalorsecao=35;
            }
            if(ajuste_tempo>35 && ajuste_tempo<=50){
                novovalorsecao=50;
            }
            if(ajuste_tempo>50 && ajuste_tempo<=70){
                novovalorsecao=70;
            }
            if(ajuste_tempo>70 && ajuste_tempo<=95){
                novovalorsecao=95;
            }
            if(ajuste_tempo>95 && ajuste_tempo<=120){
                novovalorsecao=120;
            }
            if(ajuste_tempo>120 && ajuste_tempo<=150){
                novovalorsecao=150;
            }
            if(ajuste_tempo>150 && ajuste_tempo<=185){
                novovalorsecao=185;
            }
            if(ajuste_tempo>185 && ajuste_tempo<=240){
                novovalorsecao=240;
            }
            if(ajuste_tempo>240 && ajuste_tempo<=300){
                novovalorsecao=300;
            }
            if(ajuste_tempo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }
        }
        
        if(cond==1){
            if(ajuste_tempo>0 && ajuste_tempo<=2.5){
                novovalorsecao=2.5;
            }
            if(ajuste_tempo>2.5 && ajuste_tempo<=4){
                novovalorsecao=4;
            }
            if(ajuste_tempo>4 && ajuste_tempo<=6){
                novovalorsecao=6;
            }
            if(ajuste_tempo>6 && ajuste_tempo<=10){
                novovalorsecao=10;
            }
            if(ajuste_tempo>10 && ajuste_tempo<=16){
                novovalorsecao=16;
            }
            if(ajuste_tempo>16 && ajuste_tempo<=25){
                novovalorsecao=25;
            }
            if(ajuste_tempo>25 && ajuste_tempo<=35){
                novovalorsecao=35;
            }
            if(ajuste_tempo>35 && ajuste_tempo<=50){
                novovalorsecao=50;
            }
            if(ajuste_tempo>50 && ajuste_tempo<=70){
                novovalorsecao=70;
            }
            if(ajuste_tempo>70 && ajuste_tempo<=95){
                novovalorsecao=95;
            }
            if(ajuste_tempo>95 && ajuste_tempo<=120){
                novovalorsecao=120;
            }
            if(ajuste_tempo>120 && ajuste_tempo<=150){
                novovalorsecao=150;
            }
            if(ajuste_tempo>150 && ajuste_tempo<=185){
                novovalorsecao=185;
            }
            if(ajuste_tempo>185 && ajuste_tempo<=240){
                novovalorsecao=240;
            }
            if(ajuste_tempo>240 && ajuste_tempo<=300){
                novovalorsecao=300;
            }
            if(ajuste_tempo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }


}
}

if(ajuste_tempo<=novovalorsecao){
novovalorsecao=novovalorsecao;
}


var corrente_curto_circuito_minima_nova;

if(tipoi==0){
corrente_curto_circuito_minima_nova=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==1){
corrente_curto_circuito_minima_nova=Number((0.95*230*Math.sqrt(3))/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==2){
corrente_curto_circuito_minima_nova=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}


multiplo=corrente_curto_circuito_minima_nova/valor_protecao;


tempo_fadiga_termica=(Math.pow(constantetemperatura, 2)* Math.pow(novovalorsecao, 2))/(Math.pow(corrente_curto_circuito_minima_nova, 2));


if (protec==0){
    if(multiplo>3){

    if(multiplo<=3.5 && multiplo>3){
    tempo_atuacao=0.015;
}
    if(multiplo>3.5){
    tempo_atuacao=0.01;
    }
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){
        if(multiplo>4 && multiplo<=4.5){
        tempo_atuacao=4;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>5 && multiplo<=5.5){
        tempo_atuacao=1;
    }
        if(multiplo>5.5 && multiplo<=9){
        tempo_atuacao=0.2;
    }
        if(multiplo>9 && multiplo<=10){
        tempo_atuacao=0.1;
    }
        if(multiplo>10 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=17.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>=17.5){
        tempo_atuacao=0.01;
    }
}

//Fusiveis superiores a 25 A

if(valor_protecao>25){

        if(multiplo>5 && multiplo<=5.625){
        tempo_atuacao=4;
    }
        if(multiplo>5.625 && multiplo<=6.25){
        tempo_atuacao=2;
    }
        if(multiplo>6.25 && multiplo<=7.5){
        tempo_atuacao=1;
    }
        if(multiplo>7.5 && multiplo<=8.75){
        tempo_atuacao=0.4;
    }
        if(multiplo>8.75 && multiplo<=10){
        tempo_atuacao=0.2;
    }
        if(multiplo>10 && multiplo<=12.5){
        tempo_atuacao=0.1;
    }
        if(multiplo>12.5 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=22.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>22.5){
        tempo_atuacao=0.01;
    }
}
}
if(tempo_fadiga_termica<tempo_atuacao){
resultado.value="Fadiga Térmica!";
secao_neutro.value=resultado.value;










}

else{
resultado.value=novovalorsecao;


if(tipoi==2){

if(cond==0){

if(novovalorsecao>=16){

if(novovalorsecao==16){
secao_neutro.value=10;
}
if(novovalorsecao==25){
secao_neutro.value=16;
}
if(novovalorsecao==35){
secao_neutro.value=25;
}
if(novovalorsecao==50){
secao_neutro.value=25;
}
if(novovalorsecao==70){
secao_neutro.value=35;
}
if(novovalorsecao==95){
secao_neutro.value=50;
}
if(novovalorsecao==120){
secao_neutro.value=70;
}
if(novovalorsecao==150){
secao_neutro.value=95;
}
if(novovalorsecao==185){
secao_neutro.value=95;
}
if(novovalorsecao==240){
secao_neutro.value=120;
}
if(novovalorsecao==300){
secao_neutro.value=150;
}
if(novovalorsecao==400){
secao_neutro.value=240;
}
if(novovalorsecao==500){
secao_neutro.value=300;
}
if(novovalorsecao==630){
secao_neutro.value=400;
}
}


if(novovalorsecao<16){
secao_neutro.value=novovalorsecao;
}

}

if(cond==1){

if(novovalorsecao>=25){
if(novovalorsecao==25){
secao_neutro.value=16;
}
if(novovalorsecao==35){
secao_neutro.value=25;
}
if(novovalorsecao==50){
secao_neutro.value=25;
}
if(novovalorsecao==70){
secao_neutro.value=35;
}
if(novovalorsecao==95){
secao_neutro.value=50;
}
if(novovalorsecao==120){
secao_neutro.value=70;
}
if(novovalorsecao==150){
secao_neutro.value=95;
}
if(novovalorsecao==185){
secao_neutro.value=95;
}
if(novovalorsecao==240){
secao_neutro.value=120;
}
if(novovalorsecao==300){
secao_neutro.value=150;
}
if(novovalorsecao==400){
secao_neutro.value=240;
}
if(novovalorsecao==500){
secao_neutro.value=300;
}
if(novovalorsecao==630){
secao_neutro.value=400;
}
}

if(novovalorsecao<25){
secao_neutro.value=novovalorsecao;
}

}
}



}
}
}







//Fim Funcao Logica*********************************************************************************************

//Funcao__Features**********************************************************************************************


setInterval(features, 1000);


function features(){

var modinst = Number(Number(modoinstalacao.value));
var tipoi = Number(Number(tipoinstalacao.value));
var metodo_referencia = document.getElementById("metodoref")

// Modo de Instalação ---> Método de Referência
// 0-->A
// 1-->C
// 2-->C
// 4-->A2
// 5-->B
// 6-->B2
// 7-->E, F ou G
// 8-->D
// 9-->D
//10-->E, F ou G

//Designação dos Métodos de Referência

if(modinst==0 || modinst==1){
metodo_referencia.value="A";
}

if(modinst==6 || modinst== 15 || modinst== 16){
metodo_referencia.value="C";
}

if(modinst==7){
metodo_referencia.value="C";
}

if(modinst==8){
metodo_referencia.value="C";
}

if(modinst==2){
metodo_referencia.value="A2";
}





if(modinst==3 || modinst==5){
metodo_referencia.value="B";
}





if(modinst==4 || modinst== 13 || modinst== 14){
metodo_referencia.value="B2";
}



if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

metodo_referencia.value="E, F ou G";

if(tipo_cabo_multi.checked==true){
metodo_referencia.value="E";
}
if(tipo_cabo_mono.checked==true){
metodo_referencia.value="F";
}
if(tipo_afastamento_afastados.checked==true){
metodo_referencia.value="G";
}

}

if(modinst==17 || modinst== 18 || modinst==19){
metodo_referencia.value="D";
}

//Fim Designação_Métodos_Referência

//Imagens

var imagem1 = document.getElementById("i1");
var imagem2 = document.getElementById("i2");
var imagem3 = document.getElementById("i3");
var imagem4 = document.getElementById("i4");
var imagem5 = document.getElementById("i5");
var imagem6 = document.getElementById("i6");
var imagem7 = document.getElementById("i7");
var imagem8 = document.getElementById("i8");
var imagem9 = document.getElementById("i9");
var imagem10 = document.getElementById("i10");
var imagem11 = document.getElementById("i11");
var imagem12 = document.getElementById("i12");
var imagem13 = document.getElementById("i13");
var imagem14 = document.getElementById("i14");
var imagem15 = document.getElementById("i15");
var imagem16 = document.getElementById("i16");
var imagem17 = document.getElementById("i17");
var imagem18 = document.getElementById("i18");
var imagem19 = document.getElementById("i19");
var imagem20 = document.getElementById("i20");

if(modinst==0){
imagem1.style.display='block';
}
else{
imagem1.style.display='none';
}


if(modinst==1){
imagem15.style.display='block';
}
else{
imagem15.style.display='none';
}



if(modinst==2){
imagem2.style.display='block';
}
else{
imagem2.style.display='none';
}
if(modinst==3){
imagem3.style.display='block';
}
else{
imagem3.style.display='none';
}

if(modinst==4){
imagem4.style.display='block';
}
else{
imagem4.style.display='none';
}
if(modinst==5){
imagem5.style.display='block';
}
else{
imagem5.style.display='none';
}

if(modinst==6){
imagem6.style.display='block';
}
else{
imagem6.style.display='none';
}

if(modinst==7){
imagem7.style.display='block';
}
else{
imagem7.style.display='none';
}

if(modinst==8){
imagem8.style.display='block';
}
else{
imagem8.style.display='none';
}

if(modinst==9){
imagem9.style.display='block';
}
else{
imagem9.style.display='none';
}

if(modinst==10){
imagem10.style.display='block';
}
else{
imagem10.style.display='none';
}

if(modinst==11){
imagem11.style.display='block';
}
else{
imagem11.style.display='none';
}

if(modinst==12){
imagem12.style.display='block';
}
else{
imagem12.style.display='none';
}

if(modinst==13){
imagem13.style.display='block';
}
else{
imagem13.style.display='none';
}

if(modinst==14){
imagem14.style.display='block';
}
else{
imagem14.style.display='none';
}

if(modinst==15){
imagem16.style.display='block';
}
else{
imagem16.style.display='none';
}

if(modinst==16){
imagem17.style.display='block';
}
else{
imagem17.style.display='none';
}

if(modinst==17){
imagem18.style.display='block';
}
else{
imagem18.style.display='none';
}

if(modinst==18){
imagem19.style.display='block';
}
else{
imagem19.style.display='none';
}
if(modinst==19){
imagem20.style.display='block';
}
else{
imagem20.style.display='none';
}

}

//Function RollDown

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");
var keeptrack;


function rolldown(){

if(keeptrack!=true){
texto_rolldown.style.display='block';
keeptrack=true;
window.scrollTo(0,document.body.scrollHeight);
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}
=======
﻿var tipoinstalacao= document.getElementById("tipoinst");
var tipocarga= document.getElementById("tipocar");
var tipocarga1= document.getElementById("tipocar1");
var resultado= document.getElementById("secao");
var resultadocorrente = document.getElementById("correnteprot");
var protecao = document.getElementById("tipoprot");
var condutor = document.getElementById("tipocond");
var isolamento = document.getElementById("tipoisol");
var modoinstalacao = document.getElementById("mododeinst");


var tempsolo= document.getElementById("temp_solo");
var camadas= document.getElementById("camadas_cabos");
var grupocabos= document.getElementById("grupo_cabos");
var resistividade_solo= document.getElementById("resistividade_termica");


var tempambiente = document.getElementById("temp");



var com_neutro = document.getElementById("resultado_neutro");

var secao_neutro = document.getElementById("secaoneutro");


                                                       
var cabosparalelos = document.getElementById("cabos");   //Para metodos de referencia influenciados por temperatura ambiente
var cabosparalelos1 = document.getElementById("cabos1"); //Para metodos de referencia não influenciados por temperatura ambiente






var comprimento = document.getElementById("co");

var verificacaopa= document.getElementById("selectpa");
var verificacaopu= document.getElementById("selectpu");

var pacv= document.getElementById("selectpacv");
var pakw= document.getElementById("selectpakw");

var pucv= document.getElementById("selectpucv");
var pukw= document.getElementById("selectpukw");


var potencia_ativa_cv= document.getElementById("pacv"); //Potências Ativas Absorvidas
var potencia_ativa_kw= document.getElementById("pakw");

var potencia_util_cv= document.getElementById("pucv");
var potencia_util_kw= document.getElementById("pukw");

var rendimento= document.getElementById("rend");
var cosfi= document.getElementById("fp");



var tabela = document.getElementById("valores"); //Para motores
var tabela1 = document.getElementById("valores1"); //Para iluminação e outras cargas

var com_estrela_triangulo = document.getElementById("margintop1");
var sem_estrela_triangulo = document.getElementById("margintop");


var considerar = document.getElementById("considerar"); //Para metodos de referencia influenciados por temperatura ambiente
var considerar1 = document.getElementById("considerar1"); //Para metodos de referencia não influenciados por temperatura ambiente
var considerar2 = document.getElementById("considerar2");

var valordireto = document.getElementById("1"); // Para utilizar quando se pretende verificar a proteção com uma proteção existente.
var valordireto1 = document.getElementById("2"); // Para utilizar quando se pretende verificar a proteção com uma proteção existente.
var verificaovalordireto= document.getElementById("vc"); //Alternar entre calcular proteção e verificar proteção feita por uma existente.
var tabelaaumentar= document.getElementById("tabela1-5"); // Aumentar uma tabela existente.
var selectordisjuntor= document.getElementById("11"); //Valor do disjuntor existente.
var selectorfusivel= document.getElementById("22"); //Valor do fusivel existente.


var tipo_cabo_mono= document.getElementById("mono");

var tipo_cabo_multi= document.getElementById("multi");

var tipo_cabo_vertical= document.getElementById("vertical");

var tipo_cabo_horizontal= document.getElementById("horizontal");

var tipo_inst_esteira= document.getElementById("esteira"); 

var tipo_inst_triangulo= document.getElementById("triangulo");

var tipo_afastamento_afastados= document.getElementById("afastados");

var tipo_afastamento_nao_afastados= document.getElementById("naoafastados");


setInterval(refresh, 1500);

//Função Refresh
function refresh(){

var tipoi = Number(Number(tipoinstalacao.value));

    if(tipoi==0){
    com_estrela_triangulo.style.display='none';
    sem_estrela_triangulo.style.display='block';
}
   else{
    com_estrela_triangulo.style.display='block';
    sem_estrela_triangulo.style.display='none';
    }


    if(verificacaopa.checked==true){
        pucv.disabled=true;
        pukw.disabled=true;
        potencia_util_cv.disabled=true;
        potencia_util_kw.disabled=true;
        pucv.checked=false;
        pukw.checked=false;
        potencia_util_cv.value="";
        potencia_util_kw.value="";
        rendimento.value="";
        rendimento.disabled=true;
        pacv.disabled=false;
        pakw.disabled=false;

    }


    if(pacv.checked==true && verificacaopu.checked==false){
        potencia_ativa_cv.disabled=false;
        potencia_ativa_kw.disabled=true;
        potencia_ativa_kw.value="";
    }
    if(pakw.checked==true && verificacaopu.checked==false){
        potencia_ativa_cv.disabled=true;
        potencia_ativa_kw.disabled=false;
        potencia_ativa_cv.value="";
    }
    if(verificacaopu.checked==true){
        pacv.disabled=true;
        pakw.disabled=true;
        potencia_ativa_cv.disabled=true;
        potencia_ativa_kw.disabled=true;
        pacv.checked=false;
        pakw.checked=false;
        potencia_ativa_cv.value="";
        potencia_ativa_kw.value="";
        pucv.disabled=false;
        pukw.disabled=false;
    }
    if(pucv.checked==true && verificacaopa.checked==false){
        potencia_util_cv.disabled=false;
        potencia_util_kw.disabled=true;
        rendimento.disabled=false;
        potencia_util_kw.value="";
    }
    if(pukw.checked==true && verificacaopa.checked==false){
        potencia_util_cv.disabled=true;
        potencia_util_kw.disabled=false;
        rendimento.disabled=false;
        potencia_util_cv.value="";
    }

var tabela_fatores_correcao= document.getElementById("tabela5");

var tipoc = Number(Number(tipocarga.value));
var protec = Number(Number(protecao.value));
var modinst = Number(Number(modoinstalacao.value));




if(modinst==0 || modinst==1 || modinst==2){
//tabela_fatores_correcao.style.height="150px";
considerar1.style.display='block';
}
else{
considerar1.style.display='none';
}

if(modinst==3 || modinst==4 || modinst==5 || modinst==6 || modinst==7 || modinst==8 || modinst==9 || modinst==10 || modinst==11 || modinst==12 || modinst==13 || modinst==14 || modinst==15 || modinst==16){
//tabela_fatores_correcao.style.height="200px";
considerar.style.display='block';
}
else{
considerar.style.display='none';
}
if(modinst==17 || modinst==18 || modinst==19){
//tabela_fatores_correcao.style.height="250px";
considerar2.style.display='block';
}
else{
considerar2.style.display='none';
}


//Botoes


var tipo_cabo_mono= document.getElementById("mono");

var tipo_cabo_multi= document.getElementById("multi");

var tipo_cabo_vertical= document.getElementById("vertical");

var tipo_cabo_horizontal= document.getElementById("horizontal");

var tipo_inst_esteira= document.getElementById("esteira"); 

var tipo_inst_triangulo= document.getElementById("triangulo");

var tipo_afastamento_afastados= document.getElementById("afastados");

var tipo_afastamento_nao_afastados= document.getElementById("naoafastados");



//Tabelas

var tabela_dados_cabos= document.getElementById("fatoresmodo");

var tabela_dados_inst= document.getElementById("disposicao");

var tabela_dados_afastadosoun= document.getElementById("afastadosoun");

var tabela_dados_vertouhor= document.getElementById("vertouhor");


//Metodo de referencia E, F , G

if(modinst==9 || modinst==10 || modinst==11 || modinst==12){

tabela_dados_cabos.style.display='block';
tipo_cabo_mono.style.display='block';
tipo_cabo_multi.style.display='block';


if((tipoi==1 || tipoi==2) && tipo_cabo_mono.checked==true){

tabela_dados_inst.style.display='block';
tipo_inst_esteira.style.display='block';
tipo_inst_triangulo.style.display='block';


if(tipo_inst_esteira.checked==true){

tabela_dados_afastadosoun.style.display='block';
tipo_afastamento_afastados.style.display='block';
tipo_afastamento_nao_afastados.style.display='block';

if(tipo_afastamento_afastados.checked==true){
tabela_dados_vertouhor.style.display='block';
tipo_cabo_horizontal.style.display='block';
tipo_cabo_vertical.style.display='block';

}
else{
tabela_dados_vertouhor.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.checked=false;
tipo_cabo_vertical.checked=false;
}
}

else{
tabela_dados_afastadosoun.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
}
}
else{
tabela_dados_inst.style.display='none';
tabela_dados_afastadosoun.style.display='none';
tabela_dados_vertouhor.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_inst_esteira.style.display='none';
tipo_inst_triangulo.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_cabo_vertical.checked=false;
tipo_cabo_horizontal.checked=false;
tipo_inst_esteira.checked=false;
tipo_inst_triangulo.checked=false;
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_mono.style.display='block';
tipo_cabo_multi.style.display='block';
}
}

else{

tabela_dados_cabos.style.display='none';
tabela_dados_inst.style.display='none';
tabela_dados_afastadosoun.style.display='none';
tabela_dados_vertouhor.style.display='none';
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_inst_esteira.style.display='none';
tipo_inst_triangulo.style.display='none';
tipo_afastamento_afastados.style.display='none';
tipo_afastamento_nao_afastados.style.display='none';
tipo_cabo_vertical.checked=false;
tipo_cabo_horizontal.checked=false;
tipo_inst_esteira.checked=false;
tipo_inst_triangulo.checked=false;
tipo_afastamento_afastados.checked=false;
tipo_afastamento_nao_afastados.checked=false;
tipo_cabo_vertical.style.display='none';
tipo_cabo_horizontal.style.display='none';
tipo_cabo_mono.style.display='none';
tipo_cabo_multi.style.display='none';
tipo_cabo_mono.checked=false;
tipo_cabo_multi.checked=false;
}





//Mudança de Ecras de Secção

var tabela_tambem_aumentar = document.getElementById("tabela8");


if(tipoi==2){
com_neutro.style.display='block';
//tabela_tambem_aumentar.style.height="350px";
}
else{
com_neutro.style.display='none';
//tabela_tambem_aumentar.style.height="250px";
secao_neutro.value="";
}


//Proteçoes

if(verificaovalordireto.checked===true){

    if(protec==0){
    
    valordireto.style.display ='block';
//    tabelaaumentar.style.height= "200px";
}
    else{
    valordireto.style.display ='none';
    }
    if(protec==1){
    valordireto1.style.display = 'block';
//    tabelaaumentar.style.height= "200px";
}
    else{
    valordireto1.style.display ='none';
    }
}

else{
    valordireto.style.display = 'none';
    valordireto1.style.display = 'none';
//    tabelaaumentar.style.height= "130px";
}
}
//Fim Função Refresh


//Lógica

function calcular(){


var pa_cv = Number(Number(potencia_ativa_cv.value));
var pa_kw = Number(Number(potencia_ativa_kw.value));
var pu_cv = Number(Number(potencia_util_cv.value));
var pu_kw = Number(Number(potencia_util_kw.value));

var fatorp = Number(Number(cosfi.value)); 
var rendi = Number(Number(rendimento.value)); 
var tipoc = Number(Number(tipocarga.value));
var tipoc1 = Number(Number(tipocarga1.value));
var tipoi = Number(Number(tipoinstalacao.value));
var protec = Number(Number(protecao.value));
var modinst = Number(Number(modoinstalacao.value));
var valorrendimento=0;
var valor_fator_potencia=0;

var potencia_inicial=0;
var potencia_absorvida=0;

var corrente_constante=0;
var corrente_serviço=0;
var corrente_arranque=0;

var valor_carga;


if(tipoi==0){
valor_carga=tipoc;    
}
else{
valor_carga=tipoc1; 
}




if(pukw.checked==true || pucv.checked==true){
valorrendimento=rendi/100;
}
if(pakw.checked==true || pacv.checked==true){
valorrendimento=1;
}
if(valorrendimento==0){
resultadocorrente.value="Insira Dados!";
}
if(valorrendimento>1 || valorrendimento<0){
resultadocorrente.value="Rendimento inválido!";
valorrendimento=0;
}


if(valorrendimento>0){

if(pukw.checked==true){
potencia_absorvida= (pu_kw*1000)/valorrendimento;
}
if(pucv.checked==true){
potencia_absorvida= (pu_cv*735)/valorrendimento;
}
if(pakw.checked==true){
potencia_absorvida= (pa_kw*1000)/valorrendimento;
}
if(pacv.checked==true){
potencia_absorvida= (pa_cv*735)/valorrendimento;
}
if(potencia_absorvida==0){
resultadocorrente.value="Insira Dados!";
}
if(potencia_absorvida<0){
resultadocorrente.value="Potência inválida!";
}
}

if(fatorp>0 && fatorp<=1){
valor_fator_potencia=fatorp;
}
if(fatorp==0){
resultadocorrente.value="Insira Dados!";
}
if(fatorp<0 || fatorp>1){
resultadocorrente.value="Fator de Potência inválido!";
}


if(potencia_absorvida>0 && valor_fator_potencia>0){

if(tipoi==0){
corrente_constante=potencia_absorvida/(230*fatorp);
}
if(tipoi==1 || tipoi==2){
corrente_constante=potencia_absorvida/(230*3*fatorp);
}
}

if(corrente_constante>0){

if(valor_carga==0){
corrente_serviço=((6*corrente_constante)/3)+corrente_constante;

}
if(valor_carga==1){
corrente_serviço=((3*corrente_constante)/3)+corrente_constante;

}

if(valor_carga==2){
corrente_serviço=((2.21*corrente_constante)/3)+corrente_constante;

}
if(valor_carga==3){
corrente_serviço=corrente_constante;

}
if(valor_carga==4){
corrente_serviço=corrente_constante;
}
}

// Seleção de Proteções

var valor_disjuntor_existente= Number(Number(selectordisjuntor.value));
var valor_fusivel_existente= Number(Number(selectorfusivel.value));
var protec = Number(Number(protecao.value));

var valor_disjuntor;
var valor_fusivel;
var valor_protecao=0;
var correnteconvencional=0;

if(verificaovalordireto.checked===true){

if(protec==0){

if(corrente_serviço<valor_disjuntor_existente && corrente_serviço>0){

valor_disjuntor= valor_disjuntor_existente;
valor_protecao= valor_disjuntor;
resultadocorrente.value=valor_protecao;

correnteconvencional=Math.round(1.45*valor_disjuntor);
}
if(corrente_serviço>valor_disjuntor_existente){

resultadocorrente.value="Proteção demasiado baixa!";
}

}

if(protec==1){


if(corrente_serviço<valor_fusivel_existente && corrente_serviço>0){

valor_fusivel= valor_fusivel_existente;
valor_protecao= valor_fusivel;
resultadocorrente.value=valor_protecao;

        if(valor_fusivel>0 && valor_fusivel<=4){
            correnteconvencional=Math.round(2.1*valor_fusivel);    
        }
        if(valor_fusivel>4 && valor_fusivel<=16){
            correnteconvencional=Math.round(1.9*valor_fusivel);    
        }
        if(valor_fusivel>16){
            correnteconvencional=Math.round(1.6*valor_fusivel);   
        }

}
if(corrente_serviço>valor_fusivel_existente){

resultadocorrente.value="Proteção demasiado baixa!";
}
}
}
else{
if (protec==0){

if(corrente_serviço>0){

if(corrente_serviço>0 && corrente_serviço<=10){
    valor_disjuntor=10;
    correnteconvencional=14;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>10 && corrente_serviço<=16){
    valor_disjuntor=16;
    correnteconvencional=23;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>16 && corrente_serviço<=20){
    valor_disjuntor=20;
    correnteconvencional=29;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>20 && corrente_serviço<=25){
    valor_disjuntor=25;
    correnteconvencional=36;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>25 && corrente_serviço<=32){
    valor_disjuntor=32;
    correnteconvencional=46;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>32 && corrente_serviço<=40){
    valor_disjuntor=40;
    correnteconvencional=58;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>40 && corrente_serviço<=50){
    valor_disjuntor=50;
    correnteconvencional=72;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>50 && corrente_serviço<=63){
    valor_disjuntor=63;
    correnteconvencional=91;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>63 && corrente_serviço<=80){
    valor_disjuntor=80;
    correnteconvencional=116;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>80 && corrente_serviço<=100){
    valor_disjuntor=100;
    correnteconvencional=145;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>100 && corrente_serviço<=125){
    valor_disjuntor=125;
    correnteconvencional=181;
    resultadocorrente.value=valor_disjuntor;
}
if(corrente_serviço>125){
    resultadocorrente.value="Fora da Gama!";
}

valor_protecao=valor_disjuntor;

}
}

if (protec==1){

if(corrente_serviço>0){

if(corrente_serviço>0 && corrente_serviço<=2){
    valor_fusivel=2;
    correnteconvencional=4;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>2 && corrente_serviço<=4){
    valor_fusivel=4;
    correnteconvencional=8;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>4 && corrente_serviço<=6){
    valor_fusivel=6;
    correnteconvencional=11;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>6 && corrente_serviço<=8){
    valor_fusivel=8;
    correnteconvencional=15;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>8 && corrente_serviço<=10){
    valor_fusivel=10;
    correnteconvencional=19;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>10 && corrente_serviço<=12){
    valor_fusivel=12;
    correnteconvencional=23;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>12 && corrente_serviço<=16){
    valor_fusivel=16;
    correnteconvencional=30;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>16 && corrente_serviço<=20){
    valor_fusivel=20;
    correnteconvencional=32;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>20 && corrente_serviço<=25){
    valor_fusivel=25;;
    correnteconvencional=40;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>25 && corrente_serviço<=32){
    valor_fusivel=32;
    correnteconvencional=51;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>32 && corrente_serviço<=40){
    valor_fusivel=40;
    correnteconvencional=64;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>40 && corrente_serviço<=50){
    valor_fusivel=50;
    correnteconvencional=80;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>50 && corrente_serviço<=63){
    valor_fusivel=63;
    correnteconvencional=101;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>63 && corrente_serviço<=80){
    valor_fusivel=80;
    correnteconvencional=128;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>80 && corrente_serviço<=100){
    valor_fusivel=100;
    correnteconvencional=160;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>100 && corrente_serviço<=125){
    valor_fusivel=125;
    correnteconvencional=200;
}
if(corrente_serviço>125 && corrente_serviço<=160){
    valor_fusivel=160;
    correnteconvencional=256;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>160 && corrente_serviço<=200){
    valor_fusivel=200;
    correnteconvencional=320;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>200 && corrente_serviço<=250){
    valor_fusivel=250;
    correnteconvencional=400;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>250 && corrente_serviço<=315){
    valor_fusivel=315;
    correnteconvencional=504;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>315 && corrente_serviço<=400){
    valor_fusivel=400;
    correnteconvencional=640;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>400 && corrente_serviço<=500){
    valor_fusivel=500;
    correnteconvencional=800;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>500 && corrente_serviço<=630){
    valor_fusivel=630;
    correnteconvencional=1008;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>630 && corrente_serviço<=800){
    valor_fusivel=800;
    correnteconvencional=1280;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>800 && corrente_serviço<=1000){
    valor_fusivel=1000;
    correnteconvencional=1600;
    resultadocorrente.value=valor_fusivel;
}
if(corrente_serviço>1000){
    resultadocorrente.value="Fora da Gama!";
}


valor_protecao=valor_fusivel;

}
}
}

// Fim da Selecão das Proteções******************************************************************************

//Correntes Admissíveis**************************************************************************************

var grupos_cabos=Number(Number(grupocabos.value));
var camadas_cabos=Number(Number(camadas.value));
var resistividade_solo1 = Number(Number(resistividade_solo.value));
var temp_solo=Number(Number(tempsolo.value));


var cond = Number(Number(condutor.value));
var isol = Number(Number(isolamento.value));
var modinst = Number(Number(modoinstalacao.value));
var tempera = Number(Number(tempambiente.value)); 
var cabospara = Number(Number(cabosparalelos.value));
var cabospara1 = Number(Number(cabosparalelos1.value));
var cabos_paralelos;

//Fatores para cabos solo

var fatorcorrecao_camadas_cabos=0;
var fatorcorrecao_grupo_cabos=0;
var fatorcorrecao_resistividade_solo=0;
var fatorcorrecao_temp_solo=0;




var fatorcorrecaotemp=0;
var numerocircuitos;
var fatorcorrecaocircuitos=0;
var novovalorsecao;



//Fatores_Correcao_Cabos_Paralelos_e_Condutas_Paralelas*****************************************************


if(modinst==0 || modinst==1 || modinst==2){
    cabos_paralelos=cabospara1;
}
if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst== 8 || modinst== 3 || modinst== 5 || modinst== 4 || modinst== 13 || modinst== 14 || modinst== 9 || modinst== 11 || modinst== 10 || modinst== 12){
    cabos_paralelos=cabospara;
}




var verdadeiro_camadas=true;
    
if(camadas_cabos%1==0){
    verdadeiro_camadas=false;
}


var verdadeiro_grupos=true;
    
if(grupos_cabos%1==0){
    verdadeiro_grupos=false;
}

var verdadeiro_cabos_paralelos=true;
    
if(cabos_paralelos%1==0){
verdadeiro_cabos_paralelos=false;
}



if(valor_protecao>0){

//Fatores_Correcao_Instalações_Enterradas***************************************************************

//Fatores correção Temperatura_Solo

if(modinst==17 || modinst==18 || modinst==19){
if(isol==0){

    if(temp_solo<=10){
        fatorcorrecao_temp_solo=1.10;
    }
    
    if(temp_solo<=15 && temp_solo>10){
        fatorcorrecao_temp_solo=1.05;
    }
    if(temp_solo<=20 && temp_solo>15){
        fatorcorrecao_temp_solo=1;
    }
    if(temp_solo<=25 && temp_solo>20){
        fatorcorrecao_temp_solo=0.95;
    }
    if(temp_solo<=30 && temp_solo>25){
        fatorcorrecao_temp_solo=0.89;
    }
    if(temp_solo<=35 && temp_solo>30){
        fatorcorrecao_temp_solo=0.84;
    }
    if(temp_solo<=40 && temp_solo>35){
        fatorcorrecao_temp_solo=0.77;
    }
        if(temp_solo<=45 && temp_solo>40){
        fatorcorrecao_temp_solo=0.71;
    }
    if(temp_solo<=50 && temp_solo>45){
        fatorcorrecao_temp_solo=0.63;
    }
    if(temp_solo<=55 && temp_solo>50){
        fatorcorrecao_temp_solo=0.55;
    }
    if(temp_solo<=60 && temp_solo>55){
        fatorcorrecao_temp_solo=0.45;
    }
    if(temp_solo>60){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
    }
}

if(isol==1){

        if(temp_solo<=10){
        fatorcorrecao_temp_solo=1.07;
    }
    
        if(temp_solo<=15 && temp_solo>10){
        fatorcorrecao_temp_solo=1.04;
    }
        if(temp_solo<=20 && temp_solo>15){
        fatorcorrecao_temp_solo=1;
    }
        if(temp_solo<=25 && temp_solo>20){
        fatorcorrecao_temp_solo=0.96;
    }
        if(temp_solo<=30 && temp_solo>25){
        fatorcorrecao_temp_solo=0.93;
    }
        if(temp_solo<=35 && temp_solo>30){
        fatorcorrecao_temp_solo=0.89;
    }
        if(temp_solo<=40 && temp_solo>35){
        fatorcorrecao_temp_solo=0.85;
    }
        if(temp_solo<=45 && temp_solo>40){
        fatorcorrecao_temp_solo=0.8;
    }
        if(temp_solo<=50 && temp_solo>45){
        fatorcorrecao_temp_solo=0.76;
    }
        if(temp_solo<=55 && temp_solo>50){
        fatorcorrecao_temp_solo=0.71;
    }
        if(temp_solo<=60 && temp_solo>55){
        fatorcorrecao_temp_solo=0.65;
    }
        if(temp_solo<=65 && temp_solo>60){
        fatorcorrecao_temp_solo=0.6;
    }
        if(temp_solo<=70 && temp_solo>65){
        fatorcorrecao_temp_solo=0.53;
    }
        if(temp_solo<=75 && temp_solo>70){
        fatorcorrecao_temp_solo=0.46;
    }
        if(temp_solo<=80 && temp_solo>75){
        fatorcorrecao_temp_solo=0.38;
    }
        if(temp_solo>80){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}
}
else{
fatorcorrecao_temp_solo=1;
}

//Fim Fatores correção Temperatura_Solo


//Fatores_Correcao_Camadas_cabos

if(modinst==17 || modinst==18 || modinst== 19){
    
    if(camadas_cabos==0){
    resultado.value="Insira número de camadas!";
    secao_neutro.value=resultado.value;
    }
    if(camadas_cabos==1){
    fatorcorrecao_camadas_cabos=1;
    }
    if(camadas_cabos==2){
    fatorcorrecao_camadas_cabos=0.8;
    }
    if(camadas_cabos==3){
    fatorcorrecao_camadas_cabos=0.73;
    }
    if(camadas_cabos==4 || camadas_cabos==5){
    fatorcorrecao_camadas_cabos=0.7;
    }
    if(camadas_cabos==6 || camadas_cabos==7 || camadas_cabos==8){
    fatorcorrecao_camadas_cabos=0.68;
    }
    if(camadas_cabos>=9){
    fatorcorrecao_camadas_cabos=0.66;
    }
    if(verdadeiro_camadas==true || camadas_cabos<0){
    fatorcorrecao_camadas_cabos=0;
    resultado.value="Camadas de cabos inválidas!";
    secao_neutro.value=resultado.value;
    }
}
else{
fatorcorrecao_camadas_cabos=1;
}

//Fim Fatores_Correcao_Camadas_Cabos

//Cabos Paralelos (Grupos Cabos)

if(modinst==17 || modinst==18 || modinst== 19){

    if(grupos_cabos==0){
    fatorcorrecao_grupo_cabos=1;
    }
    if(grupos_cabos==1){
    fatorcorrecao_grupo_cabos=0.85;
    }
    if(grupos_cabos==2){
    fatorcorrecao_grupo_cabos=0.78;
    }
    if(grupos_cabos==3 || grupos_cabos==4 ){
    fatorcorrecao_grupo_cabos=0.72;
    }
    if(grupos_cabos==5 || grupos_cabos==6 || grupos_cabos==7){
    fatorcorrecao_grupo_cabos=0.62;
    }
    if(grupos_cabos>=8){
    fatorcorrecao_grupo_cabos=0.55;
    }
    if(verdadeiro_grupos==true || grupos_cabos<0){
    fatorcorrecao_grupo_cabos=0;
    resultado.value="Cabos paralelos inválidos!";
    secao_neutro.value=resultado.value;
    }
}
else{
fatorcorrecao_grupo_cabos=1;
}

//Fim Cabos Paralelos (Grupos Cabos)

//Resistividade do Solo

if(modinst==17 || modinst==18 || modinst==19){

    if(resistividade_solo1==0){
    fatorcorrecao_resistividade_solo=1.25;
    }
    if(resistividade_solo1==1){
    fatorcorrecao_resistividade_solo=1.21;
    }
    if(resistividade_solo1==2){
    fatorcorrecao_resistividade_solo=1.13;
    }
    if(resistividade_solo1==3){
    fatorcorrecao_resistividade_solo=1.05;
    }
    if(resistividade_solo1==4){
    fatorcorrecao_resistividade_solo=1;
    }
    if(resistividade_solo1==5){
    fatorcorrecao_resistividade_solo=0.86;
    }
    if(resistividade_solo1==6){
    fatorcorrecao_resistividade_solo=0.65;
    }
}
else{
fatorcorrecao_resistividade_solo=1;
}

//Fim Resistividade do Solo

//FIM_Fatores_Correcao_Instalações_Enterradas***************************************************************

//Fatores_Cabos_Paralelos

//Fatores_Correcao_Cabos_Paralelos_Metodo_Referencia_A_e_A2

if(modinst==0 || modinst==1 || modinst==2){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.7;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.65;    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.6;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.57;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.54;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.52;
    }
    if(cabos_paralelos==8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.5;
    }
    if(cabos_paralelos<=11 && cabos_paralelos>8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.45;
    }
    if(cabos_paralelos<=15 && cabos_paralelos>11){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.41;
    }
    if(cabos_paralelos>15){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.38;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_Referencia_B

if(modinst==3 || modinst==5 || modinst== 4 || modinst== 13 || modinst== 14){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.85;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75;    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.71;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.7;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_C_Teto
if(modinst==7 || modinst==8){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.95;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.81;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.68; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.66;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.64;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.63;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.62;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.61;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }
}

//Fatores_Correcao_Cabos_Paralelos_Metodo_C_Paredes

if(modinst==6 || modinst== 15 || modinst== 16){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.85;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.71;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.70;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}

//Fatores_Correcao_Cabos_Paralelos_Metodo_E_F(Caminhos de Cabos Perfurados e Derivados)

if(modinst==9 || modinst== 11){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.88;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.82;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.77; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.75;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.73;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.72;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}

//Fatores_Correcao_Cabos_Paralelos_Metodo_E_F(Consolas, Escadas e Derivados)

if(modinst==10 || modinst== 12){

    if(cabos_paralelos==0){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=1;
    }
    if(cabos_paralelos==1){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.87;
    }
    if(cabos_paralelos==2){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.82;
    }
    if(cabos_paralelos==3){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8; 
    }
    if(cabos_paralelos==4){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.8;
    }
    if(cabos_paralelos==5){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==6){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.79;
    }
    if(cabos_paralelos==7){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.78;
    }
    if(cabos_paralelos>=8){
        numerocircuitos=cabos_paralelos+1;
        fatorcorrecaocircuitos=0.78;
    }
    if(verdadeiro_cabos_paralelos==true || cabos_paralelos<0){
        fatorcorrecaocircuitos=0;
        resultado.value="Cabos Paralelos Inválidos";
        secao_neutro.value=resultado.value;
    }

}
if(modinst==17 || modinst==18 || modinst== 19){
fatorcorrecaocircuitos=1;
}

//FIM_FATORES_CORRECAO_CABOS_PARALELOS****************************************************

//FATORES_CORRECAO_TEMPERATURA_AMBIENTE******************************************************

if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst==8 || modinst==3 || modinst== 5 || modinst==4 || modinst== 13 || modinst== 14 || modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

if(isol==0){

    if(tempera<=10){
        fatorcorrecaotemp=1.22;
    }
    
    if(tempera<=15 && tempera>10){
        fatorcorrecaotemp=1.17;
    }
    if(tempera<=20 && tempera>15){
        fatorcorrecaotemp=1.12;
    }
    if(tempera<=25 && tempera>20){
        fatorcorrecaotemp=1.06;
    }
    if(tempera<=30 && tempera>25){
        fatorcorrecaotemp=1;
    }
    if(tempera<=35 && tempera>30){
        fatorcorrecaotemp=0.94;
    }
    if(tempera<=40 && tempera>35){
        fatorcorrecaotemp=0.87;
    }
        if(tempera<=45 && tempera>40){
        fatorcorrecaotemp=0.79;
    }
    if(tempera<=50 && tempera>45){
        fatorcorrecaotemp=0.71;
    }
    if(tempera<=55 && tempera>50){
        fatorcorrecaotemp=0.61;
    }
    if(tempera<=60 && tempera>55){
        fatorcorrecaotemp=0.5;
    }
    if(tempera>60){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}

if(isol==1){

    if(tempera<=10){
        fatorcorrecaotemp=1.15;
    }
    
    if(tempera<=15 && tempera>10){
        fatorcorrecaotemp=1.12;
    }
        if(tempera<=20 && tempera>15){
        fatorcorrecaotemp=1.08;
    }
        if(tempera<=25 && tempera>20){
        fatorcorrecaotemp=1.04;
    }
        if(tempera<=30 && tempera>25){
        fatorcorrecaotemp=1;
    }
        if(tempera<=35 && tempera>30){
        fatorcorrecaotemp=0.96;
    }
        if(tempera<=40 && tempera>35){
        fatorcorrecaotemp=0.91;
    }
        if(tempera<=45 && tempera>40){
        fatorcorrecaotemp=0.87;
    }
        if(tempera<=50 && tempera>45){
        fatorcorrecaotemp=0.82;
    }
        if(tempera<=55 && tempera>50){
        fatorcorrecaotemp=0.76;
    }
        if(tempera<=60 && tempera>55){
        fatorcorrecaotemp=0.71;
    }
        if(tempera<=65 && tempera>60){
        fatorcorrecaotemp=0.65;
    }
        if(tempera<=70 && tempera>65){
        fatorcorrecaotemp=0.58;
    }
        if(tempera<=75 && tempera>70){
        fatorcorrecaotemp=0.5;
    }
        if(tempera<=80 && tempera>75){
        fatorcorrecaotemp=0.41;
    }
        if(tempera>80){
        resultado.value="Isolamento incorreto!";
        secao_neutro.value=resultado.value;
        }
}
}
else{
fatorcorrecaotemp=1;
}




var fatores_correcao;

fatores_correcao=fatorcorrecao_camadas_cabos*fatorcorrecao_resistividade_solo*fatorcorrecao_temp_solo*fatorcorrecao_grupo_cabos*fatorcorrecaotemp*fatorcorrecaocircuitos;


var valordecorrenteadmissivel=0;
var valordecorrenteadmissivel=Number((correnteconvencional)/(1.45*fatores_correcao));
var valorsecaotermica=0;

if(fatores_correcao==0){
valordecorrenteadmissivel=0;
}

// Modo de Instalação ---> Método de Referência
// 0-->A
// 1-->C
// 4-->A2
// 5-->B
// 6-->B2
// 7-->E, F ou G
// 8-->D
// 9-->D
//10-->E, F ou G


if(valordecorrenteadmissivel>0){

//Método de Referência ------> A************************************************************************

if(modinst==0 || modinst==1){

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>14.5 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=34){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=61){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=80){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=99){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=119){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=151){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>151 && valordecorrenteadmissivel <=182){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=210){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=240){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>240 && valordecorrenteadmissivel <=273){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=320){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>320 && valordecorrenteadmissivel <=367){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>367){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }
    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>15 && valordecorrenteadmissivel <=20){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=26){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=48){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=63){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=77){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=93){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>93 && valordecorrenteadmissivel <=118){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=142){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>142 && valordecorrenteadmissivel <=164){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=189){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>189 && valordecorrenteadmissivel <=215){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>215 && valordecorrenteadmissivel <=252){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>252 && valordecorrenteadmissivel <=289){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>289){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    
    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>13.5 && valordecorrenteadmissivel <=18){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=31){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=42){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=56){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>56 && valordecorrenteadmissivel <=73){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=89){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=108){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=136){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=164){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=188){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=216){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=245){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=286){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>286 && valordecorrenteadmissivel <=328){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>328){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>14 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=43){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=57){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=70){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=84){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=107){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=129){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>129 && valordecorrenteadmissivel <=149){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=170){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>170 && valordecorrenteadmissivel <=194){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>194 && valordecorrenteadmissivel <=227){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=261){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>261){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>19 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=45){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=61){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=81){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>81 && valordecorrenteadmissivel <=106){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>106 && valordecorrenteadmissivel <=131){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=158){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=278){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>278 && valordecorrenteadmissivel <=318){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>318 && valordecorrenteadmissivel <=362){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>362 && valordecorrenteadmissivel <=424){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=486){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>486){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=20){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=27){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=35){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=48){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=64){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>64 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=125){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=158){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=191){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>191 && valordecorrenteadmissivel <=220){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>220 && valordecorrenteadmissivel <=253){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=288){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>288 && valordecorrenteadmissivel <=338){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>338 && valordecorrenteadmissivel <=387){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>387){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>17 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=40){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=73){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=95){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>95 && valordecorrenteadmissivel <=117){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=141){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>141 && valordecorrenteadmissivel <=179){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=216){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=249){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>249 && valordecorrenteadmissivel <=285){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>285 && valordecorrenteadmissivel <=324){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>324 && valordecorrenteadmissivel <=380){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>380 && valordecorrenteadmissivel <=435){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>435){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=58){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=76){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=94){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=113){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>113 && valordecorrenteadmissivel <=142){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>142 && valordecorrenteadmissivel <=171){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=197){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=226){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=256){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>256 && valordecorrenteadmissivel <=300){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=344){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>387){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


}

//Metodo de Referência ------> C***********************************************************************

if(modinst==6 || modinst== 15 || modinst== 16 || modinst==7 || modinst==8){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=27){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=36){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=46){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=63){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=85){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>85 && valordecorrenteadmissivel <=112){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=138){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=168){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>168 && valordecorrenteadmissivel <=213){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>213 && valordecorrenteadmissivel <=258){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>258 && valordecorrenteadmissivel <=299){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>299 && valordecorrenteadmissivel <=344){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>344 && valordecorrenteadmissivel <=392){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>392 && valordecorrenteadmissivel <=461){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>461 && valordecorrenteadmissivel <=530){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>530){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=49){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=66){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=83){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>83 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=125){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=160){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=195){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>195 && valordecorrenteadmissivel <=226){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=261){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=298){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>298 && valordecorrenteadmissivel <=352){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=406){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>406){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=96){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=119){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=144){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=184){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>184 && valordecorrenteadmissivel <=223){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>223 && valordecorrenteadmissivel <=259){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=299){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>299 && valordecorrenteadmissivel <=341){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>341 && valordecorrenteadmissivel <=403){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>403 && valordecorrenteadmissivel <=464){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>464){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=59){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>59 && valordecorrenteadmissivel <=73){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=90){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=110){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=140){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>140 && valordecorrenteadmissivel <=170){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=197){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=227){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=259){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=305){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>305 && valordecorrenteadmissivel <=351){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>351){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=33){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=45){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=58){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=80){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=107){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=138){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=171){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=209){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>209 && valordecorrenteadmissivel <=269){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>269 && valordecorrenteadmissivel <=328){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=382){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>382 && valordecorrenteadmissivel <=441){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>441 && valordecorrenteadmissivel <=506){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>506 && valordecorrenteadmissivel <=599){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>599 && valordecorrenteadmissivel <=693){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>693){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=45){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=62){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=84){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=126){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>126 && valordecorrenteadmissivel <=154){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>154 && valordecorrenteadmissivel <=198){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>198 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=280){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>280 && valordecorrenteadmissivel <=324){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>324 && valordecorrenteadmissivel <=371){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>371 && valordecorrenteadmissivel <=439){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>439 && valordecorrenteadmissivel <=508){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>508){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=52){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=71){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=96){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=147){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147 && valordecorrenteadmissivel <=179){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=229){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>229 && valordecorrenteadmissivel <=278){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>278 && valordecorrenteadmissivel <=322){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>322 && valordecorrenteadmissivel <=371){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>371 && valordecorrenteadmissivel <=424){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=500){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>500 && valordecorrenteadmissivel <=576){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>576){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=90){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=112){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=136){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=174){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=211){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=245){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=283){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>283 && valordecorrenteadmissivel <=323){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>323 && valordecorrenteadmissivel <=382){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>382 && valordecorrenteadmissivel <=440){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>440){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;

        }
    }

}

//Metodo de Referência ------> A2***********************************************************************


if(modinst==2){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>14 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=43){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=57){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=75){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=92){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>92 && valordecorrenteadmissivel <=110){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=139){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=167){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=192){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=219){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>219 && valordecorrenteadmissivel <=248){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>248 && valordecorrenteadmissivel <=291){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>291 && valordecorrenteadmissivel <=334){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>334){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=14.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>14.5 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=44){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=58){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=71){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=86){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=108){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=130){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=150){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=172){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=195){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>195 && valordecorrenteadmissivel <=229){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>229 && valordecorrenteadmissivel <=263){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>263){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>13 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=29){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>29 && valordecorrenteadmissivel <=39){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=52){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=68){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=83){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>83 && valordecorrenteadmissivel <=99){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=125){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=150){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=172){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=196){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=223){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>223 && valordecorrenteadmissivel <=261){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=298){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>298){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=13.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>13.5 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=53){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=65){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>65 && valordecorrenteadmissivel <=78){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=98){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>98 && valordecorrenteadmissivel <=118){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=135){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=155){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>155 && valordecorrenteadmissivel <=176){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>176 && valordecorrenteadmissivel <=207){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=237){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>237){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=42){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=99){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=121){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>121 && valordecorrenteadmissivel <=145){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>145 && valordecorrenteadmissivel <=183){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>183 && valordecorrenteadmissivel <=220){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>220 && valordecorrenteadmissivel <=253){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=290){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>290 && valordecorrenteadmissivel <=329){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>329 && valordecorrenteadmissivel <=386){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>386 && valordecorrenteadmissivel <=442){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>442){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=33){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=45){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>45 && valordecorrenteadmissivel <=60){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=78){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=96){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=115){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=145){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>145 && valordecorrenteadmissivel <=175){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=201){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>201 && valordecorrenteadmissivel <=230){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>230 && valordecorrenteadmissivel <=262){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>262 && valordecorrenteadmissivel <=307){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>307 && valordecorrenteadmissivel <=352){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>352){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=22){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=51){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=68){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=109){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>109 && valordecorrenteadmissivel <=130){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=164){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=197){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=227){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=259){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>259 && valordecorrenteadmissivel <=295){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>295 && valordecorrenteadmissivel <=346){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=396){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>396){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;

        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=31){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=55){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>55 && valordecorrenteadmissivel <=71){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=87){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=131){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=157){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=180){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>180 && valordecorrenteadmissivel <=206){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=233){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=273){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=313){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>313){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> B***********************************************************************


if(modinst==3 || modinst== 5){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=41){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=76){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>76 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=125){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>125 && valordecorrenteadmissivel <=151){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>151 && valordecorrenteadmissivel <=192){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=232){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>232 && valordecorrenteadmissivel <=269){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>269){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=32){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=44){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=60){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=79){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>79 && valordecorrenteadmissivel <=97){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>97 && valordecorrenteadmissivel <=118){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=150){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=181){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>181 && valordecorrenteadmissivel <=210){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>210){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>15.5 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=28){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=36){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=50){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>50 && valordecorrenteadmissivel <=68){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=110){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=134){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=171){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>171 && valordecorrenteadmissivel <=207){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=239){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>239){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=22){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=28){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=39){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=53){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=70){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=86){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=133){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=161){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=186){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>186){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=42){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=75){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=100){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>100 && valordecorrenteadmissivel <=133){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=164){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=198){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>198 && valordecorrenteadmissivel <=253){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=306){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>306 && valordecorrenteadmissivel <=354){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>354){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=33){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=43){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=59){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>59 && valordecorrenteadmissivel <=79){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>79 && valordecorrenteadmissivel <=105){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=130){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=157){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=242){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>242 && valordecorrenteadmissivel <=281){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>281){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=20){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=28){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=37){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>37 && valordecorrenteadmissivel <=48){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=66){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=88){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88 && valordecorrenteadmissivel <=117){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=144){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=175){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=222){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>222 && valordecorrenteadmissivel <=269){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>269 && valordecorrenteadmissivel <=312){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>312){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=29){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>29 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=52){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=71){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=93){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>93 && valordecorrenteadmissivel <=116){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=140){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>140 && valordecorrenteadmissivel <=179){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=217){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>217 && valordecorrenteadmissivel <=251){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>251){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }
}

//Metodo de Referência ------> B2***********************************************************************


if(modinst==4 || modinst== 13 || modinst== 14){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=16.5){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>16.5 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=30){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=38){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=52){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>52 && valordecorrenteadmissivel <=69){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>69 && valordecorrenteadmissivel <=90){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=111){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=133){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=168){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>168 && valordecorrenteadmissivel <=191){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>191 && valordecorrenteadmissivel <=232){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>232){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=17.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>17.5 && valordecorrenteadmissivel <=24){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=30){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=41){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=54){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=71){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>71 && valordecorrenteadmissivel <=86){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=104){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=131){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=157){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>157 && valordecorrenteadmissivel <=181){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>181){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>15 && valordecorrenteadmissivel <=20){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>20 && valordecorrenteadmissivel <=27){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=34){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=62){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=80){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=99){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=118){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>118 && valordecorrenteadmissivel <=149){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=179){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>179 && valordecorrenteadmissivel <=206){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>206){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=15.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>15.5 && valordecorrenteadmissivel <=21){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=27){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>27 && valordecorrenteadmissivel <=36){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=48){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=62){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>62 && valordecorrenteadmissivel <=77){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=92){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>92 && valordecorrenteadmissivel <=116){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=139){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=160){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>160){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=51){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=69){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>69 && valordecorrenteadmissivel <=91){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>91 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=146){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=175){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=221){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>221 && valordecorrenteadmissivel <=265){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>265 && valordecorrenteadmissivel <=305){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>305){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=40){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=72){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>72 && valordecorrenteadmissivel <=94){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=115){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=138){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=175){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>175 && valordecorrenteadmissivel <=210){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=242){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>242){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=35){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=44){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=60){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=80){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=105){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=128){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>128 && valordecorrenteadmissivel <=154){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>154 && valordecorrenteadmissivel <=194){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>194 && valordecorrenteadmissivel <=233){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=268){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>268){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=21){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>21 && valordecorrenteadmissivel <=28){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=35){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>35 && valordecorrenteadmissivel <=48){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=64){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>64 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=103){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=124){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>124 && valordecorrenteadmissivel <=156){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>156 && valordecorrenteadmissivel <=188){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=216){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>216){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> E, F, G******************************************************************

if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){


//Metodo de Referência ------> E************************************************************************


if(tipo_cabo_multi.checked==true){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=22){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>22 && valordecorrenteadmissivel <=30){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>30 && valordecorrenteadmissivel <=40){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>40 && valordecorrenteadmissivel <=51){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>51 && valordecorrenteadmissivel <=70){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>70 && valordecorrenteadmissivel <=94){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=119){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>119 && valordecorrenteadmissivel <=148){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>148 && valordecorrenteadmissivel <=180){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>180 && valordecorrenteadmissivel <=232){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>232 && valordecorrenteadmissivel <=282){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=328){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=379){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>379 && valordecorrenteadmissivel <=434){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=514){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514 && valordecorrenteadmissivel <=593){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>593){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=31){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=39){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>39 && valordecorrenteadmissivel <=54){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=73){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>73 && valordecorrenteadmissivel <=89){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>89 && valordecorrenteadmissivel <=111){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=135){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=173){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=210){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=244){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>244 && valordecorrenteadmissivel <=282){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=322){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>322 && valordecorrenteadmissivel <=380){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>380 && valordecorrenteadmissivel <=479){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>479){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=18.5){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>18.5 && valordecorrenteadmissivel <=25){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>25 && valordecorrenteadmissivel <=34){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=43){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>43 && valordecorrenteadmissivel <=60){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>60 && valordecorrenteadmissivel <=80){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=101){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>101 && valordecorrenteadmissivel <=126){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>126 && valordecorrenteadmissivel <=153){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>153 && valordecorrenteadmissivel <=196){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=238){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>238 && valordecorrenteadmissivel <=276){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>276 && valordecorrenteadmissivel <=319){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>319 && valordecorrenteadmissivel <=364){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>364 && valordecorrenteadmissivel <=430){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=497){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>497){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=19.5){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>19.5 && valordecorrenteadmissivel <=26){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=33){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>33 && valordecorrenteadmissivel <=46){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>46 && valordecorrenteadmissivel <=61){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>61 && valordecorrenteadmissivel <=78){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>78 && valordecorrenteadmissivel <=96){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=117){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>117 && valordecorrenteadmissivel <=150){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=182){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=212){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>212 && valordecorrenteadmissivel <=245){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>245 && valordecorrenteadmissivel <=280){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>280 && valordecorrenteadmissivel <=330){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>330 && valordecorrenteadmissivel <=381){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>381){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=36){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>36 && valordecorrenteadmissivel <=49){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=63){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=86){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>86 && valordecorrenteadmissivel <=115){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>115 && valordecorrenteadmissivel <=149){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=185){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>185 && valordecorrenteadmissivel <=225){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>225 && valordecorrenteadmissivel <=289){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>289 && valordecorrenteadmissivel <=352){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=410){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410 && valordecorrenteadmissivel <=473){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>473 && valordecorrenteadmissivel <=542){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>542 && valordecorrenteadmissivel <=641){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>641 && valordecorrenteadmissivel <=741){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>741){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=28){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>28 && valordecorrenteadmissivel <=38){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>38 && valordecorrenteadmissivel <=49){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>49 && valordecorrenteadmissivel <=67){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=91){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>91 && valordecorrenteadmissivel <=108){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>108 && valordecorrenteadmissivel <=135){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=164){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>164 && valordecorrenteadmissivel <=211){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=257){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>257 && valordecorrenteadmissivel <=300){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=346){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=397){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>397 && valordecorrenteadmissivel <=470){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>470 && valordecorrenteadmissivel <=543){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>543){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=23){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>23 && valordecorrenteadmissivel <=32){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=75){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>75 && valordecorrenteadmissivel <=100){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>100 && valordecorrenteadmissivel <=127){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>127 && valordecorrenteadmissivel <=158){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>158 && valordecorrenteadmissivel <=192){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=246){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>246 && valordecorrenteadmissivel <=298){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>298 && valordecorrenteadmissivel <=346){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>346 && valordecorrenteadmissivel <=399){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>399 && valordecorrenteadmissivel <=456){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>456 && valordecorrenteadmissivel <=538){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>538 && valordecorrenteadmissivel <=621){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>621){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=24){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>24 && valordecorrenteadmissivel <=32){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=58){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>58 && valordecorrenteadmissivel <=77){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>77 && valordecorrenteadmissivel <=97){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>97 && valordecorrenteadmissivel <=120){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>120 && valordecorrenteadmissivel <=146){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=187){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>187 && valordecorrenteadmissivel <=227){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>227 && valordecorrenteadmissivel <=263){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>263 && valordecorrenteadmissivel <=304){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=347){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>347 && valordecorrenteadmissivel <=407){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>407 && valordecorrenteadmissivel <=471){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>471){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

//Metodo de Referência ------> F************************************************************************

if(tipo_cabo_mono.checked==true){


    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=131){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>131 && valordecorrenteadmissivel <=162){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>162 && valordecorrenteadmissivel <=196){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=251){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>251 && valordecorrenteadmissivel <=304){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=352){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>352 && valordecorrenteadmissivel <=406){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>406 && valordecorrenteadmissivel <=463){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>463 && valordecorrenteadmissivel <=546){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>546 && valordecorrenteadmissivel <=629){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>629 && valordecorrenteadmissivel <=754){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>754 && valordecorrenteadmissivel <=868){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>868 && valordecorrenteadmissivel <=1005){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1005){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=98){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>98 && valordecorrenteadmissivel <=122){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>122 && valordecorrenteadmissivel <=149){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>149 && valordecorrenteadmissivel <=192){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>192 && valordecorrenteadmissivel <=235){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>235 && valordecorrenteadmissivel <=273){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>273 && valordecorrenteadmissivel <=316){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>316 && valordecorrenteadmissivel <=363){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>363 && valordecorrenteadmissivel <=430){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=497){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>497 && valordecorrenteadmissivel <=600){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>600 && valordecorrenteadmissivel <=694){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>694 && valordecorrenteadmissivel <=808){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>808){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=161){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=200){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=242){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>242 && valordecorrenteadmissivel <=310){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>310 && valordecorrenteadmissivel <=377){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>377 && valordecorrenteadmissivel <=437){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>437 && valordecorrenteadmissivel <=504){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>504 && valordecorrenteadmissivel <=575){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>575 && valordecorrenteadmissivel <=679){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>679 && valordecorrenteadmissivel <=783){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>783 && valordecorrenteadmissivel <=940){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>940 && valordecorrenteadmissivel <=1083){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1083 && valordecorrenteadmissivel <=1254){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1254){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=121){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>121 && valordecorrenteadmissivel <=150){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>150 && valordecorrenteadmissivel <=184){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>184 && valordecorrenteadmissivel <=237){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=289){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>289 && valordecorrenteadmissivel <=337){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>337 && valordecorrenteadmissivel <=389){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>389 && valordecorrenteadmissivel <=447){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>447 && valordecorrenteadmissivel <=530){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>530 && valordecorrenteadmissivel <=613){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>613 && valordecorrenteadmissivel <=740){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>740 && valordecorrenteadmissivel <=856){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>856 && valordecorrenteadmissivel <=996){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>996){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

if(tipo_inst_triangulo.checked==true){

    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=110){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>110 && valordecorrenteadmissivel <=137){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137 && valordecorrenteadmissivel <=167){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=216){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=264){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>264 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=356){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>356 && valordecorrenteadmissivel <=409){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>409 && valordecorrenteadmissivel <=485){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>485 && valordecorrenteadmissivel <=561){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>561 && valordecorrenteadmissivel <=656){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>656 && valordecorrenteadmissivel <=749){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>749 && valordecorrenteadmissivel <=855){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>855){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=84){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>84 && valordecorrenteadmissivel <=105){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>105 && valordecorrenteadmissivel <=128){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>128 && valordecorrenteadmissivel <=166){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>166 && valordecorrenteadmissivel <=203){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>203 && valordecorrenteadmissivel <=237){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=274){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>274 && valordecorrenteadmissivel <=315){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>315 && valordecorrenteadmissivel <=375){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>375 && valordecorrenteadmissivel <=434){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=526){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>526 && valordecorrenteadmissivel <=610){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>610 && valordecorrenteadmissivel <=711){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>711){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=135){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=169){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>169 && valordecorrenteadmissivel <=207){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>207 && valordecorrenteadmissivel <=268){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>268 && valordecorrenteadmissivel <=328){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=383){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>383 && valordecorrenteadmissivel <=444){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>444 && valordecorrenteadmissivel <=510){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>510 && valordecorrenteadmissivel <=607){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>607 && valordecorrenteadmissivel <=703){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>703 && valordecorrenteadmissivel <=823){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>823 && valordecorrenteadmissivel <=946){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>946 && valordecorrenteadmissivel <=1088){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1088){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=103){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>103 && valordecorrenteadmissivel <=129){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>129 && valordecorrenteadmissivel <=159){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>159 && valordecorrenteadmissivel <=206){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=253){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>253 && valordecorrenteadmissivel <=296){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>296 && valordecorrenteadmissivel <=343){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=395){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>395 && valordecorrenteadmissivel <=471){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>471 && valordecorrenteadmissivel <=547){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>547 && valordecorrenteadmissivel <=663){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>663 && valordecorrenteadmissivel <=770){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>770 && valordecorrenteadmissivel <=899){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>899){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

if(tipo_afastamento_nao_afastados.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=114){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=143){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>143 && valordecorrenteadmissivel <=174){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=225){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>225 && valordecorrenteadmissivel <=275){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=321){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>321 && valordecorrenteadmissivel <=372){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>372 && valordecorrenteadmissivel <=427){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>427 && valordecorrenteadmissivel <=507){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>507 && valordecorrenteadmissivel <=587){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>587 && valordecorrenteadmissivel <=689){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>689 && valordecorrenteadmissivel <=789){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>789 && valordecorrenteadmissivel <=905){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>905){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=87){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=109){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>109 && valordecorrenteadmissivel <=133){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=173){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=212){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>212 && valordecorrenteadmissivel <=247){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>247 && valordecorrenteadmissivel <=287){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>287 && valordecorrenteadmissivel <=330){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>330 && valordecorrenteadmissivel <=392){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>392 && valordecorrenteadmissivel <=455){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>455 && valordecorrenteadmissivel <=552){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>552 && valordecorrenteadmissivel <=640){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>640 && valordecorrenteadmissivel <=746){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>746){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=141){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>141 && valordecorrenteadmissivel <=176){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>176 && valordecorrenteadmissivel <=216){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=279){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>279 && valordecorrenteadmissivel <=342){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>342 && valordecorrenteadmissivel <=400){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>400 && valordecorrenteadmissivel <=464){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>464 && valordecorrenteadmissivel <=533){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>533 && valordecorrenteadmissivel <=634){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>634 && valordecorrenteadmissivel <=736){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>736 && valordecorrenteadmissivel <=868){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>868 && valordecorrenteadmissivel <=998){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>998 && valordecorrenteadmissivel <=1151){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1151){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=107){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>107 && valordecorrenteadmissivel <=135){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>135 && valordecorrenteadmissivel <=165){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>165 && valordecorrenteadmissivel <=215){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>215 && valordecorrenteadmissivel <=264){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>264 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=358){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>358 && valordecorrenteadmissivel <=413){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>413 && valordecorrenteadmissivel <=492){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>492 && valordecorrenteadmissivel <=571){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>571 && valordecorrenteadmissivel <=694){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>694 && valordecorrenteadmissivel <=806){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>806 && valordecorrenteadmissivel <=942){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>942){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}

//Metodo de Referência ------> G************************************************************************

if(tipo_cabo_horizontal.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=146){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>146 && valordecorrenteadmissivel <=181){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>181 && valordecorrenteadmissivel <=219){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>219 && valordecorrenteadmissivel <=281){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>281 && valordecorrenteadmissivel <=341){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>341 && valordecorrenteadmissivel <=396){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>396 && valordecorrenteadmissivel <=456){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>456 && valordecorrenteadmissivel <=521){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>521 && valordecorrenteadmissivel <=615){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>615 && valordecorrenteadmissivel <=709){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>709 && valordecorrenteadmissivel <=852){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>852 && valordecorrenteadmissivel <=982){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>982 && valordecorrenteadmissivel <=1138){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1138){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=112){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>112 && valordecorrenteadmissivel <=139){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>139 && valordecorrenteadmissivel <=169){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>169 && valordecorrenteadmissivel <=217){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>217 && valordecorrenteadmissivel <=265){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>265 && valordecorrenteadmissivel <=308){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=356){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>356 && valordecorrenteadmissivel <=407){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>407 && valordecorrenteadmissivel <=482){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>482 && valordecorrenteadmissivel <=557){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>557 && valordecorrenteadmissivel <=671){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>671 && valordecorrenteadmissivel <=775){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>775 && valordecorrenteadmissivel <=900){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>900){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=182){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>182 && valordecorrenteadmissivel <=226){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>226 && valordecorrenteadmissivel <=275){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=353){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>353 && valordecorrenteadmissivel <=430){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>430 && valordecorrenteadmissivel <=500){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>500 && valordecorrenteadmissivel <=577){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>577 && valordecorrenteadmissivel <=661){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>661 && valordecorrenteadmissivel <=781){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>781 && valordecorrenteadmissivel <=902){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>902 && valordecorrenteadmissivel <=1085){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>1085 && valordecorrenteadmissivel <=1253){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1253 && valordecorrenteadmissivel <=1454){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1454){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=138){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>138 && valordecorrenteadmissivel <=172){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>172 && valordecorrenteadmissivel <=210){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>210 && valordecorrenteadmissivel <=271){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>271 && valordecorrenteadmissivel <=332){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>332 && valordecorrenteadmissivel <=387){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>387 && valordecorrenteadmissivel <=448){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>448 && valordecorrenteadmissivel <=515){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>515 && valordecorrenteadmissivel <=611){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>611 && valordecorrenteadmissivel <=708){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>708 && valordecorrenteadmissivel <=856){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>856 && valordecorrenteadmissivel <=991){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>991 && valordecorrenteadmissivel <=1154){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1154){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}

if(tipo_cabo_vertical.checked==true){

   //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=130){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>130 && valordecorrenteadmissivel <=162){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>162 && valordecorrenteadmissivel <=197){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=254){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=311){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>311 && valordecorrenteadmissivel <=362){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>362 && valordecorrenteadmissivel <=419){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>419 && valordecorrenteadmissivel <=480){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>480 && valordecorrenteadmissivel <=569){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>569 && valordecorrenteadmissivel <=659){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>659 && valordecorrenteadmissivel <=795){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>795 && valordecorrenteadmissivel <=920){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>920 && valordecorrenteadmissivel <=1070){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1070){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC

    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){


        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=99){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>99 && valordecorrenteadmissivel <=124){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>124 && valordecorrenteadmissivel <=152){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>152 && valordecorrenteadmissivel <=196){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>196 && valordecorrenteadmissivel <=241){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>241 && valordecorrenteadmissivel <=282){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>282 && valordecorrenteadmissivel <=327){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>327 && valordecorrenteadmissivel <=376){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>376 && valordecorrenteadmissivel <=447){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>447 && valordecorrenteadmissivel <=519){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>519 && valordecorrenteadmissivel <=629){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>629 && valordecorrenteadmissivel <=730){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>730 && valordecorrenteadmissivel <=852){
            valorsecaotermica=630;
            
        }        
        if(valordecorrenteadmissivel>852){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=161){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=201){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>201 && valordecorrenteadmissivel <=246){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>246 && valordecorrenteadmissivel <=318){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>318 && valordecorrenteadmissivel <=389){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>389 && valordecorrenteadmissivel <=454){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>454 && valordecorrenteadmissivel <=527){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>527 && valordecorrenteadmissivel <=605){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>605 && valordecorrenteadmissivel <=719){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>719 && valordecorrenteadmissivel <=833){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>833 && valordecorrenteadmissivel <=1008){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>1008 && valordecorrenteadmissivel <=1169){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>1169 && valordecorrenteadmissivel <=1362){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1362){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=122){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>122 && valordecorrenteadmissivel <=153){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>153 && valordecorrenteadmissivel <=188){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=244){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>244 && valordecorrenteadmissivel <=300){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=351){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351 && valordecorrenteadmissivel <=408){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>408 && valordecorrenteadmissivel <=470){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>470 && valordecorrenteadmissivel <=561){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>561 && valordecorrenteadmissivel <=652){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>652 && valordecorrenteadmissivel <=792){
            valorsecaotermica=400;
            
        }
        if(valordecorrenteadmissivel>792 && valordecorrenteadmissivel <=921){
            valorsecaotermica=500;
            
        }
        if(valordecorrenteadmissivel>921 && valordecorrenteadmissivel <=1077){
            valorsecaotermica=630;
            
        }
        if(valordecorrenteadmissivel>1077){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }



}
else{
resultado.value="Complete as informações!";
secao_neutro.value=resultado.value;
}
}

//Metodo de Referência ------> D************************************************************************

if(modinst==17){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=32*0.8){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>32*0.8 && valordecorrenteadmissivel <=42*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>42*0.8 && valordecorrenteadmissivel <=54*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>54*0.8 && valordecorrenteadmissivel <=67*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>67*0.8 && valordecorrenteadmissivel <=90*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>90*0.8 && valordecorrenteadmissivel <=116*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>116*0.8 && valordecorrenteadmissivel <=148*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>148*0.8 && valordecorrenteadmissivel <=178*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>178*0.8 && valordecorrenteadmissivel <=211*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>211*0.8 && valordecorrenteadmissivel <=261*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>261*0.8 && valordecorrenteadmissivel <=308*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>308*0.8 && valordecorrenteadmissivel <=351*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351*0.8 && valordecorrenteadmissivel <=397*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>397*0.8 && valordecorrenteadmissivel <=445*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>445*0.8 && valordecorrenteadmissivel <=514*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514*0.8 && valordecorrenteadmissivel <=581*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>581*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=68*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>68*0.8 && valordecorrenteadmissivel <=88*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88*0.8 && valordecorrenteadmissivel <=114*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114*0.8 && valordecorrenteadmissivel <=137*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137*0.8 && valordecorrenteadmissivel <=161*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>161*0.8 && valordecorrenteadmissivel <=200*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200*0.8 && valordecorrenteadmissivel <=237*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>237*0.8 && valordecorrenteadmissivel <=270*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>270*0.8 && valordecorrenteadmissivel <=304*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304*0.8 && valordecorrenteadmissivel <=343*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>343*0.8 && valordecorrenteadmissivel <=396*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>396*0.8 && valordecorrenteadmissivel <=447*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>447*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26*0.8 && valordecorrenteadmissivel <=34*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>34*0.8 && valordecorrenteadmissivel <=44*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>44*0.8 && valordecorrenteadmissivel <=56*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>56*0.8 && valordecorrenteadmissivel <=74*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>74*0.8 && valordecorrenteadmissivel <=96*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96*0.8 && valordecorrenteadmissivel <=123*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>123*0.8 && valordecorrenteadmissivel <=147*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147*0.8 && valordecorrenteadmissivel <=174*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174*0.8 && valordecorrenteadmissivel <=216*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216*0.8 && valordecorrenteadmissivel <=256*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>256*0.8 && valordecorrenteadmissivel <=290*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>290*0.8 && valordecorrenteadmissivel <=328*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>328*0.8 && valordecorrenteadmissivel <=367*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>367*0.8 && valordecorrenteadmissivel <=424*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424*0.8 && valordecorrenteadmissivel <=480*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>480*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=57*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57*0.8 && valordecorrenteadmissivel <=74*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>74*0.8 && valordecorrenteadmissivel <=94*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94*0.8 && valordecorrenteadmissivel <=114*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>114*0.8 && valordecorrenteadmissivel <=134*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134*0.8 && valordecorrenteadmissivel <=167*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>167*0.8 && valordecorrenteadmissivel <=197*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197*0.8 && valordecorrenteadmissivel <=224*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>224*0.8 && valordecorrenteadmissivel <=254*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>254*0.8 && valordecorrenteadmissivel <=285*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>285*0.8 && valordecorrenteadmissivel <=328*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>328*0.8 && valordecorrenteadmissivel <=371*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>371*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=37*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>37*0.8 && valordecorrenteadmissivel <=48*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>48*0.8 && valordecorrenteadmissivel <=63*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>63*0.8 && valordecorrenteadmissivel <=80*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>80*0.8 && valordecorrenteadmissivel <=104*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>104*0.8 && valordecorrenteadmissivel <=136*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>136*0.8 && valordecorrenteadmissivel <=173*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>173*0.8 && valordecorrenteadmissivel <=208*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>208*0.8 && valordecorrenteadmissivel <=247*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>247*0.8 && valordecorrenteadmissivel <=304*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>304*0.8 && valordecorrenteadmissivel <=360*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>360*0.8 && valordecorrenteadmissivel <=410*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410*0.8 && valordecorrenteadmissivel <=463*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>463*0.8 && valordecorrenteadmissivel <=518*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>518*0.8 && valordecorrenteadmissivel <=598*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>598*0.8 && valordecorrenteadmissivel <=677*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>677*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=80*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80*0.8 && valordecorrenteadmissivel <=104*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>104*0.8 && valordecorrenteadmissivel <=133*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133*0.8 && valordecorrenteadmissivel <=160*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>160*0.8 && valordecorrenteadmissivel <=188*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188*0.8 && valordecorrenteadmissivel <=233*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>233*0.8 && valordecorrenteadmissivel <=275*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275*0.8 && valordecorrenteadmissivel <=314*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>314*0.8 && valordecorrenteadmissivel <=359*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>359*0.8 && valordecorrenteadmissivel <=398*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>398*0.8 && valordecorrenteadmissivel <=458*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>458*0.8 && valordecorrenteadmissivel <=520*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>520*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=31*0.8){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>31*0.8 && valordecorrenteadmissivel <=41*0.8){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>41*0.8 && valordecorrenteadmissivel <=53*0.8){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>53*0.8 && valordecorrenteadmissivel <=66*0.8){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>66*0.8 && valordecorrenteadmissivel <=87*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>87*0.8 && valordecorrenteadmissivel <=113*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>113*0.8 && valordecorrenteadmissivel <=144*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>144*0.8 && valordecorrenteadmissivel <=174*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>174*0.8 && valordecorrenteadmissivel <=206*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>206*0.8 && valordecorrenteadmissivel <=254*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254*0.8 && valordecorrenteadmissivel <=301*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>301*0.8 && valordecorrenteadmissivel <=343*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>343*0.8 && valordecorrenteadmissivel <=387*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>387*0.8 && valordecorrenteadmissivel <=434*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434*0.8 && valordecorrenteadmissivel <=501*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>501*0.8 && valordecorrenteadmissivel <=565*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>565*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=67*0.8){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67*0.8 && valordecorrenteadmissivel <=87*0.8){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>87*0.8 && valordecorrenteadmissivel <=111*0.8){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>111*0.8 && valordecorrenteadmissivel <=134*0.8){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>134*0.8 && valordecorrenteadmissivel <=160*0.8){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>160*0.8 && valordecorrenteadmissivel <=197*0.8){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>197*0.8 && valordecorrenteadmissivel <=234*0.8){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>234*0.8 && valordecorrenteadmissivel <=266*0.8){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>266*0.8 && valordecorrenteadmissivel <=300*0.8){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>300*0.8 && valordecorrenteadmissivel <=337*0.8){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>337*0.8 && valordecorrenteadmissivel <=388*0.8){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>388*0.8 && valordecorrenteadmissivel <=400*0.8){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>400*0.8){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}


if(modinst==18 || modinst== 19){

    //Monofasico Cobre PVC

    if(tipoi==0 && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=32){
            valorsecaotermica=1.5;

        }
        if(valordecorrenteadmissivel>32 && valordecorrenteadmissivel <=42){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>42 && valordecorrenteadmissivel <=54){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>54 && valordecorrenteadmissivel <=67){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=90){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>90 && valordecorrenteadmissivel <=116){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>116 && valordecorrenteadmissivel <=148){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>148 && valordecorrenteadmissivel <=178){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>178 && valordecorrenteadmissivel <=211){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>211 && valordecorrenteadmissivel <=261){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>261 && valordecorrenteadmissivel <=308){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>308 && valordecorrenteadmissivel <=351){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>351 && valordecorrenteadmissivel <=397){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>397 && valordecorrenteadmissivel <=445){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>445 && valordecorrenteadmissivel <=514){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>514 && valordecorrenteadmissivel <=581){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>581){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio PVC

    if(tipoi==0 && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=68){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>68 && valordecorrenteadmissivel <=88){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>88 && valordecorrenteadmissivel <=114){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=137){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>137 && valordecorrenteadmissivel <=161){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>161 && valordecorrenteadmissivel <=200){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>200 && valordecorrenteadmissivel <=237){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>237 && valordecorrenteadmissivel <=270){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>270 && valordecorrenteadmissivel <=304){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=343){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=396){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>396 && valordecorrenteadmissivel <=447){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>447){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }


    //Trifasico Cobre PVC

    if((tipoi==1 || tipoi==2) && cond==0 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=26){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>26 && valordecorrenteadmissivel <=34){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>34 && valordecorrenteadmissivel <=44){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>44 && valordecorrenteadmissivel <=56){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>56 && valordecorrenteadmissivel <=74){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>74 && valordecorrenteadmissivel <=96){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>96 && valordecorrenteadmissivel <=123){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>123 && valordecorrenteadmissivel <=147){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>147 && valordecorrenteadmissivel <=174){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=216){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>216 && valordecorrenteadmissivel <=256){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>256 && valordecorrenteadmissivel <=290){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>290 && valordecorrenteadmissivel <=328){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=367){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>367 && valordecorrenteadmissivel <=424){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>424 && valordecorrenteadmissivel <=480){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>480){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio PVC


    if((tipoi==1 || tipoi==2) && cond==1 && isol==0){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=57){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>57 && valordecorrenteadmissivel <=74){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>74 && valordecorrenteadmissivel <=94){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>94 && valordecorrenteadmissivel <=114){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>114 && valordecorrenteadmissivel <=134){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=167){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>167 && valordecorrenteadmissivel <=197){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=224){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>224 && valordecorrenteadmissivel <=254){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=285){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>285 && valordecorrenteadmissivel <=328){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>328 && valordecorrenteadmissivel <=371){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>371){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Cobre XLPE

    if(tipoi==0 && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=37){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>37 && valordecorrenteadmissivel <=48){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>48 && valordecorrenteadmissivel <=63){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>63 && valordecorrenteadmissivel <=80){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=104){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=136){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>136 && valordecorrenteadmissivel <=173){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>173 && valordecorrenteadmissivel <=208){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>208 && valordecorrenteadmissivel <=247){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>247 && valordecorrenteadmissivel <=304){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>304 && valordecorrenteadmissivel <=360){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>360 && valordecorrenteadmissivel <=410){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>410 && valordecorrenteadmissivel <=463){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>463 && valordecorrenteadmissivel <=518){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>518 && valordecorrenteadmissivel <=598){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>598 && valordecorrenteadmissivel <=677){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>677){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Monofasico Aluminio XLPE


    if(tipoi==0 && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=80){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>80 && valordecorrenteadmissivel <=104){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>104 && valordecorrenteadmissivel <=133){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>133 && valordecorrenteadmissivel <=160){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=188){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>188 && valordecorrenteadmissivel <=233){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>233 && valordecorrenteadmissivel <=275){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>275 && valordecorrenteadmissivel <=314){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>314 && valordecorrenteadmissivel <=359){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>359 && valordecorrenteadmissivel <=398){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>398 && valordecorrenteadmissivel <=458){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>458 && valordecorrenteadmissivel <=520){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>520){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Cobre XLPE

    if((tipoi==1 || tipoi==2) && cond==0 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=31){
            valorsecaotermica=1.5;
            
        }
        if(valordecorrenteadmissivel>31 && valordecorrenteadmissivel <=41){
            valorsecaotermica=2.5;
            
        }
        if(valordecorrenteadmissivel>41 && valordecorrenteadmissivel <=53){
            valorsecaotermica=4;
            
        }
        if(valordecorrenteadmissivel>53 && valordecorrenteadmissivel <=66){
            valorsecaotermica=6;
            
        }
        if(valordecorrenteadmissivel>66 && valordecorrenteadmissivel <=87){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=113){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>113 && valordecorrenteadmissivel <=144){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>144 && valordecorrenteadmissivel <=174){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>174 && valordecorrenteadmissivel <=206){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>206 && valordecorrenteadmissivel <=254){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>254 && valordecorrenteadmissivel <=301){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>301 && valordecorrenteadmissivel <=343){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>343 && valordecorrenteadmissivel <=387){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>387 && valordecorrenteadmissivel <=434){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>434 && valordecorrenteadmissivel <=501){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>501 && valordecorrenteadmissivel <=565){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>565){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

    //Trifasico Aluminio XLPE


    if((tipoi==1 || tipoi==2) && cond==1 && isol==1){

        if(valordecorrenteadmissivel>0 && valordecorrenteadmissivel <=67){
            valorsecaotermica=10;
            
        }
        if(valordecorrenteadmissivel>67 && valordecorrenteadmissivel <=87){
            valorsecaotermica=16;
            
        }
        if(valordecorrenteadmissivel>87 && valordecorrenteadmissivel <=111){
            valorsecaotermica=25;
            
        }
        if(valordecorrenteadmissivel>111 && valordecorrenteadmissivel <=134){
            valorsecaotermica=35;
            
        }
        if(valordecorrenteadmissivel>134 && valordecorrenteadmissivel <=160){
            valorsecaotermica=50;
            
        }
        if(valordecorrenteadmissivel>160 && valordecorrenteadmissivel <=197){
            valorsecaotermica=70;
            
        }
        if(valordecorrenteadmissivel>197 && valordecorrenteadmissivel <=234){
            valorsecaotermica=95;
            
        }
        if(valordecorrenteadmissivel>234 && valordecorrenteadmissivel <=266){
            valorsecaotermica=120;
            
        }
        if(valordecorrenteadmissivel>266 && valordecorrenteadmissivel <=300){
            valorsecaotermica=150;
            
        }
        if(valordecorrenteadmissivel>300 && valordecorrenteadmissivel <=337){
            valorsecaotermica=185;
            
        }
        if(valordecorrenteadmissivel>337 && valordecorrenteadmissivel <=388){
            valorsecaotermica=240;
            
        }
        if(valordecorrenteadmissivel>388 && valordecorrenteadmissivel <=400){
            valorsecaotermica=300;
            
        }
        if(valordecorrenteadmissivel>400){
            resultado.value="Fora de Gama!";
            secao_neutro.value=resultado.value;
        }
    }

}

}
}

//Fim correntes Admissiveis***********************************************************************************

//Quedas Tensão**********************************************************************************************

var secaoquedatensao=0;
var correntedequedatensao=0;
var compri = Number(Number(comprimento.value));

if(valorsecaotermica>0){

// Monofasico com cobre

        if(tipoi==0 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }




// Monofasico com aluminio PVC


        if(tipoi==0 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==0 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }





// Monofasico com aluminio XPLE

        if(tipoi==0 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==0 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==0 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==0 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==0 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==0 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(2*0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }





//Trifasico com Cobre

 if(tipoi==1 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==0 && valor_carga==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

//Trifásico com aluminio PVC

        if(tipoi==1 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==1 && isol==0){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }


//Trifásico com Alumínio XLPE

        if(tipoi==1 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==1 && isol==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==1 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==1 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==1 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==1 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==1 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }



//Trifasico Neutro com Cobre

 if(tipoi==2 && cond==0 && valor_carga==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==0 && valor_carga==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==0 && valor_carga==2){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==0 && valor_carga==3 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==0 && valor_carga==3 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==0 && valor_carga==4 && protec==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==0 && valor_carga==4 && protec==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.0225*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

//Trifásico Neutro com aluminio PVC

        if(tipoi==2 && cond==1 && valor_carga==0 && isol==0){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==1 && isol==0){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==1 && valor_carga==2 && isol==0){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==3 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==1 && valor_carga==3 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==1 && valor_carga==4 && protec==0 && isol==0){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==1 && valor_carga==4 && protec==1 && isol==0){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.034*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }


//Trifásico Neutro com Alumínio XLPE

        if(tipoi==2 && cond==1 && valor_carga==0 && isol==1){

            correntedequedatensao=corrente_constante*6;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==1 && isol==1){

            correntedequedatensao=corrente_constante*3;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        
        if(tipoi==2 && cond==1 && valor_carga==2 && isol==1){

            correntedequedatensao=corrente_constante*2.21;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }

        if(tipoi==2 && cond==1 && valor_carga==3 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }
        if(tipoi==2 && cond==1 && valor_carga==3 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/6.9;
        }

        if(tipoi==2 && cond==1 && valor_carga==4 && protec==0 && isol==1){

            correntedequedatensao=valor_disjuntor;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }
        if(tipoi==2 && cond==1 && valor_carga==4 && protec==1 && isol==1){

            correntedequedatensao=valor_fusivel;

            secaoquedatensao=(0.036*compri*correntedequedatensao*valor_fator_potencia)/11.5;
        }







    if(secaoquedatensao>valorsecaotermica){


    if(modinst==0 || modinst== 1 || modinst==6 || modinst==7 || modinst==8 || modinst== 15 || modinst== 16 || modinst==2 || modinst==17 || modinst==18 || modinst== 19){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;                
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }

    if(modinst==3 || modinst==5 || modinst==4 || modinst== 13 || modinst== 14){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }

    if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

        if(cond==0){
            if(secaoquedatensao>0 && secaoquedatensao<=1.5){
                novovalorsecao=1.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>1.5 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300 && secaoquedatensao<=400){
                novovalorsecao=400;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>400 && secaoquedatensao<=500){
                novovalorsecao=500;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>500 && secaoquedatensao<=630){
                novovalorsecao=630;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>630){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }

        if(cond==1){
            if(secaoquedatensao>0 && secaoquedatensao<=2.5){
                novovalorsecao=2.5;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>2.5 && secaoquedatensao<=4){
                novovalorsecao=4;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>4 && secaoquedatensao<=6){
                novovalorsecao=6;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>6 && secaoquedatensao<=10){
                novovalorsecao=10;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>10 && secaoquedatensao<=16){
                novovalorsecao=16;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>16 && secaoquedatensao<=25){
                novovalorsecao=25;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>25 && secaoquedatensao<=35){
                novovalorsecao=35;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>35 && secaoquedatensao<=50){
                novovalorsecao=50;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>50 && secaoquedatensao<=70){
                novovalorsecao=70;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>70 && secaoquedatensao<=95){
                novovalorsecao=95;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>95 && secaoquedatensao<=120){
                novovalorsecao=120;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>120 && secaoquedatensao<=150){
                novovalorsecao=150;
                resultado.value=novovalorsecao;                
            }
            if(secaoquedatensao>150 && secaoquedatensao<=185){
                novovalorsecao=185;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>185 && secaoquedatensao<=240){
                novovalorsecao=240;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>240 && secaoquedatensao<=300){
                novovalorsecao=300;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>300 && secaoquedatensao<=400){
                novovalorsecao=400;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>400 && secaoquedatensao<=500){
                novovalorsecao=500;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>500 && secaoquedatensao<=630){
                novovalorsecao=630;
                resultado.value=novovalorsecao;
            }
            if(secaoquedatensao>630){
                novovalorsecao="Fora de Gama!";
                resultado.value=novovalorsecao;
                secao_neutro.value=resultado.value;
            }
        }        
    }


    }

    if(secaoquedatensao<=valorsecaotermica){
        secaoquedatensao=valorsecaotermica;
        novovalorsecao=valorsecaotermica;
        resultado.value=novovalorsecao;
}
}
    if(compri<=0){
        resultado.value="Insira um comprimento válido!";
        secao_neutro.value=resultado.value;

    }
    if(correnteconvencional==0 && compri>0){
        resultado.value="Dados em Falta!";
        secao_neutro.value=resultado.value;
    }

// Correntes de Curto-circuito mínimas

// Curva para canalizações ----> B
// Tipo de fusível ----> gG

if(valorsecaotermica>0 && secaoquedatensao>0 && compri>0){

var resistividade;

    if(cond==0){
        resistividade=0.0172*1.1;
    }
    if(cond==1){
        resistividade=0.0292*1.1;
    }

var constantetemperatura;

    if(cond==0 && isol==0){
        constantetemperatura=115;
    }
    if(cond==1 && isol==0){
        constantetemperatura=76;
    }
    if(cond==0 && isol==1){
        constantetemperatura=143;
    }
    if(cond==1 && isol==1){
        constantetemperatura=94;
    }

var corrente_curto_circuito_minima;

if(tipoi==0){
corrente_curto_circuito_minima=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==1){
corrente_curto_circuito_minima=Number((0.95*230*Math.sqrt(3))/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==2){
corrente_curto_circuito_minima=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}

var tempo_atuacao=0;
var tempo_fadiga_termica=Number((Math.pow(constantetemperatura, 2)* Math.pow(novovalorsecao, 2))/(Math.pow(corrente_curto_circuito_minima, 2)));
var multiplo=Number(corrente_curto_circuito_minima/valor_protecao);
var aumentar;



if (protec==0){
    
    if(multiplo<=3){
    aumentar=true;
    }
    if(multiplo>3){

    if(multiplo<=3.5 && multiplo>3){
    tempo_atuacao=0.015;
}
    if(multiplo>3.5){
    tempo_atuacao=0.01;
    }
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){

        if(multiplo<=4){
        aumentar=true;
    }
        if(multiplo>4 && multiplo<=4.5){
        tempo_atuacao=4;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>5 && multiplo<=5.5){
        tempo_atuacao=1;
    }
        if(multiplo>5.5 && multiplo<=9){
        tempo_atuacao=0.2;
    }
        if(multiplo>9 && multiplo<=10){
        tempo_atuacao=0.1;
    }
        if(multiplo>10 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=17.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>=17.5){
        tempo_atuacao=0.01;
    }
}

//Fusiveis superiores a 25 A

if(valor_protecao>25){

        if(multiplo<=5){
        aumentar=true;
    }
        if(multiplo>5 && multiplo<=5.625){
        tempo_atuacao=4;
    }
        if(multiplo>5.625 && multiplo<=6.25){
        tempo_atuacao=2;
    }
        if(multiplo>6.25 && multiplo<=7.5){
        tempo_atuacao=1;
    }
        if(multiplo>7.5 && multiplo<=8.75){
        tempo_atuacao=0.4;
    }
        if(multiplo>8.75 && multiplo<=10){
        tempo_atuacao=0.2;
    }
        if(multiplo>10 && multiplo<=12.5){
        tempo_atuacao=0.1;
    }
        if(multiplo>12.5 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=22.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>22.5){
        tempo_atuacao=0.01;
    }
}
}    


if(tempo_atuacao>tempo_fadiga_termica){
aumentar=true;
}
if(tempo_atuacao<=tempo_fadiga_termica){
aumentar=false;
}

var verificacaomultiplo=0;
var ajuste_tempo=0;

if(aumentar==true){

    if(protec==0){

    if(tipoi==0){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((3.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}

if(protec==1){
    
    if(valor_protecao>0 && valor_protecao<=25){

    if(tipoi==0){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((4.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
    if(valor_protecao>25){

    if(tipoi==0){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
    if(tipoi==1){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
    }
    if(tipoi==2){
        verificacaomultiplo = Number((5.1*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
}


if(tempo_fadiga_termica<tempo_atuacao){


var ola=true;    
var tempo_a_corrigir=tempo_fadiga_termica;
var novo_multiplo;
    


    if (protec==0){

    if(tempo_a_corrigir>0.015){
    novo_multiplo=3.5;
}
    if(tempo_a_corrigir<=0.01){
    novo_multiplo=4;
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){

	if(tempo_a_corrigir<=5 && tempo_a_corrigir>4){
        novo_multiplo=4;
    }
    if(tempo_a_corrigir<=4 && tempo_a_corrigir>2){
        novo_multiplo=4.5;
    }
    if(tempo_a_corrigir<=2 && tempo_a_corrigir>1){
        novo_multiplo=5;
    }
    if(tempo_a_corrigir<=1 && tempo_a_corrigir>0.4){
        novo_multiplo=5.5;
    }
	if(tempo_a_corrigir<=0.4 && tempo_a_corrigir>0.2){
        novo_multiplo=7.5;
    }
    if(tempo_a_corrigir<=0.2 && tempo_a_corrigir>0.1){
        novo_multiplo=9;
    }
    if(tempo_a_corrigir<=0.1 && tempo_a_corrigir>0.04){
        novo_multiplo=10;
    }
    if(tempo_a_corrigir<=0.04 && tempo_a_corrigir>0.02){
        novo_multiplo=15;
    }
    if(tempo_a_corrigir<=0.02 && tempo_a_corrigir>0.01){
        novo_multiplo=17.5;
    }
    if(tempo_a_corrigir<=0.01){
        novo_multiplo=20;
    }
}

//Fusiveis superiores a 25 A

    if(valor_protecao>25){

	if(tempo_a_corrigir<=5 && tempo_a_corrigir>4){
        novo_multiplo=5;
    }
    if(tempo_a_corrigir<=4 && tempo_a_corrigir>2){
        novo_multiplo=6.25;
    }
    if(tempo_a_corrigir<=2 && tempo_a_corrigir>1){
        novo_multiplo=7.5;
    }
    if(tempo_a_corrigir<=1 && tempo_a_corrigir>0.4){
        novo_multiplo=8.75;
    }
	if(tempo_a_corrigir<=0.4 && tempo_a_corrigir>0.2){
        novo_multiplo=10;
    }
    if(tempo_a_corrigir<=0.2 && tempo_a_corrigir>0.1){
        novo_multiplo=12.5;
    }
    if(tempo_a_corrigir<=0.1 && tempo_a_corrigir>0.04){
        novo_multiplo=15;
    }
    if(tempo_a_corrigir<=0.04 && tempo_a_corrigir>0.02){
        novo_multiplo=17.5;
    }
    if(tempo_a_corrigir<=0.02){
        novo_multiplo=22.5;
    }
}
}



if(tipoi==0){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
if(tipoi==1){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230*Math.sqrt(3)));
}
if(tipoi==2){
        ajuste_tempo = Number((novo_multiplo*3*resistividade*compri*valor_protecao)/(0.95*230));
    }
}
}
    
if(verificacaomultiplo>novovalorsecao){

        if(cond==0){
            if(verificacaomultiplo>0 && verificacaomultiplo<=1.5){
                novovalorsecao=1.5;
            }
            if(verificacaomultiplo>1.5 && verificacaomultiplo<=2.5){
                novovalorsecao=2.5;
            }
            if(verificacaomultiplo>2.5 && verificacaomultiplo<=4){
                novovalorsecao=4;
            }
            if(verificacaomultiplo>4 && verificacaomultiplo<=6){
                novovalorsecao=6;
            }
            if(verificacaomultiplo>6 && verificacaomultiplo<=10){
                novovalorsecao=10;
            }
            if(verificacaomultiplo>10 && verificacaomultiplo<=16){
                novovalorsecao=16;
            }
            if(verificacaomultiplo>16 && verificacaomultiplo<=25){
                novovalorsecao=25;
            }
            if(verificacaomultiplo>25 && verificacaomultiplo<=35){
                novovalorsecao=35;
            }
            if(verificacaomultiplo>35 && verificacaomultiplo<=50){
                novovalorsecao=50;
            }
            if(verificacaomultiplo>50 && verificacaomultiplo<=70){
                novovalorsecao=70;
            }
            if(verificacaomultiplo>70 && verificacaomultiplo<=95){
                novovalorsecao=95;
            }
            if(verificacaomultiplo>95 && verificacaomultiplo<=120){
                novovalorsecao=120;
            }
            if(verificacaomultiplo>120 && verificacaomultiplo<=150){
                novovalorsecao=150;
            }
            if(verificacaomultiplo>150 && verificacaomultiplo<=185){
                novovalorsecao=185;
            }
            if(verificacaomultiplo>185 && verificacaomultiplo<=240){
                novovalorsecao=240;
            }
            if(verificacaomultiplo>240 && verificacaomultiplo<=300){
                novovalorsecao=300;
            }
            if(verificacaomultiplo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }
        }
        
        if(cond==1){
            if(verificacaomultiplo>0 && verificacaomultiplo<=2.5){
                novovalorsecao=2.5;
            }
            if(verificacaomultiplo>2.5 && verificacaomultiplo<=4){
                novovalorsecao=4;
            }
            if(verificacaomultiplo>4 && verificacaomultiplo<=6){
                novovalorsecao=6;
            }
            if(verificacaomultiplo>6 && verificacaomultiplo<=10){
                novovalorsecao=10;
            }
            if(verificacaomultiplo>10 && verificacaomultiplo<=16){
                novovalorsecao=16;
            }
            if(verificacaomultiplo>16 && verificacaomultiplo<=25){
                novovalorsecao=25;
            }
            if(verificacaomultiplo>25 && verificacaomultiplo<=35){
                novovalorsecao=35;
            }
            if(verificacaomultiplo>35 && verificacaomultiplo<=50){
                novovalorsecao=50;
            }
            if(verificacaomultiplo>50 && verificacaomultiplo<=70){
                novovalorsecao=70;
            }
            if(verificacaomultiplo>70 && verificacaomultiplo<=95){
                novovalorsecao=95;
            }
            if(verificacaomultiplo>95 && verificacaomultiplo<=120){
                novovalorsecao=120;
            }
            if(verificacaomultiplo>120 && verificacaomultiplo<=150){
                novovalorsecao=150;
            }
            if(verificacaomultiplo>150 && verificacaomultiplo<=185){
                novovalorsecao=185;
            }
            if(verificacaomultiplo>185 && verificacaomultiplo<=240){
                novovalorsecao=240;
            }
            if(verificacaomultiplo>240 && verificacaomultiplo<=300){
                novovalorsecao=300;
            }
            if(verificacaomultiplo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }


}
}

if(verificacaomultiplo<=novovalorsecao){
novovalorsecao=novovalorsecao;
}

if(ajuste_tempo>novovalorsecao){

        if(cond==0){
            if(ajuste_tempo>0 && ajuste_tempo<=1.5){
                novovalorsecao=1.5;
            }
            if(ajuste_tempo>1.5 && ajuste_tempo<=2.5){
                novovalorsecao=2.5;
            }
            if(ajuste_tempo>2.5 && ajuste_tempo<=4){
                novovalorsecao=4;
            }
            if(ajuste_tempo>4 && ajuste_tempo<=6){
                novovalorsecao=6;
            }
            if(ajuste_tempo>6 && ajuste_tempo<=10){
                novovalorsecao=10;
            }
            if(ajuste_tempo>10 && ajuste_tempo<=16){
                novovalorsecao=16;
            }
            if(ajuste_tempo>16 && ajuste_tempo<=25){
                novovalorsecao=25;
            }
            if(ajuste_tempo>25 && ajuste_tempo<=35){
                novovalorsecao=35;
            }
            if(ajuste_tempo>35 && ajuste_tempo<=50){
                novovalorsecao=50;
            }
            if(ajuste_tempo>50 && ajuste_tempo<=70){
                novovalorsecao=70;
            }
            if(ajuste_tempo>70 && ajuste_tempo<=95){
                novovalorsecao=95;
            }
            if(ajuste_tempo>95 && ajuste_tempo<=120){
                novovalorsecao=120;
            }
            if(ajuste_tempo>120 && ajuste_tempo<=150){
                novovalorsecao=150;
            }
            if(ajuste_tempo>150 && ajuste_tempo<=185){
                novovalorsecao=185;
            }
            if(ajuste_tempo>185 && ajuste_tempo<=240){
                novovalorsecao=240;
            }
            if(ajuste_tempo>240 && ajuste_tempo<=300){
                novovalorsecao=300;
            }
            if(ajuste_tempo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }
        }
        
        if(cond==1){
            if(ajuste_tempo>0 && ajuste_tempo<=2.5){
                novovalorsecao=2.5;
            }
            if(ajuste_tempo>2.5 && ajuste_tempo<=4){
                novovalorsecao=4;
            }
            if(ajuste_tempo>4 && ajuste_tempo<=6){
                novovalorsecao=6;
            }
            if(ajuste_tempo>6 && ajuste_tempo<=10){
                novovalorsecao=10;
            }
            if(ajuste_tempo>10 && ajuste_tempo<=16){
                novovalorsecao=16;
            }
            if(ajuste_tempo>16 && ajuste_tempo<=25){
                novovalorsecao=25;
            }
            if(ajuste_tempo>25 && ajuste_tempo<=35){
                novovalorsecao=35;
            }
            if(ajuste_tempo>35 && ajuste_tempo<=50){
                novovalorsecao=50;
            }
            if(ajuste_tempo>50 && ajuste_tempo<=70){
                novovalorsecao=70;
            }
            if(ajuste_tempo>70 && ajuste_tempo<=95){
                novovalorsecao=95;
            }
            if(ajuste_tempo>95 && ajuste_tempo<=120){
                novovalorsecao=120;
            }
            if(ajuste_tempo>120 && ajuste_tempo<=150){
                novovalorsecao=150;
            }
            if(ajuste_tempo>150 && ajuste_tempo<=185){
                novovalorsecao=185;
            }
            if(ajuste_tempo>185 && ajuste_tempo<=240){
                novovalorsecao=240;
            }
            if(ajuste_tempo>240 && ajuste_tempo<=300){
                novovalorsecao=300;
            }
            if(ajuste_tempo>300){
                resultado.value="Fora de Gama!";
                secao_neutro.value=resultado.value;
            }


}
}

if(ajuste_tempo<=novovalorsecao){
novovalorsecao=novovalorsecao;
}


var corrente_curto_circuito_minima_nova;

if(tipoi==0){
corrente_curto_circuito_minima_nova=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==1){
corrente_curto_circuito_minima_nova=Number((0.95*230*Math.sqrt(3))/(3*(resistividade*compri)/(novovalorsecao)));
}
if(tipoi==2){
corrente_curto_circuito_minima_nova=Number((0.95*230)/(3*(resistividade*compri)/(novovalorsecao)));
}


multiplo=corrente_curto_circuito_minima_nova/valor_protecao;


tempo_fadiga_termica=(Math.pow(constantetemperatura, 2)* Math.pow(novovalorsecao, 2))/(Math.pow(corrente_curto_circuito_minima_nova, 2));


if (protec==0){
    if(multiplo>3){

    if(multiplo<=3.5 && multiplo>3){
    tempo_atuacao=0.015;
}
    if(multiplo>3.5){
    tempo_atuacao=0.01;
    }
    }
}

if (protec==1){
    
//Fusiveis ate 25A

    if(valor_protecao>0 && valor_protecao<=25){
        if(multiplo>4 && multiplo<=4.5){
        tempo_atuacao=4;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>4.5 && multiplo<=5){
        tempo_atuacao=2;
    }
        if(multiplo>5 && multiplo<=5.5){
        tempo_atuacao=1;
    }
        if(multiplo>5.5 && multiplo<=9){
        tempo_atuacao=0.2;
    }
        if(multiplo>9 && multiplo<=10){
        tempo_atuacao=0.1;
    }
        if(multiplo>10 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=17.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>=17.5){
        tempo_atuacao=0.01;
    }
}

//Fusiveis superiores a 25 A

if(valor_protecao>25){

        if(multiplo>5 && multiplo<=5.625){
        tempo_atuacao=4;
    }
        if(multiplo>5.625 && multiplo<=6.25){
        tempo_atuacao=2;
    }
        if(multiplo>6.25 && multiplo<=7.5){
        tempo_atuacao=1;
    }
        if(multiplo>7.5 && multiplo<=8.75){
        tempo_atuacao=0.4;
    }
        if(multiplo>8.75 && multiplo<=10){
        tempo_atuacao=0.2;
    }
        if(multiplo>10 && multiplo<=12.5){
        tempo_atuacao=0.1;
    }
        if(multiplo>12.5 && multiplo<=15){
        tempo_atuacao=0.04;
    }
        if(multiplo>15 && multiplo<=22.5){
        tempo_atuacao=0.02;
    }
        if(multiplo>22.5){
        tempo_atuacao=0.01;
    }
}
}
if(tempo_fadiga_termica<tempo_atuacao){
resultado.value="Fadiga Térmica!";
secao_neutro.value=resultado.value;










}

else{
resultado.value=novovalorsecao;


if(tipoi==2){

if(cond==0){

if(novovalorsecao>=16){

if(novovalorsecao==16){
secao_neutro.value=10;
}
if(novovalorsecao==25){
secao_neutro.value=16;
}
if(novovalorsecao==35){
secao_neutro.value=25;
}
if(novovalorsecao==50){
secao_neutro.value=25;
}
if(novovalorsecao==70){
secao_neutro.value=35;
}
if(novovalorsecao==95){
secao_neutro.value=50;
}
if(novovalorsecao==120){
secao_neutro.value=70;
}
if(novovalorsecao==150){
secao_neutro.value=95;
}
if(novovalorsecao==185){
secao_neutro.value=95;
}
if(novovalorsecao==240){
secao_neutro.value=120;
}
if(novovalorsecao==300){
secao_neutro.value=150;
}
if(novovalorsecao==400){
secao_neutro.value=240;
}
if(novovalorsecao==500){
secao_neutro.value=300;
}
if(novovalorsecao==630){
secao_neutro.value=400;
}
}


if(novovalorsecao<16){
secao_neutro.value=novovalorsecao;
}

}

if(cond==1){

if(novovalorsecao>=25){
if(novovalorsecao==25){
secao_neutro.value=16;
}
if(novovalorsecao==35){
secao_neutro.value=25;
}
if(novovalorsecao==50){
secao_neutro.value=25;
}
if(novovalorsecao==70){
secao_neutro.value=35;
}
if(novovalorsecao==95){
secao_neutro.value=50;
}
if(novovalorsecao==120){
secao_neutro.value=70;
}
if(novovalorsecao==150){
secao_neutro.value=95;
}
if(novovalorsecao==185){
secao_neutro.value=95;
}
if(novovalorsecao==240){
secao_neutro.value=120;
}
if(novovalorsecao==300){
secao_neutro.value=150;
}
if(novovalorsecao==400){
secao_neutro.value=240;
}
if(novovalorsecao==500){
secao_neutro.value=300;
}
if(novovalorsecao==630){
secao_neutro.value=400;
}
}

if(novovalorsecao<25){
secao_neutro.value=novovalorsecao;
}

}
}



}
}
}







//Fim Funcao Logica*********************************************************************************************

//Funcao__Features**********************************************************************************************


setInterval(features, 1000);


function features(){

var modinst = Number(Number(modoinstalacao.value));
var tipoi = Number(Number(tipoinstalacao.value));
var metodo_referencia = document.getElementById("metodoref")

// Modo de Instalação ---> Método de Referência
// 0-->A
// 1-->C
// 2-->C
// 4-->A2
// 5-->B
// 6-->B2
// 7-->E, F ou G
// 8-->D
// 9-->D
//10-->E, F ou G

//Designação dos Métodos de Referência

if(modinst==0 || modinst==1){
metodo_referencia.value="A";
}

if(modinst==6 || modinst== 15 || modinst== 16){
metodo_referencia.value="C";
}

if(modinst==7){
metodo_referencia.value="C";
}

if(modinst==8){
metodo_referencia.value="C";
}

if(modinst==2){
metodo_referencia.value="A2";
}





if(modinst==3 || modinst==5){
metodo_referencia.value="B";
}





if(modinst==4 || modinst== 13 || modinst== 14){
metodo_referencia.value="B2";
}



if(modinst==9 || modinst== 11 || modinst==10 || modinst== 12){

metodo_referencia.value="E, F ou G";

if(tipo_cabo_multi.checked==true){
metodo_referencia.value="E";
}
if(tipo_cabo_mono.checked==true){
metodo_referencia.value="F";
}
if(tipo_afastamento_afastados.checked==true){
metodo_referencia.value="G";
}

}

if(modinst==17 || modinst== 18 || modinst==19){
metodo_referencia.value="D";
}

//Fim Designação_Métodos_Referência

//Imagens

var imagem1 = document.getElementById("i1");
var imagem2 = document.getElementById("i2");
var imagem3 = document.getElementById("i3");
var imagem4 = document.getElementById("i4");
var imagem5 = document.getElementById("i5");
var imagem6 = document.getElementById("i6");
var imagem7 = document.getElementById("i7");
var imagem8 = document.getElementById("i8");
var imagem9 = document.getElementById("i9");
var imagem10 = document.getElementById("i10");
var imagem11 = document.getElementById("i11");
var imagem12 = document.getElementById("i12");
var imagem13 = document.getElementById("i13");
var imagem14 = document.getElementById("i14");
var imagem15 = document.getElementById("i15");
var imagem16 = document.getElementById("i16");
var imagem17 = document.getElementById("i17");
var imagem18 = document.getElementById("i18");
var imagem19 = document.getElementById("i19");
var imagem20 = document.getElementById("i20");

if(modinst==0){
imagem1.style.display='block';
}
else{
imagem1.style.display='none';
}


if(modinst==1){
imagem15.style.display='block';
}
else{
imagem15.style.display='none';
}



if(modinst==2){
imagem2.style.display='block';
}
else{
imagem2.style.display='none';
}
if(modinst==3){
imagem3.style.display='block';
}
else{
imagem3.style.display='none';
}

if(modinst==4){
imagem4.style.display='block';
}
else{
imagem4.style.display='none';
}
if(modinst==5){
imagem5.style.display='block';
}
else{
imagem5.style.display='none';
}

if(modinst==6){
imagem6.style.display='block';
}
else{
imagem6.style.display='none';
}

if(modinst==7){
imagem7.style.display='block';
}
else{
imagem7.style.display='none';
}

if(modinst==8){
imagem8.style.display='block';
}
else{
imagem8.style.display='none';
}

if(modinst==9){
imagem9.style.display='block';
}
else{
imagem9.style.display='none';
}

if(modinst==10){
imagem10.style.display='block';
}
else{
imagem10.style.display='none';
}

if(modinst==11){
imagem11.style.display='block';
}
else{
imagem11.style.display='none';
}

if(modinst==12){
imagem12.style.display='block';
}
else{
imagem12.style.display='none';
}

if(modinst==13){
imagem13.style.display='block';
}
else{
imagem13.style.display='none';
}

if(modinst==14){
imagem14.style.display='block';
}
else{
imagem14.style.display='none';
}

if(modinst==15){
imagem16.style.display='block';
}
else{
imagem16.style.display='none';
}

if(modinst==16){
imagem17.style.display='block';
}
else{
imagem17.style.display='none';
}

if(modinst==17){
imagem18.style.display='block';
}
else{
imagem18.style.display='none';
}

if(modinst==18){
imagem19.style.display='block';
}
else{
imagem19.style.display='none';
}
if(modinst==19){
imagem20.style.display='block';
}
else{
imagem20.style.display='none';
}

}

//Function RollDown

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");
var keeptrack;


function rolldown(){

if(keeptrack!=true){
texto_rolldown.style.display='block';
keeptrack=true;
window.scrollTo(0,document.body.scrollHeight);
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}
>>>>>>> d3099b6d8887b054b0a1b69a22c17c5bbd8f0090
