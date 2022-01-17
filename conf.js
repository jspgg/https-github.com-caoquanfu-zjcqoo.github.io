jsproxy_config({
  // 当前配置的版本（服务端记录在日志中，方便排查问题）
  ver: '51',

  // 节点配置
  node_map: {
    'aliyun-hk': {
      label: '轻量云-香港',
      lines: [
        // 多条线路，负载均衡系统会从其中选一条
        'node-aliyun-hk-0.etherdream.com:8443',
        //'node-aliyun-hk-1.etherdream.com:8443'
      ]
    },
    'aliyun-sg': {
      label: '轻量云-新加坡',
      lines: [
        'node-aliyun-sg.etherdream.com:8443'
      ]
    },
    'bwh-la': {
      label: '搬瓦工-洛杉矶',
      lines: [
        'node-bwh-la.etherdream.com:8443'
      ]
    },
    'justhost-msk': {
      label: 'JustHost-莫斯科',
      lines: [
        '46.17.43.22.xip.io:8443'
      ]
    },
    'cfworker': {
   //   label: 'Cloudflare Worker',
     // hidden: true,
       label: '当前站点',
    //  lines: {
     //   [location.host]: 1,
    //  }
      lines: [
        // 实验中...
        // 参考 https://github.com/EtherDream/jsproxy/tree/master/cf-worker
       // 'node-cfworker.etherdream.com:8443'
        'location.host'
      ]
    }
  },

  /**
   * 默认节点  
   */
  node_default: 'aliyun-hk',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  //assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
   assets_cdn: 'assets/'
})
