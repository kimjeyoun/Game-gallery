// 전역변수 부분
const game = document.querySelector(".first-item");
const btnP = document.querySelector("#btn-plus");
const divP = document.querySelector(".div-parent");
const main = document.querySelector(".main");
const Body = document.body;

// 게임설명 ui변수 부분
const ui = document.querySelector(".item-ui");
const btnD = document.querySelector("#btn-delete");
const btnInitialization = document.querySelector("#btn-initialization");
const inputText = document.querySelector(".input-ui");
const uiTextOk = document.querySelector(".uiTextOk");
const pTag = document.querySelector(".p-tag");

// let변수
let onoff = false;

// 게임설명 ui기능 구현
game.addEventListener("click", () => {
  btnP.disabled = true;
  onoff = true;
  if (onoff === true) {
    uiTextOk.addEventListener("click", () => {
      let gameText = inputText.value;
      pTag.innerHTML = gameText;
      inputText.style.display = "none";
      uiTextOk.style.display = "none";
    });

    ui.style.display = "inline-block";
    ui.style.boxShadow = "rgba(0,0,0,0.5) 0 0 0 9999px";
  }
});
btnD.addEventListener("click", () => {
  onoff = false;
  btnP.disabled = false;
  if (onoff === false) {
    // 내용 초기화 부분 코드
    inputText.value = "";
    inputText.style.display = "inline-block";
    uiTextOk.style.display = "inline-block";
    ui.style.display = "none";
  }
  if (!(pTag.innerHTML === " ")) {
    inputText.style.display = "none";
    uiTextOk.style.display = "none";
  }
});
btnInitialization.addEventListener("click", () => {
  pTag.innerHTML = "";
  inputText.value = "";
  inputText.style.display = "inline-block";
  uiTextOk.style.display = "inline-block";
});

btnP.addEventListener("click", () => {
  // 엘리먼트 생성 구간
  const newItem = document.createElement("div");
  const newP = document.createElement("p");
  const inputTitle = document.createElement("input");
  const btnOk = document.createElement("button");
  const inputFile = document.createElement("input");
  const deleteButton = document.createElement("button");

  // 속성&타입 설정 구간
  inputTitle.setAttribute("class", "inputTitle");
  inputTitle.setAttribute("placeholder", "게임 제목을 입력해주세요.");
  newP.setAttribute("class", "titleP");
  inputFile.setAttribute("type", "file");
  inputFile.setAttribute("accept", "image/*");
  inputFile.setAttribute("class", "inputFile");
  newItem.setAttribute("class", "newItem");
  deleteButton.setAttribute("class", "deleteButton");
  btnOk.setAttribute("class", "btnOk");

  // 텍스트 설정 구간
  btnOk.textContent = "확인";
  deleteButton.textContent = "delete";

  // 버튼 이벤트 처리 구간
  btnOk.onclick = () => {
    newP.innerHTML = inputTitle.value;
    inputTitle.style.display = "none";
    btnOk.style.display = "none";
  };

  inputFile.onClick = () => {
    inputTitle.style.display = "none";
  };

  deleteButton.addEventListener("click", () => {
    newItem.parentNode.removeChild(newItem);
  });

  // 이미지처리 구간
  inputFile.addEventListener("change", function upLoadFile() {
    const newImg = document.createElement("img");
    const div = document.createElement("div");
    let ramdomId = Math.random().toString();
    inputFile.setAttribute("id", ramdomId);
    let file = document.getElementById(ramdomId).files[0];
    let reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        newImg.src = reader.result;
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
    newItem.appendChild(newImg);
    newItem.appendChild(div);
    div.appendChild(deleteButton);
    inputFile.style.display = "none";

    // 게임ui설정
    newImg.addEventListener("click", () => {
      onoff = true;
      btnP.disabled = true;
      if (onoff === true) {
        uiTextOk.addEventListener("click", () => {
          let gameText = inputText.value;
          pTag.innerHTML = gameText;
          inputText.style.display = "none";
          uiTextOk.style.display = "none";
        });
        ui.style.display = "inline-block";
        ui.style.boxShadow = "rgba(0,0,0,0.5) 0 0 0 9999px";
      }
    });
  });

  divP.appendChild(newItem);
  newItem.appendChild(inputTitle);
  newItem.appendChild(btnOk);
  newItem.appendChild(newP);
  newItem.appendChild(inputFile);

  btnP.parentNode.removeChild(btnP);
  divP.appendChild(btnP);
});
