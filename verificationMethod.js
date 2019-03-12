/*
 * 此文件是一些关于常用验证共用的方法。
 *
 * 1. trimLeftRight   去掉字符串前后空格
 * 2. trimAll   去掉字符串中所有空格
 * 3. isNonnegativeNumber 是否是非负数字且不以0开头，可2、2.1、2.11，不可0.11、-2
 * 4. isPositiveNum 是否为正整数
 * 5. isPhoneNumber   判断是不是手机号
 * 6. isArray   判断是否是数组
 * 7. isCardId 判断是否有效身份证 (仅15位数字或者18位数字或者17位数字和一个x，x不区分大小写)
 * 8. isPositiveNumber 判断是否为正数，可以带小数
 */

const verificationMethod = {
    trimLeftRight(str) {
        return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
    },
    trimAll(str) {
        return str.replace(/\s/g, '');
    },
    isNonnegativeNumber(str) {
        const reg = /^((?!0)\d+(\.\d{1,2})?)$/g;
        return reg.test(str);
    },
    isPositiveNum(str) { //是否为正整数
        const re = /^[0-9]*[1-9][0-9]*$/;
        return re.test(str)
    },
    isPhoneNumber(phone) {
        phone = this.trimAll(phone);
        const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        return reg.test(phone) ? true : false;
    },
    isArray(arr) {
        if (!Array.isArray) {
            Array.isArray = function (arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            }
        }
        return Array.isArray(arr);
    },
    isString(str) {
        return (typeof str == 'string') && (str.constructor == String);
    },
    isEmail(str) {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    },
    isCardId(str) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(str);
    },
    isPositiveNumber(num) {
        let reg = /^\d+(?=\.{0,1}\d+$|$)/;
        return reg.test(num);
    }
}
module.exports = verificationMethod;