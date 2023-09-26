let including = false;
let contactList = [];
let indexContactList = 0;
let includeButton = document.getElementById('includeButton');
let editButton = document.getElementById('editButton');
let saveButton = document.getElementById('saveButton');
let cancelButton = document.getElementById('cancelButton');
let deleteButton = document.getElementById('deleteButton');

let firstName = document.getElementById('firstName');
let surName = document.getElementById('surName');
let address = document.getElementById('address');
let celNumber = document.getElementById('celNumber');

function buttonInclude(){
	including = true;
	editingMode();
}

function buttonEdit(){
	including = false;
	editingMode();
}

function buttonSave(){
	let contact = {
		firstName: document.getElementById('firstName').value,
		subName: document.getElementById('surName').value,
		address: document.getElementById('address').value,
		celNumber: document.getElementById('celNumber').value
	};
	if (including) {
		indexContactList = contactList.push(contact);
		indexContactList--;
	}else{
		contactList[indexContactList].firstName = contact.firstName;
		contactList[indexContactList].subName = contact.subName;
		contactList[indexContactList].address = contact.address;
		contactList[indexContactList].celNumber = contact.celNumber;
	}
	including = false;
	viewMode();
	loadingElements();
}

function buttonCancel(){
	viewMode();
	loadingElements();
}

function buttonDelete(){
	contactList.splice(indexContactList, 1);
	indexContactList--;

	if (!contactList.length){
		indexContactList = 0;
	}
	loadingElements();
}

function moveToFirst(){
	indexContactList = 0;
	viewMode();
	loadingElements();
}
function moveBackward(){
	indexContactList--;
	if (indexContactList < 0){
		indexContactList = 0;
	}
	viewMode();
	loadingElements();
}
function moveForward(){
	indexContactList++;
	if (indexContactList > contactList.length-1){
		indexContactList--;
	}
	viewMode();
	loadingElements();
}
function moveToLast(){
	if (!contactList.length){
		indexContactList = 0;
	} else {
		indexContactList = contactList.length;
		indexContactList--;
	}
	viewMode();
	loadingElements();
}

function loadingElements() {
	if (!contactList.length){
		document.getElementById('firstName').value = '';
		document.getElementById('surName').value = '';
		document.getElementById('address').value = '';
		document.getElementById('celNumber').value = '';
	} else {
		document.getElementById('firstName').value = contactList[indexContactList].firstName;
		document.getElementById('surName').value = contactList[indexContactList].subName;
		document.getElementById('address').value = contactList[indexContactList].address;
		document.getElementById('celNumber').value = contactList[indexContactList].celNumber;
	}
}

function editingMode(){
	//enable inputs
	firstName.disabled = false;
	surName.disabled = false;
	address.disabled = false;
	celNumber.disabled = false;

	//enable and disable buttons
	includeButton.disabled = true;
	editButton.disabled = true;
	saveButton.disabled = false;
	cancelButton.disabled = false;
	deleteButton.disabled = true;

	//clean input values
	if (including){
		firstName.value = '';
		surName.value = '';
		address.value = '';
		celNumber.value = '';
	}
}

function viewMode(){
	//disable inputs
	firstName.disabled = true;
	surName.disabled = true;
	address.disabled = true;
	celNumber.disabled = true;

	//enable and disable buttons
	includeButton.disabled = false;
	editButton.disabled = false;
	saveButton.disabled = true;
	cancelButton.disabled = true;
	deleteButton.disabled = false;

	//clean input values
	if (including){
		firstName.value = '';
		surName.value = '';
		address.value = '';
		celNumber.value = '';
	}
}