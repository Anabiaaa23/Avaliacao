
document.getElementById('pedidoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const peca = document.getElementById('peca').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const email = document.getElementById('email').value.trim();



  if (!nome || !telefone || !peca || !endereco || !email) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (nome.length < 10) {
    alert('Por favor, escreva seu nome e sobrenome!');
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert('Por favor, insira um e-mail válido!');
    return;
  }

 
  const telefoneValido = /^\d{8,}$/;
  if (!telefoneValido.test(telefone)) {
    alert('Por favor, insira um telefone válido!');
    return;
  }


  if (peca.length < 5) {
    alert('Por favor, descreva melhor seu pedido!');
    return;
  }


  if (endereco.length < 10) {
    alert('Por favor, insira um endereço válido!');
    return;
  }

  alert('Pedido enviado com sucesso! Será feito com todo amor e carinho que existe na Crocheter!!');
  this.reset();
});
