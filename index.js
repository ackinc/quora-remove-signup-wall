window.addEventListener('load', removeSignupWall);

function removeSignupWall() {
  document.body.classList.remove('signup_wall_prevent_scroll');

  let signupWallWrapperNode;
  document.querySelectorAll('body > div').forEach(div => {
    if (/signup_wall_wrapper$/.test(div.id)) signupWallWrapperNode = div;
  });
  document.body.removeChild(signupWallWrapperNode);
}
