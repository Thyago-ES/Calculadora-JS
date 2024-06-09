const result = document.querySelector("#result");
const account = document.querySelector("#account");

numZero();

function insert(num) {
	const lastChar = account.innerHTML.slice(-1);

	if (account.innerHTML.length > 30) {
		alert("Limite de caracteres excedido!");
	} else {
		if (
			["+", "-", "*", "/"].includes(lastChar) &&
			["+", "-", "*", "/"].includes(num)
		) {
			alert("Dois operadores consecutivos não são permitidos!");
		} else {
			if (["*", "/"].includes(num) && account.innerHTML === "") {
				alert("Não é possível começar uma conta com os operadores (* ou /)!");
			} else {
				account.innerHTML += num;
			}
		}
	}

	numZero();
}

function clean() {
	account.innerHTML = "";
	result.innerHTML = "";

	numZero();
}

function backspace() {
	account.innerHTML = account.innerHTML.slice(0, -1);

	numZero();
}

function calculate() {
	if (account.innerHTML !== "") {
		account.innerHTML = result.innerHTML;
		result.innerHTML = "";
	}
}

function prevResult() {
	try {
		result.innerHTML = eval(account.innerHTML);
	} catch (error) {
		result.innerHTML = "";
	}
}

function numZero() {
	if (account.innerHTML) {
		prevResult();
	} else {
		result.innerHTML = 0;
	}
}
