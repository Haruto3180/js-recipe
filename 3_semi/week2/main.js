// 要素の取得
const Input = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const container = document.getElementById("memo-container")

let memos = []

button.onclick = function() {
  memos.push(Input.value)
  updateMemoContainer()
}

const updateMemoContainer = function() {
  container.innerHTML = ""

  for (let i = 0; i < memos.lenth; i++) {
    const text = memos[i]
    const div = document.createElement("")
    div.textContent = text
    memo
  }
}
