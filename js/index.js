// Bloquear cópia de conteúdo
document.addEventListener("copy", function (e) {
  e.preventDefault();
  alert("Conteúdo Bloqueado");
});
