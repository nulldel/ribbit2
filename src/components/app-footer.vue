<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd class="box"><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd class="box"><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd class="box"><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd class="box"><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt >下载APP</dt>
          <dd class="box"><img src="../assets/images/qrcode.5372a064.jpg" alt=""></dd>
          <dd class="box erwei">

            <p>扫描二维码</p>
            <p>立马下载APP</p>
            <a href="">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd>
            400-0000-000
            <p>周一至周日 8:00-18:00</p>
          </dd>
        </dl>
      </div>
    </div>

    <div class="extra">
      <div class="container">
        <div class="ditail">
            <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <div class="copyright">
            <ul>
                <li><a href="">关于我们  </a></li>
                <li><a href="">帮助中心  </a></li>
                <li><a href="">售后服务  </a></li>
                <li><a href="">配送与验收</a></li>
                <li><a href="">商务合作  </a></li>
                <li><a href="">搜索推荐  </a></li>
                <li><a href="">友情链接  </a></li>
            </ul>
            <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'appFooter'
}
</script>

<style lang="less" scoped>
.app-footer {
  .contact {
    padding-top: 62px;
    width: 100%;
    height: 290px;
    background-color: #fff;
    .container {
      display: flex;
      justify-content: space-around;
      dl {
        text-align: center;
        dt {
          font-size: 18px;
          color: #999;
        }
        dd {
            margin: 32px 12px 0 0;
            float: left;

        }
        &:last-child{
                dd{
                    margin-top: 45px;
                    font-size: 22px;
                    color:#999;
                    p{
                        font-size: 15px;
                        color: #666;
                    }
                }
            }
        .box{
            width: 92px;
            height: 92px;
            border: 1px solid #ededed;
            color: #999;
            padding: 3px;

            .iconfont{
                font-size: 36px;
                display: block;
                color:#666

            }
            &:hover{
                  .iconfont{
                    color: @xtxColor;
                  }
                }
        }
        .erwei{
            border: none;
            a{
                display: block;
                width: 106px;
                height: 33px;
                color: #fff;
                background-color: #27ba9b;
                line-height: 32px;
                border-radius: 2px;
                margin-top: 10px;
            }
        }

      }
    }
  }
  .extra {
    width: 100%;
    height: 348px;
    background-color: #333;
    .ditail{
        display: flex;
        justify-content: space-around;
        border-bottom:1px solid #434343;
        line-height: 187px;
      a{
        color: #fff;
        font-size: 28px;
        .iconfont{
            font-size: 50px;
            vertical-align: middle;
            margin-right: 10px;
            font-weight: 100;
        }
        span{
            vertical-align: middle;
            display: inline-block;
        }
      }
    }
    .copyright{
        font-size:15px ;
        color: #999;
        text-align: center;
        ul{
            display: flex;
            justify-content: center;
            li{
                padding: 10px;
                a{
                color: #999;
                padding-left: 10px;
                line-height: 10px;
               }
             ~ li{
               a{
                border-left: 1px solid;
               }
             }
            }
        }
    }
  }
}
</style>>
