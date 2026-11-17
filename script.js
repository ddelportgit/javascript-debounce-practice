const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");

let timer;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    output.textContent = `Searching for: ${searchInput.value}`;
  }, 1000);
});
