const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");
const button = document.querySelector("#scroll-button");

let timer;
let canRun = true;

function handleEvent() {
  if (!canRun) return;

  output.textContent = "Event handled!";

  canRun = false;

  setTimeout(() => {
    canRun = true;
  }, 2000);
}

button.addEventListener("click", handleEvent);

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  if (searchInput.value === "") {
    output.textContent = "Please enter a search term.";
    return;
  }

  timer = setTimeout(() => {
    output.textContent = `Searching for: ${searchInput.value}`;
  }, 1000);
});
