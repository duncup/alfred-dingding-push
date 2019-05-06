'use strict';
const alfy = require('alfy');

async function run() {
  const config = alfy.config;
  const store = config.store;
  try {// 如果格式为JSON则已完成输入，否则跳出配置存储逻辑。
    let tokenObj = JSON.parse(alfy.input.toString());
    if (tokenObj.token){
      config.set(tokenObj.name, tokenObj.token);
    } else {
      config.delete(tokenObj.name);
    }
    return console.log(tokenObj.name);
  }catch (err) {}
  const input = alfy.input.toString().replace(/^\s+|\s+$/g,"");
  let list = [];
  if (!config.has(input) && input){
    list.push({
      arg: input,
      title: input,
      subtitle: '新建钉钉机器人配置',
      valid: true,
      icon: {
        path: 'icon.png'
      }
    });
  }
  const keys = Object.keys(store);
  // alfy.log(store);
  let oldList = alfy.matches(input, keys);
  oldList = oldList.map(function (key) {
    return {
      arg: key,
      title: key,
      subtitle: 'Token:' + store[key],
      valid: true,
      icon: {
        path: 'icon.png'
      }
    }
  });
  alfy.output([...list,...oldList]);
}
run().then(function (res) {

});

