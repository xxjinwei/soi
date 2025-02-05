/**
 * @fileoverview 远程测试的配置文件样例
 * @author AceMood
 * @email zmike86@gmail.com
 */

'use strict';


soi.config.extend({
  // 配置节点
  deploy: {
    receiver: 'http://localhost:8888/soi_receiver.php',
    // 要被复制到的目录，替换成远程绝对路径
    dist: '/Users/acemood/demo/',
    // 文件的映射, from 本地目录中的文件将会被复制到 to 的目录中,
    // from 相对于`process.cwd()`取相对位置,
    // to 则取`dist`的相对位置.
    // from 和 to 支持glob形式的匹配, 也支持自己写逻辑的函数返回字符串
    // 关于glob规范见: https://www.npmjs.com/package/glob
    files: [
      {
        from: 'src/static/js/*.js',
        to: 'static/js/'
      },
      {
        from: 'src/static/css/*.css',
        to: 'static/css/'
      },
      {
        from: 'src/static/img/*.*',
        to: 'static/img/'
      }
    ]
  }
});
