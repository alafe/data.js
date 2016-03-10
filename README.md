# data.js

Data Sharing


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