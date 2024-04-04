
  function Voltar() {
    var forms = document.getElementsByTagName("meuFormulario");
  
    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }
  
    // Redireciona para a nova página
    window.location.href = "index.html";
  }

  


// imprimir
function imprimir() {
  window.print();
}

// Obter a referência da div
const divDataHora = document.getElementById("datahora");
// Função para obter a data atual no formato "dd/mm/aaaa"
function obterDataAtual() {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, "0");
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const ano = dataAtual.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para obter o horário atual no formato "hh:mm"
function obterHorarioAtual() {
  const dataAtual = new Date();
  const horas = String(dataAtual.getHours()).padStart(2, "0");
  const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
  return `${horas}:${minutos}`;
}

// Função para atualizar a div com a data e o horário atual
function atualizarDataHora() {
  const dataAtual = obterDataAtual();
  const horarioAtual = obterHorarioAtual();
  divDataHora.textContent = `${dataAtual} ${horarioAtual}`;
  document.getElementById("data").value = dataAtual;
}

// Atualizar a div com a data e o horário inicialmente
atualizarDataHora();

// Atualizar a div a cada segundo (1000 milissegundos)
// setInterval(atualizarDataHora, 1000);


// Obter os valores dos parâmetros de consulta (query string)
var queryString = window.location.search;
var produtos;

var urlParams = new URLSearchParams(queryString);

const storedProdutos = localStorage.getItem("produtos");
  if (storedProdutos) {
    produtos = JSON.parse(storedProdutos);
  }

function matriz(){
  for (let index = 0; index < produtos.length; index++) {
    
    var card = document.getElementById("camp");
    var element = document.createElement("div");
    element.classList.add("campo");
    
    const item = produtos[index][0];
    const codigo = produtos[index][3];
    const descricao = produtos[index][6];
    const NCM = produtos[index][1];
    const QTD = produtos[index][2];
    const vlrUnit = produtos[index][4];
    const vlrTotal = produtos[index][5];
    const detalhes = produtos[index][7];

    element.innerHTML = 
        `
        <div class="line-box">
        <div class="box">Item</div>
        <div class="box">Código</div>
        <div class="box">Descrição</div>
        <div class="box">NCM</div>
        <div class="box">Qtd</div>
        <div class="box">Vlr Unitario</div>
        <div class="box">Vlr Total</div>
      </div>
      <div class="line-box">
        <input type="text" id="itemP" value="${item}"/>
        <input type="text" id="codigoP" value="${codigo}"/>
        <input type="text" id="descricaoP" value="${descricao}"/>
        <input type="text" id="ncmP" value="${NCM}"/>
        <input type="text" id="qtdadeP" value="${QTD}"/>
        <input type="text" id="vlrunitarioP"value="${vlrUnit}"/>
        <input type="text" id="vlrtotalP"value="${vlrTotal}"/>
      </div>
  
      <div id="details" class="line-box">
        <div class="box">Detalhes:</div>
      </div>
      <div id="details" class="line-box">
        <textarea name="" id="detalhesP" cols="30" rows="10">${detalhes}</textarea>
      </div>
        `
    card.appendChild(element);
  }
}
matriz();

var numero = urlParams.get('numero');
var dataValidade = urlParams.get('datavalidade');
var formaPagamento = urlParams.get('forma-pag')
var respOrcamento = urlParams.get('respOrcamento');
var domcumentoPessoal = urlParams.get('docpessoal');
var telefoneG= urlParams.get('telefone-g');
var emailG= urlParams.get('email-g');
var nomeG= urlParams.get('nome-c');
var cpfCnpj= urlParams.get('cpf-cnpj');
var contato = urlParams.get('contato');
var telefoneC = urlParams.get('telefone-c');
var emailC = urlParams.get('email-c');
var cepC = urlParams.get('cep-c');
var bairroC = urlParams.get('bairro-c');
var cidadeC = urlParams.get('cidade-c');
var enderecoC = urlParams.get('endereco-c');

// var itemP = urlParams.get('item-p');
// var ncmP = urlParams.get('ncm-p');
// var qtdadeP = urlParams.get('qtdade-p');
// var codigoP = urlParams.get('codigo-p');
// var descricaoP = urlParams.get('descricao-p');
// var vlrunitarioP = urlParams.get('vlrunitario-p'); 
// var vlrtotalP = urlParams.get('vlrtotal-p');
// var detalhesP = urlParams.get('detalhes-p');

var transportador = urlParams.get('transportador');
var tipofreteT = urlParams.get('tipofrete-t');
var telefoneT = urlParams.get('telefone-t');
var obsT = urlParams.get('obs-t');
var totL = urlParams.get('tot-l');
var totICMS = urlParams.get ('tot-icms-incluso');
var freteT = urlParams.get ('frete-t');
var totalT = urlParams.get('total-t');


// Definir os valores nos campos correspondentes no documento HTML

document.getElementById("numeroDocumento").value = numero;
document.getElementById("dataDocumento").value = dataValidade;
document.getElementById("formaPagamento").value = formaPagamento;
document.getElementById("respOrcamentoo").value = respOrcamento;

document.getElementById("reporcamento").innerText = `Usuário: ${respOrcamento}`;


document.getElementById("docPessoal").value = domcumentoPessoal;
document.getElementById("telefoneG").value = telefoneG;
document.getElementById("emailG").value = emailG;
document.getElementById("nomeG").value = nomeG;
document.getElementById("cpfCnpj").value = cpfCnpj;
document.getElementById("Contato").value = contato;
document.getElementById("telefoneC").value = telefoneC;
document.getElementById("enderecoC").value = enderecoC;
document.getElementById("cidadeC").value = cidadeC;
document.getElementById("bairroC").value = bairroC;
document.getElementById("cepC").value = cepC;
document.getElementById("emailC").value = emailC;

// document.getElementById("itemP").value = itemP;
// document.getElementById("ncmP").value = ncmP;
// document.getElementById("qtdadeP").value = qtdadeP;
// document.getElementById("codigoP"). value = codigoP;
// document.getElementById("vlrunitarioP").value = vlrunitarioP;
// document.getElementById("vlrtotalP").value = vlrtotalP;
// document.getElementById("descricaoP").value = descricaoP;
// document.getElementById("detalhesP"). value = detalhesP;

document.getElementById("trasnportadorT").value = transportador;
document.getElementById("tipofreteT").value = tipofreteT;
document.getElementById("telefoneT").value = telefoneT;
document.getElementById("obsT").value = obsT;
document.getElementById("totL").value = totL;
document.getElementById("totICMS").value = totICMS;
document.getElementById("freteT").value = freteT;
document.getElementById("totalT").value = totalT

