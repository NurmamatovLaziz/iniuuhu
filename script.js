function appendValue(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (e) {
    alert("Xatolik yuz berdi!");
  }
}
