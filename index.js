'use strict';
const alfy = require('alfy');

// const token = process.env.token;
const token = alfy.config.get('token');
async function run() {
	return await alfy.fetch('https://oapi.dingtalk.com/robot/send?access_token=' + token, {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			msgtype: 'text',
			text: {
				content: alfy.input
			}
		})
	});
}

run().then(function (res) {
	console.warn(res);
});
