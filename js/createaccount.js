function pageLoad() {
	document.getElementById("createbutton").onclick = createAccount;

	var accountInfoList = [];

	function createAccount(){
		var accname = document.getElementById("accname").value;
		var depositAmount = parseInt(document.getElementById("deposit").value);
		var myAccount = new Account(accname, depositAmount);
		accountInfoList.push(myAccount);
		printToTextArea(accountInfoList);
	}

	function Account(name, amount){
		this.name = name;
		this.amount = amount;
	}

	function printToTextArea(accountInfoList) {
		document.getElementById("mytextarea").innerHTML = "";
		accountInfoList.forEach(element => {
			document.getElementById("mytextarea").innerHTML += "Account Name: " + element.name + " Deposit: " + element.amount + "\n";
		});
	}
}

window.onload = pageLoad;


