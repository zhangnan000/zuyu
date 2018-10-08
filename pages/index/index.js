//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
   
  },
  onLoad: function () {
    
  },
  jump_to_record(){
    wx.navigateTo({
      url: '/pages/electronic_record/technician_record_index/technician_record_index',
    })
  }
})
