Page({
  data: {
    places: [
      {
        id: '1',
        name: '猫咪森林咖啡馆',
        coverUrl: 'https://img.freepik.com/free-photo/cat-cafe-interior-with-cats-chairs_23-2149429184.jpg',
        comment: '店里猫咪超级多，而且都很亲人！拿铁味道也很醇厚，适合下午茶。',
        rating: 5,
        type: 'seed', // 种草
        author: '张三'
      },
      {
        id: '2',
        name: '巷子深火锅',
        coverUrl: 'https://img.freepik.com/free-photo/spicy-hot-pot-traditional-chinese-food_1150-35366.jpg',
        comment: '味道中规中矩，但是服务态度一般，排队时间太长了。',
        rating: 3,
        type: 'avoid', // 避雷
        author: '李四'
      },
      {
        id: '3',
        name: '几何书店',
        coverUrl: 'https://img.freepik.com/free-photo/interior-bookstore-with-many-books_23-2148842232.jpg',
        comment: '非常有设计感的书店，安静且出片，推荐带相机去。',
        rating: 4,
        type: 'seed',
        author: '王五'
      }
    ]
  },

  onWantToGo(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showToast({
      title: `已加入“我也想去”清单`,
      icon: 'success'
    });
    console.log('想去店铺 ID:', id, '名称:', name);
  }
})