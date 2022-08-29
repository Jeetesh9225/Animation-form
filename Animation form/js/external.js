const lables = document.querySelectorAll(".form-control lable");

lables.forEach((lable) => {
  lable.innerHTML = lable.innertext
    .split("")
    .map((letter, idx) => (
      <span style="transition-delay:${idx * 50}ms">${letter}</span>
    ))
    .join("");
});
