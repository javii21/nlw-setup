const formElement_ = document.querySelector('#form-habits');
const buttonElement_ = document.querySelector('#button');
const nlwSetup = new NLWSetup(formElement_);

buttonElement_.addEventListener('click', add);

formElement_.addEventListener('change', save);
function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Dia ja incluido ❌')
    return
  }

  alert('Adicionado com sicesso ✅');
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('habits@nlwSetup', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('habits@nlwSetup')) || {};

// const data = {
//   run: ['01-01', '01-02', '01-03', '01-04', '01-05'],
//   water: ['01-01', '01-02', '01-03', '01-08'],
//   food: ['01-01', '01-02', '01-03', '01-06', '01-07',]

// }
nlwSetup.setData(data);
nlwSetup.load();