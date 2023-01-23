// Maneira de usar as tag do html dentro do Js.    |document.body.style.backgroundColor = "Red"| Nesse caso eu acessei a tag body dentro do html e mudei sua cor usando style e backgroundColor.
// Maneira de fazer com que o Js tenha algum tipo de ação dentro da tag do HTML. |document.querySelector("input").click()|
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("Habitos@Diarios", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("Habitos@Diarios")) || {}
nlwSetup.setData(data)
nlwSetup.load()
