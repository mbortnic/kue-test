var kue = require('kue'),
	jobs  = kue.createQueue();

var sequence = 0;

setInterval(
	function () {
		sequence += 1;
		(function(sequence) {
			var job = jobs.create('email', {
				title: 'Hello #' + sequence,
				to: 'michaelbortnick@hotmail.com',
				body: 'Hello World!'
			}).save();

		job.on('complete', function() {
			console.log('job' + sequence + ' completed!')
		});

		job.on('failed', function() {
			console.log('job' + sequence + ' failed!')
		});


		})(sequence);
	}, 1000
);