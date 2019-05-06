'use strict';
const alfy = require('alfy');

// const token = process.env.token;
const token = alfy.config.get('token');
async function run() {
// Run JavaScript file through OSA
	// note the eval method after require ¬

// Run JavaScript text through OSA
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
	alfy.log(res);
	alfy.output([{
		title: '钉钉推送',
		subtitle: '钉钉机器人推送',
		valid: true,
		icon: {
			path: 'icon.png'
		}
	}]);
});
