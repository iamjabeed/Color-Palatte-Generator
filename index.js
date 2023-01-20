const containerEl = document.querySelector(".container");
const btn = document.querySelector(".btn");

function boxGenerate() {
  containerEl.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorCode = `#${randomColor} `;
    // console.log(colorCode);

    const liEl = document.createElement("li");
    liEl.classList.add("color-container");
    containerEl.appendChild(liEl);
    liEl.innerHTML = ` <div class="color" style =background:${colorCode}></div>
  <span class="hex-code">${colorCode}</span>`;

    liEl.addEventListener("click", () => copyText(liEl, colorCode));
  }
}

function copyText(e, hexCode) {
  const hexVal = e.querySelector(".hex-code");
  navigator.clipboard
    .writeText(hexCode)
    .then(() => {
      hexVal.innerText = "COPIED";
      setTimeout(() => (hexVal.innerText = hexCode), 1000);
    })
    .catch(() => alert("Falied to copy the color code"));
}

btn.addEventListener("click", boxGenerate);
