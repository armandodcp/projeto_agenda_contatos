const form = document.getElementById('form-contacts');
const names = [];
const numbers = [];

let records = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addRecord();
    updTable();
});

function addRecord() {
    const inputContactName = document.getElementById('name-contact');
    const inputContactNumber = document.getElementById('number-contact');

    if (names.includes(inputContactName.value)) {
        alert(`O contato "${inputContactName.value}" já foi cadastrado`);
    } else {
        names.push(inputContactName.value);
        numbers.push(parseFloat(inputContactNumber.value));

        let record = '<tr>';
        record += `<td>${inputContactName.value}</td>`;
        record += `<td>${inputContactNumber.value}</td>`;
        record += `<tr>`;

        records += record;

        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = records;
    }

    inputContactName.value = '';
    inputContactNumber.value = '';
}

function updTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = records;
}