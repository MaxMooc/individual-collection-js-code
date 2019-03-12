/*
 * 此文件是一些关于常用格式化数据的方法。
 *
 * 1. formatCash 格式化金钱 1234567890 -> 1,234,567,890
 * 2. 
 * 3. 
 * 4. 
 * 5. 
 * 6. 
 * 7. 
 * 8. 
 */

const formatData = {
    formatCash(str) {
        //正则方式
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        //普通方法
        // return str.split('').reverse().reduce((prev, next, index) => {
        //     return ((index % 3) ? next : (next + ',')) + prev
        // });
    }
   

}
module.exports = formatData;