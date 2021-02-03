const fs = require('fs'),
	es = require('event-stream');
let count1 = 0, count2 = 0;

function isValidPassword1(pattern, password) {
	const [limit, char] = pattern.split(' ');
	const [min, max] = limit.split('-');
	const count = (password.match(new RegExp(char, "g")) || []).length;
	return count >= min && count <= max;
}

function isValidPassword2(pattern, password) {
	const [limit, char] = pattern.split(' ');
	const [first, second] = limit.split('-');
	return password[first-1] === char ^ password[second-1] === char;
}

const s = fs.createReadStream(`${__dirname}/passwords.txt`)
	.pipe(es.split())
	.pipe(es.mapSync(function(line) {
			//pause the readstream
			s.pause();
			if (line) {
				const [pattern, password] = line.split(':');
				const isValid1 = isValidPassword1(pattern, password.trim());
				const isValid2 = isValidPassword2(pattern, password.trim());
				isValid1 ? count1++ : null;
				isValid2 ? count2++ : null;
			}
			s.resume();

		}).on('error', function(err) {
			console.log('Error:', err);

		}).on('end', function() {
			console.log('Finish reading.', count1);
			console.log('Finish reading.', count2);
		})
	);
