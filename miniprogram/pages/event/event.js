// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      event_img: "/images/default-event-logo.png",
      username: "哆啦B梦",
      send_timestamp: "2019-7-6 14:42",
      content: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
    },
    {
      event_img: "/images/default-event-logo.png",
      username: "哆啦C梦",
      send_timestamp: "2019-8-6 15:14",
      content: "阅读，是一次心灵的艺术之旅。",
    },
    {
      event_img: "/images/default-event-logo.png",
      username: "天线宝宝",
      send_timestamp: "2019-8-8 14:42",
      content: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
    },
    {
      event_img: "/images/default-event-logo.png",
      username: "皮卡丘",
      send_timestamp: "2019-1d-6 14:42",
      content: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
    }
  ]
  },

  go_index: function () {
    wx.redirectTo({
      url: '/pages/billow/billow',
    })
  },

  go_event: function () {
    wx.redirectTo({
      url: '/pages/event/event',
    })
  },

  go_mine: function () {
    wx.redirectTo({
      url: '/pages/billow/billow',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})