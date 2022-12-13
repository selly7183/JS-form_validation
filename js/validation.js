const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
	if (!isTxt("userid", 5)) e.preventDefault();
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
