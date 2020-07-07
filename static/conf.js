const conf = {
  // 是否打印彩蛋
  spoilerConsole: true,
  // 是否打印信息
  infoConsole: true,
  // 谷歌浏览器下载地址
  chromeDownLoad: 'http://www.chromeliulanqi.com/ChromeStandaloneSetup.exe',
  // 自定义系统名称
  fixedSystemName: '',
  // 默认区域
  defaultArea: {
    areaLevel: 1, // 1-省份、2-城市、3-县区、6-小区
    areaCode: '440000',
    areaName: '广东省'
  },
  // 模块权限
  modules: {
    imageSearch: true, // 以图搜图
    monitor: true, // 实时监控
    device: false, // 设备管理
    gis3d: true, // 三维GIS地图
    blackList: true // 人员黑名单和车辆黑名单
  },
  // 是否忽略验证码
  ignoreVerify: false,
  // 是否局域网部署
  isLocal: false,
  // 武汉平台
  platformWuhan: {
    isWuhan: false, // 是否武汉本地平台
    linkHotmap: 'https://heat.qq.com/lbs/', // 热力地图
    linkFireControl: 'http://www.jzxfyun.net/appkeylogin.html?appkey=a6df084d-e3d7-4f88-b6d1-ad162ac0534c' // 智慧消防
  },
  // 菏泽平台
  platformHeze: {
    isHeze: false, // 是否菏泽本地平台
    securityName: '辅警网格员',
    securityNo: '辅警网格员编号'
  },
  // 巴中平台
  platformBazhong: {
    isBazhong: false, // 是否巴中本地平台
    platformName: '巴中市公安局经济开发区分局智慧警务平台'
  },
  // 烟台平台
  platformYantai: {
    isYantai: false, // 是否烟台本地平台
    platformName: '烟台市灵智小区管理系统'
  },
  // 扬州平台
  platformYangzhou: {
    isYangzhou: false, // 是否扬州本地平台
    gridmap: 'http://192.168.0.237:2090/gridmap/#/'
  }
}
