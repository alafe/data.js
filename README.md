# data.js

Data Sharing

[![code style fecs](https://img.shields.io/badge/code%20style-fecs-brightgreen.svg)](https://github.com/ecomfe/fecs)
[![Linux Build](https://travis-ci.org/zbfe/data.js.svg?branch=master)](https://travis-ci.org/zbfe/data.js)
[![Test Coverage](https://img.shields.io/coveralls/zbfe/data.js/master.svg)](https://coveralls.io/r/zbfe/data.js)
[![DevDependencies](https://img.shields.io/david/dev/zbfe/data.js.svg?style=flat)](https://david-dm.org/zbfe/data.js#info=devDependencies)

只是玩玩，别当真～

## Api

### Data.set

```js
/**
 * 设置数据
 *
 * @param {string|number} key   数据的key
 * @param {*} value 数据值
 *
 * @return {Object} Data
 */
```

### Data.get

```js
/**
 * 获取数据
 *
 * @param  {string|number|undefined} key 数据的key，如果为空，则获取全部数据
 *
 * @return {*}     数据结果，如果数制不存在将返回undefined
 */
```

### Data.remove

```js
/**
 * 删除数据
 *
 * @param  {string|number|undefined} key 数据的key，如果为空，则删除所有的数据
 *
 * @return {Object}     Data
 */
```

## Develop

```shell
git clone https://github.com/zbfe/data.js.git

cd data.js

npm install

# 安装push前检查代码勾子
npm run hook-install
```

## Test

> Test case by [jasmine](https://jasmine.github.io/), test environment by [karma](https://karma-runner.github.io/)、[phantomjs](http://phantomjs.org/)

```shell
# 运行测试
npm run test

# 运行测试覆盖率
npm run test-cov

# 运行代码检查
npm run check
```