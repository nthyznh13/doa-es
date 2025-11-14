const tipoSelect = document.getElementById('tipo');
const identificacao = document.getElementById('identificacao');
const form = document.getElementById('formDoacao');

if (tipoSelect) {
  tipoSelect.addEventListener('change', () => {
    const tipo = tipoSelect.value;
    if (tipo === 'fisica') {
      identificacao.innerHTML = `
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="000.000.000-00" required>
      `;
    } else if (tipo === 'empresa') {
      identificacao.innerHTML = `
        <label for="cnpj">CNPJ</label>
        <input type="text" id="cnpj" placeholder="00.000.000/0000-00" required>
      `;
    } else {
      identificacao.innerHTML = '';
    }
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("🎄 Obrigado por sua doação! Entraremos em contato em breve. 💚");
    form.reset();
    identificacao.innerHTML = '';
  });
}
// 🎵 Som de clique suave
let clickSound;
try {
  clickSound = new Audio('click.mp3');
} catch (e) {
  console.warn("Som de clique não encontrado.");
}


const contactBubble = document.getElementById('contactBubble');
const contactOptions = document.getElementById('contactOptions');

if (contactBubble) {
  contactBubble.addEventListener('click', () => {
    if (clickSound) clickSound.play(); 
    contactOptions.style.display = 
      contactOptions.style.display === 'flex' ? 'none' : 'flex';
  });
}

function abrirWhatsApp() {
  if (clickSound) clickSound.play();
  const numero = "5511999999999"; // ← coloque o número real do projeto aqui
  window.open(`https://wa.me/${numero}?text=Olá! Gostaria de ser patrocinador do projeto Natal Solidário.`, '_blank');
}

function abrirEmail() {
  if (clickSound) clickSound.play();
  window.location.href = "mailto:natalsolidario@projeto.com?subject=Quero ser patrocinador&body=Olá! Gostaria de saber mais sobre o projeto.";
}