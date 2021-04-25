// 要素の取得
const Input = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const container = document.getElementById("memo-container")

let memos = []
if (localStorage.memos) {
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)
}

button.onclick = function() {
  memos.push(Input.value)
  //   localstorageに保存
  localStorage.memos = JSON.stringify(memos)

  container.innerHTML = ""

  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const Div = document.createElement("div")
    Div.textContent = text

    container.append(Div)
  }
}

// const updateMemoContainer = function() {
//   container.innerHTML = ""

//   //   for (let i = 0; i < memos.lenth; i++) {
//   //     const text = memos[i]
//   //     const div = document.createElement("")
//   //     div.textContent = text

//   //     container.append(div)
//   //   }
// }
