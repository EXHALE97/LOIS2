function clickCheckFormula(firstFormula, secondFormula) {
    var answer = document.getElementById("answer");
	var table = document.getElementById("truthTable");
        answer.innerHTML = "";
		truthTable.innerHTML = "";
	
    var checkFormulaAnswer = check(firstFormula, secondFormula);
	if (checkFormulaAnswer) {
        answer.innerHTML += `<div>Формула ${secondFormula} следует из формулы ${firstFormula}</div>`
    } else if (!checkFormulaAnswer) {
        answer.innerHTML += `<div>Формула ${secondFormula} не следует из формулы ${firstFormula}</div>`
    }
}
// Функции для тестов
  function clickYes(firstFormula, secondFormula) {
    var answer = document.getElementById("answerTest");
	var table = document.getElementById("truthTable");
        answer.innerHTML = "";
		truthTable.innerHTML = "";
  
    var checkFormulaAnswer = check(firstFormula, secondFormula);
	if (checkFormulaAnswer) {
        answer.innerHTML += "Верно"
    } else if (!checkFormulaAnswer) {
        answer.innerHTML += "Неверно"
    }
  }

  function clickNo(firstFormula, secondFormula) {
    var answer = document.getElementById("answerTest");
	var table = document.getElementById("truthTable");
        answer.innerHTML = "";
		truthTable.innerHTML = "";
  
    var checkFormulaAnswer = check(firstFormula, secondFormula);
	if (checkFormulaAnswer) {
        answer.innerHTML += "Неверно"
    } else if (!checkFormulaAnswer) {
        answer.innerHTML += "Верно"
    }
  }
