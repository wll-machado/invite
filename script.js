const gameOver = document.getElementById("gameOver");
const yesFlow = document.getElementById("yesFlow");
const yesContent = document.getElementById("yesContent");
const music = document.getElementById("music");


// ===== BOTÃO NÃO =====
function handleNo() {
  // mostra overlay
  gameOver.classList.remove("hidden");

  // esconde fluxo do YES (caso esteja aberto)
  yesFlow.classList.add("hidden");

  // esconde TODOS os botões da tela
  const buttons = document.querySelector(".buttons");
  if (buttons) buttons.style.display = "none";

  // esconde possíveis imagens do fluxo
  yesContent.innerHTML = "";
}

// ===== RESTART =====
function restartGame() {
  location.reload();
}

// ===== BOTÃO YES =====
function handleYes() {
  yesFlow.classList.remove("hidden");
  buttons.style.display = "none";

  yesContent.innerHTML = `
    <img src="assets/img1.png">
    <h2>Tem certeza?</h2>
    <button onclick="nextStep1(true)">Sim</button>
    <button onclick="handleNo()">Não</button>
  `;
}

// ===== PASSO 2 =====
function nextStep1(confirm) {
  if (!confirm) return handleNo();

  yesContent.innerHTML = `
    <img src="assets/img2.png">
    <h2>Mas e nós, vai mesmo nos abandonar?</h2>
    <button onclick="finalStep(true)">Sim</button>
    <button onclick="handleNo()">Não</button>
  `;
}

// ===== FINAL =====
function finalStep(confirm) {
  if (!confirm) return handleNo();

  // toca música
  music.play();

  // remove overlays e botões
  yesFlow.classList.add("hidden");
  document.querySelector(".buttons").style.display = "none";

  // mensagem final
  const finalMsg = document.createElement("h1");
  finalMsg.innerText = "Beije seu namorado 💖";
  finalMsg.style.position = "absolute";
  finalMsg.style.top = "40%";
  finalMsg.style.color = "purple";

  document.body.appendChild(finalMsg);
}