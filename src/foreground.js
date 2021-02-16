const hostToRemoverMap = new Map([
  ["quora.com", removeQuoraSignupWall],
  ["www.quora.com", removeQuoraSignupWall],
]);

const remover = getRemover(window.location.hostname);
// TODO: BUG: content scripts cannot access chrome.action directly
chrome.action.onClicked.addListener(() => {
  console.log("Listener!");
  remover();
});

function noOp() {}

function removeQuoraSignupWall() {
  console.log("Here!");
  document.body.classList.remove("signup_wall_prevent_scroll");

  let signupWallWrapperNode;
  document.querySelectorAll("body > div").forEach((div) => {
    if (/signup_wall_wrapper$/.test(div.id)) signupWallWrapperNode = div;
  });
  document.body.removeChild(signupWallWrapperNode);
}

function getRemover(host) {
  console.log(host);
  return hostToRemoverMap.get(host) || noOp;
}
