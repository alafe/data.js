/**
 * @file data测试用例
 * @author alafe
 * @email xiaowu:fe.xiaowu@gmail.com
 */

/* globals Data */
describe('Data', function () {
    // 每个测试运行完则执行清空数据
    afterEach(function () {
        Data.remove();
    });

    it('链式调用', function () {
        var flag = true;
        try {
            Data.set('').get();
            Data.set('', null).get('');
            Data.remove().set().set(function () {}).set('', null).get('');
        }
        catch (e) {
            flag = false;
        }

        expect(flag).toBe(true);
    });

    it('set 参数校验', function () {
        var flag = true;

        try {
            Data.set('');
            Data.set('', '');
            Data.set(null, '');
            Data.set(false, '');
            Data.set('test1', '');
            Data.set('test2', false);
            Data.set('test3', 0);
            Data.set('test4', null);
            Data.set('test5', function () {});

            expect(5).toBe(Object.keys(Data._cache).length);
        }
        catch (e) {
            flag = false;
        }

        expect(flag).toBe(true);
    });

    it('set 返回值检查', function () {
        expect(Data).toEqual(Data.set());
        expect(Data).toEqual(Data.set(1));
        expect(Data).toEqual(Data.set(false));
        expect(Data).toEqual(Data.set(null));
        expect(Data).toEqual(Data.set('string', null));
        expect(Data).toEqual(Data.set('string', false));
        expect(Data).toEqual(Data.set('string', function () {}));
        expect('function').toEqual(typeof Data.set('fn', function () {}).get('fn'));
    });

    it('get 参数校验', function () {
        var flag = true;

        try {
            Data.get('');
            Data.get(0);
            Data.get(null);
            Data.get(false);
            Data.get('test');
        }
        catch (e) {
            flag = false;
        }

        expect(flag).toBe(true);
    });

    it('get 返回值检查', function () {
        expect(Data.get('test')).toBeUndefined();
        expect(Data.get(1)).toBeUndefined();
        expect(Data.get(false)).toBeUndefined();
        expect(Data.get(0)).toBeUndefined();
        expect(Data.get(null)).toBeUndefined();
        expect('object').toEqual(typeof Data.get());
    });

    it('remove 参数校验', function () {
        var flag = true;

        try {
            Data.remove('');
            Data.remove(0);
            Data.remove(null);
            Data.remove(false);
            Data.remove('test');
        }
        catch (e) {
            flag = false;
        }

        expect(flag).toBe(true);
    });

    it('remove 返回值类型检查', function () {
        expect(Data).toEqual(Data.remove());
        expect(Data).toEqual(Data.remove(1));
        expect(Data).toEqual(Data.remove(false));
        expect(Data).toEqual(Data.remove(null));
        expect(Data).toEqual(Data.remove('string'));
    });

    it('remove单个', function () {
        Data.set('test', 1);
        Data.remove('test');
        expect(Data.get('test')).toBeUndefined();
    });

    it('remove全部', function () {
        Data.set('test1', 1);
        Data.set('test2', 1);
        Data.remove();
        expect(Data.get('test1')).toBeUndefined();
        expect(Data.get('test2')).toBeUndefined();
    });

    it('get全部', function () {
        Data.set('test1', 1);
        Data.set('test2', 2);
        expect(2).toBe(Object.keys(Data.get()).length);
        expect(1).toBe(Data.get().test1);
        expect(2).toBe(Data.get().test2);
    });

    it('set function判断', function (done) {
        Data.set('fn', function () {
            expect(true).toBe(true);
            done();
        });
        Data.get('fn')();
    });

    it('set => get', function () {
        Data.set('test', 1);
        expect(1).toBe(Data.get('test'));
    });

    it('get => set', function () {
        expect(Data.get('test')).toBeUndefined();
        Data.set('test', 1);
    });

    it('set => remove => get', function () {
        Data.set('test', 1);
        Data.remove('test');
        expect(Data.get('test')).toBeUndefined();
    });

    it('function check', function (done) {
        var flag = false;

        Data.set('function check', function () {
            flag = true;
        });

        Data.get('function check')();

        setTimeout(function () {
            expect(typeof Data.get('function check')).toBe('function');
            expect(flag).toBe(true);
            done();
        }, 200);
    });

    it('string check', function () {
        Data.set('test', '1');

        expect('string').toBe(typeof Data.get('test'));
        expect('1').toBe(Data.get('test'));
    });

    it('boolean check', function () {
        Data.set('true', true);
        Data.set('false', false);

        expect('boolean').toBe(typeof Data.get('true'));
        expect(false).toBe(Data.get('false'));
        expect(true).toBe(Data.get('true'));
    });

    it('number check', function () {
        Data.set('test', 1);
        Data.set('0', 0);

        expect('number').toBe(typeof Data.get('test'));
        expect('number').toBe(typeof Data.get('0'));
        expect(1).toBe(Data.get('test'));
        expect(0).toBe(Data.get('0'));
    });

    it('object check', function () {
        var result;
        var json = {
            status: 'ok',
            code: 0,
            flag: true,
            array: [
                0
            ]
        };

        Data.set('test', json);

        result = Data.get('test');

        expect(json).toEqual(result);

        expect(json.status).toBe(result.status);
        expect(json.code).toBe(result.code);
        expect(json.flag).toBe(result.flag);

        Data.set('null', null);
        expect(Data.get('null')).toBeNull();
    });
});
