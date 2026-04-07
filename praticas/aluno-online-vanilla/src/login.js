const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valido = true;

  // Limpa erros anteriores
  erroEmail.textContent = "";
  erroSenha.textContent = "";

  // Validação email
  if (email.value.trim() === "") {
    erroEmail.textContent = "O campo de email é obrigatório.";
    valido = false;
  }

  // Validação senha
  if (senha.value.trim() === "") {
    erroSenha.textContent = "O campo de senha é obrigatório.";
    valido = false;
  }

  // Se tudo estiver ok
  if (valido) {
    alert("Login realizado com sucesso!");
  }
});