<template>
  <div class="account-box">
    <div class="toggle">
      <a @click="isMsgLogin = false" href="javascript:;" v-if="isMsgLogin">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a @click="isMsgLogin = true" href="javascript:;" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <Form
        class="form"
        :validation-schema="mySchema"
        autocomplete="off"
        v-slot="{ errors }"
      >
        <!-- 手机号登录 -->
        <template v-if="!isMsgLogin">
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-user"></i>

              <!-- <input type="text" placeholder="请输入用户名或手机号" /> -->

              <Field
                :class="{ error: errors.mobile }"
                v-model="form.mobile"
                name="mobile"
                type="text"
                placeholder="请输入用户名或手机号"
              />
            </div>
            <div class="error" v-if="errors.mobile">
              <i class="iconfont icon-warning" />{{ errors.mobile }}
            </div>
          </div>
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-lock"></i>
              <!-- <input type="password" placeholder="请输入密码" /> -->

              <Field
                :class="{ error: errors.password }"
                v-model="form.password"
                name="password"
                type="password"
                placeholder="请输入密码"
              />
            </div>
            <div class="error" v-if="errors.password">
              <i class="iconfont icon-warning" />{{ errors.password }}
            </div>
          </div>
        </template>
        <!-- 短信登录 -->
        <template v-else>
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-user"></i>
              <Field
                :class="{ error: errors.mobile }"
                v-model="form.mobile"
                name="mobile"
                type="text"
                placeholder="请输入用户名或手机号"
              />
              <!-- <input type="text" placeholder="请输入手机号" /> -->
            </div>
            <div class="error" v-if="errors.mobile">
              <i class="iconfont icon-warning" />{{ errors.mobile }}
            </div>
          </div>
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-code"></i>
              <Field
                :class="{ error: errors.code }"
                v-model="form.code"
                name="code"
                type="password"
                placeholder="请输入验证码"
              />
              <!-- <input type="password" placeholder="请输入验证码" /> -->
              <span class="code">发送验证码</span>
            </div>
            <div class="error" v-if="errors.code">
              <i class="iconfont icon-warning" />{{ errors.code }}
            </div>
          </div>
        </template>
        <!-- 同意条文 -->
        <div class="form-item">
          <div class="agree">
            <XtxCheckbox v-model="form.isAgree" />
            <span>我已同意</span>
            <a href="javascript:;">《隐私条款》</a>
            <span>和</span>
            <a href="javascript:;">《服务条款》</a>
          </div>
        </div>
        <a href="javascript:;" class="btn" @click="submit">登录</a>
      </Form>
    </div>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
//校验插件
import { Form, Field } from "vee-validate";
//校验规则
import veeSchema from "@/utils/vee-validate-schema.js";
import XtxCheckbox from "@/components/library/xtx-checkbox.vue";

export default {
  name: "LoginForm",
  components: {
    Form,
    Field,
    XtxCheckbox,
  },
  setup() {
    // 控制短信登录切换的
    const isMsgLogin = ref(false);
    // 表单对象数据
    const form = reactive({
      isAgree: true,
      account: null,
      password: null,
      mobile: null,
      code: null,
    });
    // 校验规则对象
    const mySchema = {
      account: veeSchema.account,
      password: veeSchema.password,
      mobile: veeSchema.mobile,
      code: veeSchema.code,
      isAgree: veeSchema.isAgree,
    };

    //登录提交
    const submit = () => {
      console.log("lkdflksdj");

      //统一校验
      //求接口
    };
    return { isMsgLogin, form, mySchema, submit };
  },
};
</script>

<style lang="less" scoped>
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>