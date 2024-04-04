
// mascara  
const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

const handleCep = (event) => {
  let input = event.target
  input.value = cepMask(input.value)
}

const cepMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{5})(\d)/, "$1-$2")
  return value
}

const handleDoc = (event) => {
  let input = event.target
  input.value = docMask(input.value)
}
const docMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  if (value.length == 9) {
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
  }

  if (value.length == 11) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
  }
  return value
}



// mascara cpf cnpj

const handlecnpj = (event) => {
  let input = event.target
  input.value = cnpjMask(input.value)
}
const cnpjMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')

  if (value.length == 14) {
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, "$1.$2.$3/$4-$5")
  }

  if (value.length == 11) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
  }
  return value
}



// mascara data 
function formatarDataInput(input) {
  const valor = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  let formatado = "";

  if (valor.length >= 1) {
    formatado += valor.substring(0, 2);
  }

  if (valor.length > 2) {
    formatado += "/" + valor.substring(2, 4);
  }

  if (valor.length > 4) {
    formatado += "/" + valor.substring(4, 8);
  }

  input.value = formatado;
}

//mascara para rg // cpf
function formatarRgInput(input) {
  const valor = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const formatado = "";

  if (valor.length > 2) {
    formatado += valor.substring(0, 2) + ".";
  }

  if (valor.length > 5) {
    formatado += valor.substring(2, 5) + ".";
  }

  if (valor.length > 8) {
    formatado += valor.substring(5, 8) + "-";
  }

  if (valor.length > 8) {
    formatado += valor.substring(8, 9);
  }

  input.value = formatado;
}

// passagem de dados
var queryParams = new URLSearchParams();
var produtos = [];

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obter o número digitado no campo "Número" do formulário
  const numero = document.getElementById("numero").value;
  const dataValidade = document.getElementById("datavalidade").value;
  const formaPagamento = document.getElementById("forma-pag").value;
  const respOrcamento = document.getElementById("respOrcamento").value;
  const docpessoal = document.getElementById("docpessoal").value;
  const telefoneG = document.getElementById("telefone-g").value;
  const emailG = document.getElementById("email-g").value;
  const nomeC = document.getElementById("nome-c").value;
  const cpfCnpj = document.getElementById("cpf-cnpj").value;
  const contato= document.getElementById("contato").value;
  const telefoneC = document.getElementById("telefone-c").value;
  const enderecoC = document.getElementById("endereco-c").value;
  const emailC = document.getElementById("email-c").value;
  const cepC = document.getElementById("cep-c").value;
  const bairroC = document.getElementById("bairro-c").value;
  const cidadeC = document.getElementById("cidade-c").value;
  const transportador = document.getElementById("transportador").value;
  const tipofreteT = document.getElementById("tipofrete-t").value;
  const telefoneT = document.getElementById("telefone-t").value;
  const obsT = document.getElementById("obs-t").value;
  const totL = document.getElementById("tot-l").value;
  const totICMS = document.getElementById("tot-icms-incluso").value;
  const freteT = document.getElementById("frete-t").value;
  const totalT = document.getElementById("total-t").value;


  queryParams.set("numero", numero);
  queryParams.set("datavalidade", dataValidade);
  queryParams.set("forma-pag", formaPagamento);
  queryParams.set("respOrcamento", respOrcamento);
  queryParams.set("docpessoal", docpessoal);
  queryParams.set("telefone-g", telefoneG);
  queryParams.set("email-g", emailG);
  queryParams.set("nome-c", nomeC);
  queryParams.set("cpf-cnpj", cpfCnpj);
  queryParams.set("contato", contato);
  queryParams.set("telefone-c", telefoneC);
  queryParams.set("endereco-c", enderecoC);
  queryParams.set("cidade-c", cidadeC);
  queryParams.set("cep-c", cepC);
  queryParams.set("bairro-c", bairroC);
  queryParams.set("email-c", emailC);
  queryParams.set("transportador", transportador);
  queryParams.set("tipofrete-t", tipofreteT);
  queryParams.set("telefone-t", telefoneT);
  queryParams.set("obs-t", obsT);
  queryParams.set ("tot-l", totL);
  queryParams.set ("tot-icms-incluso",  totICMS );
  queryParams.set ("frete-t", freteT);
  queryParams.set ("total-t" , totalT);

  localStorage.setItem("produtos", JSON.stringify(produtos));

  const url = `documento.html?${queryParams.toString()}`;
  window.location.href = url;
}

// Registrar o evento de envio do formulário
const formulario = document.getElementById("meuFormulario");
formulario.addEventListener("submit", handleFormSubmit);

let number = 0;
function cont() {
  const cont = document.getElementById("cont");
  number ++;
  cont.style.display = "flex";
  cont.textContent = number;
}

function limparP(){
  document.getElementById("item-p").value = "";
  document.getElementById("ncm-p").value = "";
  document.getElementById("qtdade-p").value = "";
  document.getElementById("codigo-p").value = "";
  document.getElementById("vlrunitario-p").value = "R$ ";
  document.getElementById("vlrtotal-p").value = "R$ ";
  document.getElementById("descricao-p").value = "";
  document.getElementById("detalhes-p").value = "";
}

function handleProductSubmit(event) {
  event.preventDefault();
  cont();
  
  const itemP = document.getElementById("item-p").value;
  const ncmP = document.getElementById("ncm-p").value;
  const qtdadeP = document.getElementById("qtdade-p").value;
  const codigoP = document.getElementById("codigo-p").value;
  const vlrunitarioP = document.getElementById("vlrunitario-p").value;
  const vlrtotalP = document.getElementById("vlrtotal-p").value;
  const descricaoP = document.getElementById("descricao-p").value;
  const detalhesP = document.getElementById("detalhes-p").value;

  const elemento =[itemP , ncmP , qtdadeP , codigoP , vlrunitarioP , vlrtotalP , descricaoP , detalhesP];
  produtos.push(elemento);
  // console.log(produtos);

  limparP();
}

const add = document.getElementById("add");
add.addEventListener("click", handleProductSubmit);
