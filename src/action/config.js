export default {

  ip: 'http://www.swqing.cn:8080',

  api: {
    get: {
      /* 消息api */
      getMassage: '/message/', // 获取消息
      /* 用户api */
      getUserInfo: '/user/information', // 获取个人资料

      /* 用户与课程相关操作的API */
      getCollection: '/user/course/course/collection', // 获取我的收藏
      getCourseContent: '/user/course/course/content', // 获取课程详情
      getMyCourse: '/user/course/course/my', // 获取我的课程
      getTime: '/user/course/course/time', // 获取学习时长

      /* 章节API */
      getChapterList: '/chapter/getChapterList', // 查询课程目录
      getChaptersList: '/chapter/getChaptersList', // 查询节目录

      /* 课程API */
      getCourseDetail: '/course/getDetails/', // 查询课程详情 {courseId}

      /* 课程cmsAPI */
      getCourseHome: '/course/cms/getList', // 首页的查询课程列表
      getCourseFree: '/course/cms/getFreeListByCondition', // 分条件查询免费课程列表
      getCoursePay: '/course/cms/getPayListByCondition', // 分条件查询付费课程列表  //综合1 最热2 最新3
      getCourseBy: '/course/cms/getListByFree', // 根据是否收费查询课程列表，1表示收费，0表示免费
      getCourseRecommend: '/course/cms/getRecommend/', // 课程推荐 {typeId}

      /* 课程cmsAPI */
      getAllDirection: '/courseDirection/getList', // 获取所有的课程方向

      /* 课程类型API */
      getTypeByDirectionId: '/courseType/getTypeByDirectionId/', // 根据方向Id查询类型 {directionId}

      /* 课程评论API */
      getComment: '/course/comment/getListBychapterId/', // 根据章节Id查询评论列表  {chapterId}

      /* 购物车API */
      getCart: '/cart'// 获取购物车
    },
    post: {
      /* 文件上传api */
      uploadImage: '/file/uploadImage', // 上传图片
      uploadList: '/file/uploadList', // 多图上传

      /* 消息api */
      pushMassage: '/message/', // 推送消息

      /* 用户api */
      changeInfo: '/user/information', // 修改个人资料
      login: '/user/login', // 用户登录
      logout: '/user/logout', // 退出登录
      sendMessage: '/user/messageCode', // 发送手机验证码
      register: '/user/register', // 用户注册

      /* 用户与课程相关操作的API */
      lastCourseP: '/user/course/course/rate', // 上传上一节课的进度

      /* 订单API */
      addOrder: '/order/addOrder', // 添加订单
      cancelOrder: '/order/cancel/', // 取消 订单 传 {orderId}
      getOrder: '/order/getOrderList/', // 根据订单状态查询订单列表  {status}

      /* 课程评论 */
      publishComment: '/course/comment/publish', // 发布评论

      /* 购物车API */
      addCart: '/cart' // 添加商品到购物车
    },
    delete: {

    },
    put: {
      /* 消息api */
      deleteMessage: '/message/', // 消息已读/删除
      /* 用户api */
      changePassword: '/user/password', // 修改密码
      /* 用户与课程相关操作的API */
      cancelCollect: '/user/course/course/collection' // 取消收藏
    }
  }
}
