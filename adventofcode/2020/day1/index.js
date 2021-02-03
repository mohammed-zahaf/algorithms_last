const fs = require('fs');
const GOAL = 2020;

function challenge1(expenses) {
	let location = null;
	for (let i = 0; i < expenses.length; i++) {
		for (let j = 0; j < expenses.length; j++) {
			if(i !== j && (expenses[i] + expenses[j]) === GOAL) {
				location = {i, j};
				break;
			}

			if (location) break;
		}
	}
	return expenses[location.i] * expenses[location.j];
}

function challenge2(expenses) {
	let location = null;
	for (let i = 0; i < expenses.length; i++) {
		for (let j = 0; j < expenses.length; j++) {
			for (let k = 0; k < expenses.length; k++) {
				const isValid = expenses[i] && expenses[j] && expenses[k];
				if (isValid && (expenses[i] + expenses[j] + expenses[k]) === GOAL) {
					location = {i, j, k};
					break;
				}
			}
			if (location) break;
		}
		if (location) break;
	}
	return expenses[location.i] * expenses[location.j] * expenses[location.k];
}



fs.readFile(`${__dirname}/expense.txt`, (err, data) => {
	const expenses = data.toString().split('\n').map(expense => +expense);
	expenses.pop();
	const productSum1 = challenge1(expenses);
	const productSum2 = challenge2(expenses);

	console.log('ZM:: expenses.challenge1', productSum1);
	console.log('ZM:: expenses.challenge2', productSum2);
});
