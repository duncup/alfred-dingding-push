'use strict';
const alfy = require('alfy');

async function run() {
  const config = alfy.config;
  let jsonObj;
  try {// 如果格式为JSON则已完成输入，否则跳出配置存储逻辑。
    jsonObj = JSON.parse(alfy.input.toString());
    if (!config.has(jsonObj.name)){
      throw new Error('目标机器人不存在。');
    }
    const token = alfy.config.get('token');
    return await alfy.fetch('https://oapi.dingtalk.com/robot/send?access_token=' + token, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonObj.msg)
    });
  }catch (err) {
    alfy.error(err);
  }
}

run().then(function () {
  alfy.output([{
    title: '推送成功',
    subtitle: '钉钉机器人推送',
    valid: true,
    icon: {
      path: 'icon.png'
    }
  }]);
});
