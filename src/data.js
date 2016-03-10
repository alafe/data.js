/**
 * @file data lib
 * @author alafe
 * @email xiaowu:fe.xiaowu@gmail.com
 */

(function () {
    'use strict';

    /**
     * 给window上暴露Data对象
     *
     * @type {Object}
     */
    var Data = window.Data = {};

    /**
     * 缓存数据
     *
     * @private
     * @type {Object}
     * @description 设置到Data上是为了方便外部调试
     */
    Data._cache = {};

    /**
     * 获取数据
     *
     * @param  {string|number|undefined} key 数据的key，如果为空，则获取全部数据
     *
     * @return {*}     数据结果，如果数制不存在将返回undefined
     */
    Data.get = function (key) {
        if (key === undefined) {
            return Data._cache;
        }

        return Data._cache[key];
    };

    /**
     * 设置数据
     *
     * @param {string|number} key   数据的key
     * @param {*} value 数据值
     *
     * @return {Object} Data
     */
    Data.set = function (key, value) {
        // 如果参数为空
        // value使用undefined验证是为可能value为false,0,''等情况
        if (!key || value === undefined) {
            return Data;
        }

        Data._cache[key] = value;

        return Data;
    };

    /**
     * 删除数据
     *
     * @param  {string|number|undefined} key 数据的key，如果为空，则删除所有的数据
     *
     * @return {Object}     Data
     */
    Data.remove = function (key) {
        if (!key) {
            Data._cache = {};
        }
        else {
            delete Data._cache[key];
        }

        return Data;
    };
})();
