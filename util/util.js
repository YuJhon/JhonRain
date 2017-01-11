/**
 * <p></p>
 * 工具类
 * @className util
 * @author jiangyu
 * @create 2017-01-11 10:14
 * @version v1.0
 */
module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
}
