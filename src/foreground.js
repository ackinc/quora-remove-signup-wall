const hostToRemoverMap = new Map([
  ["quora.com", removeQuoraSignupWall],
  ["www.quora.com", removeQuoraSignupWall],
]);

main();

function main() {
  const remover = hostToRemoverMap.get(window.location.hostname);
  if (remover) setInterval(remover, 500);
}

function removeQuoraSignupWall() {
  const signupModal = document.querySelector(".qu-zIndex--modal_desktop");
  if (!signupModal) return;

  const contentModal = signupModal.nextElementSibling;
  if (!contentModal) return;

  signupModal.parentNode.removeChild(signupModal);
  contentModal.classList.remove("qu-overflow--hidden");
  contentModal.style.filter = ""; // remove blur effect
}
