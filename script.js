
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

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert('Por favor, insira um e-mail válido!');
    return;
  }

  alert('Pedido enviado com sucesso! Será feito com todo amor e carinho que existe na Crocheter!!');
  this.reset();
});
