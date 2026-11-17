const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");

let timer;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  if (searchInput.value === "") {
    output.textContent = "Please eneter a search term.";
  }

  timer = setTimeout(() => {
    output.textContent = `Searching for: ${searchInput.value}`;
  }, 1000);
});
