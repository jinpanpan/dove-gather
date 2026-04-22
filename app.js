App({
  onLaunch() {
    // 云开发初始化
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'dove-gather-xxxx', // 需替换为实际环境 ID
        traceUser: true,
      });
    }
  },
  globalData: {
    userInfo: null
  }
})