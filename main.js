import { cetak1 } from "./cetak1";
import { cetak2 } from "./cetak2";
import { getdata } from "./getdata";

// modal
let modal = document.createElement("div");
modal.id = "myModal";
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close" id="closeModalBtn">&times;</span>
    <div>
      <h2>Template 1</h2>
      <button id="ctk-button-1">Generate</button>
    </div>
    <div>
      <h2>Template 2</h2>
      <button id="ctk-button-2">Generate</button>
    </div>
  </div>
`;
document.body.appendChild(modal);

let span = document.getElementById("closeModalBtn");
span.addEventListener("click", function () {
  modal.style.display = "none";
});

let cetakBtn1 = document.getElementById("ctk-button-1");
cetakBtn1.addEventListener("click", async function () {
  const data = await getdata();
  cetak1(data);
});

let cetakBtn2 = document.getElementById("ctk-button-2");
cetakBtn2.addEventListener("click", async function () {
  const data = await getdata();
  cetak2(data);
});

// button
let button = document.createElement("button");
button.innerText = "Generate CV";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "green";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.zIndex = 100;

button.addEventListener("click", function () {
  modal.style.display = "block";
});

document.body.appendChild(button);
