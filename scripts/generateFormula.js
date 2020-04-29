
/**
 * Автор Евграфова Ю.Е.
 */
function generateTest() {
    let symbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    document.getElementById("secondFormulaTest").value = "";
    document.getElementById("firstFormulaTest").value = "";

    let secondFormula = generateFormula(symbol);
    let lettersFromFormula = getLettersFromFormula(secondFormula);
    let firstFormula = generateFormula(lettersFromFormula);

    document.getElementById("secondFormulaTest").value = secondFormula;
    document.getElementById("firstFormulaTest").value = firstFormula;
}

/**
	* Автор Феденко Е.С.
	*/
function generateFormula(symbolsArray) {
    let number = rand(1,10);
    let symbol = symbolsArray;
    let negation = "!";
    let binaryOperation = ["&","|"];
    let openingBracket = "(";
    let closingBracket = ")";
    let index = rand(0,symbol.length);
    let formula = symbol[index];
    for (let iteration = 0 ; iteration < number ; iteration++){
        index = rand(0,2);
        if (index===0){
            do {
                index = rand(0, formula.length);
            }while(!symbol.includes(formula[index]));
            formula = formula.substr(0,index) +
                openingBracket + formula[index] + binaryOperation[rand(0,binaryOperation.length)] +
                symbol[rand(0,symbol.length)] + closingBracket + formula.substr(index+1, formula.length);
        }
        else {
            do {
                index = rand(0, formula.length);
            }while(!symbol.includes(formula[index]));
            formula = formula.substr(0,index) + openingBracket + negation +  formula[index]  + closingBracket +
                formula.substr(index+1, formula.length);
        }
    }
    return formula;
}

/**
 * Автор Евграфова Ю.Е.
 */
function getLettersFromFormula(formula) {
    let symbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let symbolArray = [];

    for (let i=0; i<symbol.length; i++){
        if (symbol.includes(formula[i]) && !(symbolArray.includes(formula[i]))){
             symbolArray[symbolArray.length] = formula[i];
        }
    }
    return symbolArray;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
