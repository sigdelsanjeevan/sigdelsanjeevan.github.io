function calculateTip() {
	let subTotal = parseInt(document.getElementById("subtotal").value);
	let tipPercentage = parseInt(document.getElementById("tip-percentage").value);

	let totalTip = tipPercentage * subTotal * 0.01;

	document.getElementById("total-tip").innerHTML = "$ " + totalTip;

	let totalAmount = subTotal + totalTip;

	document.getElementById("total-amount").innerHTML = "$ " + totalAmount;
}