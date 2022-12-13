const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
	if (!isTxt("userid", 5)) e.preventDefault();
	if (!isTxt("comments", 10)) e.preventDefault();
	if (!isEmail("email", 10)) e.preventDefault();
	if (!isChecked("gender")) e.preventDefault();
	if (!isChecked("hobby")) e.preventDefault();
	if (!isSelect("edu")) e.preventDefault();
});

function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len) {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(`텍스트를 ${len}글자 이상 입력하세요.`);
		input.closest("td").append(errMsg);

		return false;
	}
}

function isEmail(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len && /@/.test(txt)) {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		return true;
	} else {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(`@를 포함한 메일주소를 ${len}글자 이상 입력하세요.`);
		input.closest("td").append(errMsg);
		return false;
	}
}

function isChecked(name) {
	const inputs = form.querySelectorAll(`[name = ${name}]`);
	let isChecked = false;

	for (let input of inputs) if (input.checked) isChecked = true;

	if (isChecked) {
		const errMsgs = inputs[0].closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = inputs[0].closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append("필수 입력 항목을 하나 이상 체크해주세요.");
		inputs[0].closest("td").append(errMsg);
		return false;
	}
}

function isSelect(name) {
	const sel = form.querySelector(`[name=${name}]`);
	const sel_index = sel.options.selectedIndex;
	const val = sel.options[sel_index].value;

	if (val !== "") {
		const errMsgs = sel.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = sel.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append("항목을 선택해주세요.");
		sel.closest("td").append(errMsg);
		return false;
	}
}
