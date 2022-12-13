const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
	if (!isTxt("userid")) e.preventDefault();
});

function isTxt(name) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt !== "") {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append("텍스트를 입력하세요.");
		input.closest("td").append(errMsg);
	}

	return false;
}
