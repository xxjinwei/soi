/**
 * @fileoverview release的配置文件样例
 */

'use strict';

soi.config.extend({
  release: {
    // virtualRootDir (vrd) 这个属性非常重要。它的出现有几点意义，
    // 1. 它代表网络根路径，所有本地的静态资源都要相对这个目录生成path部分，从而产生绝对路径类似于
    //    `/static/scripts/lib/jQuery.js`。用到的是pack中的entrance属性。
    // 2. 之所以没有用系统的绝对路径是因为可能打包的系统各异，生成的资源表的key不好统一。
    //    在此生成的绝对路径作为最终资源表中的key存在，不会重复，且在各个系统中统一。
    // 3. 根据配置的domain，生成线上绝对路径。用到的是pack中的to属性
    prod: {
      obscure: true,
      charset: 'utf8',

      domain: '/soi/samples/release/build/',
      virtualRootDir: './src/',
      distRootDir: './build/',
      mapTo: './build/map.json',

      pack: {
        tpl: [
          {
            files: ['page/*.*'],
            to: '/online/page/'
          }
        ],
        swf: [
          {
            files: ['static/swf/*.swf'],
            to: '/online/static/swf/'
          }
        ],
        img: [
          {
            files: ['static/img/*.@(png|jpg|gif)'],
            to: '/online/static/img/'
          }
        ],
        css: [
          {
            modular: true,
            entrance: 'static/css/main.css',
            to: '/online/static/css/',
            placeholder: 'app'
          },
          {
            modular: true,
            entrance: 'static/css/x.css',
            to: '/online/static/css/',
            placeholder: 'testa'
          },
          {
            files: ['static/css/a.css', 'static/css/b.css'],
            to: '/online/static/css/'
          }
        ],
        js: [
          {
            modular     : 'amd',
            entrance    : 'static/js/amd.js',
            to          : '/online/static/js/',
            placeholder : 'amd'
          },
          {
            modular     : 'amd',
            entrance    : 'static/js/cmd.js',
            to          : '/online/static/js/',
            placeholder : 'cmd'
          },
          {
            modular     : 'normal',
            files       : [
                'static/js/jquery.js',
                'static/js/x.js'
            ],
            to          : '/online/static/js/',
            placeholder : 'base:common'
          }
        ]
      },
      replace: {
        from: /(__TOPBAR__|__NAVBAR__|__APIDOMAIN__)/g,
        to: function($0) {
          if ($0 === '__TOPBAR__') {
            return 'http://zhida.baidu.com:8080'
          } else if ($0 === '__NAVBAR__') {
            return 'http://songjin.zhida.baidu.com:8080';
          } else if ($0 === '__APIDOMAIN__') {
            return 'http://zhida.baidu.com:8080';
          }
        }
      }
    }
  }
});
