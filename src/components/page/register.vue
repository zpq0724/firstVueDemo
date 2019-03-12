<template>
  <div>
    <header>
      <router-link to="/login"><i class="fa fa-angle-left left"></i><a>手机注册</a></router-link>
    </header>
    <section class="content">
      <div class="pic">
      </div>
      <ul>
        <li><input type="text" v-model="phone" placeholder="请输入手机号" @blur="phoneok"><button id="btn" @click="getY">{{Yz}}</button></li>
        <li><input type="password" placeholder="请输入验证码" v-model="myVerifi"></li>
        <li><input type="password" v-model="pw" placeholder="6-12位数字，验证码" @blur="pwOk"></li>
        <li><input type="password" placeholder="确认密码" v-model="repeatpw"></li>
      </ul>

    </section>
    <footer>
      <h1 v-model="alert">{{alert}}</h1>
      <ul>
        <li>
          <input type="submit" @click="finish" value="完成">
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  import "@/style/reset.css"
  export default {
    data() {
      return {
        phone: "",
        pw: "",
        checkPhone: "",
        alert: "",
        repeatpw: "",
        Yz:"获取验证码",
        myVerifi:"",
        arr:[]
      }
    },

    methods: {
      phoneok() {
        var reg = /^1(3|5|7|8|6)\d{9}$/
        if (reg.test(this.phone)) {
          this.alert = "√"
        } else {
          this.alert = "手机号码格式错误"
          this.phone = ""
        }
      },
      getY(){
          this.arr=[];
          for(var i = 0;i<4;i++){
            this.arr.push(Math.round(Math.random()*9))
          }
          this.Yz="";//让上一次的验证码清空
          this.arr.forEach((item)=>{
            this.Yz+=item
          })
      },
      pwOk() {
        var reg = /^\w{6,12}$/
        if (reg.test(this.pw)) {
          this.alert = "√"
          return true
        } else {
          this.alert = "密码格式错误"
          this.pw = ""
          return false
        }
      },
      finish() {
        if (this.phone == "" || this.pw == "" || this.repeatpw == "") {
          alert("请输入信息");
        } else {
          if(this.myVerifi == this.Yz){

          if (this.repeatpw == this.pw) {
            //和json中的phone比对，相同的返回出来
            this.$http.get("http://localhost:3000/users").then((res) => {
              this.checkPhone = res.data.filter((item) => {
                //console.log(this.checkPhone)   
                return item.phone === this.phone
              })
              if (this.checkPhone == "") {
                //将输入的信息添加到db.json中
                this.$http.post("http://localhost:3000/users", {
                  phone: this.phone,
                  pw: this.pw
                }, {
                  headers: {
                    "content-type": "application/json"
                  }
                }).then(() => {
                  alert("注册成功")
                  this.$router.push({
                    "name": "login"
                  })
                })
              } else {
                alert("手机号已存在");
                this.phone = "";
                this.pw = "";
              }
            })
          } else {
            alert("密码错误")
          }
        }else{
          alert("验证码错误")
        }
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  /*@import "../../style/reset.css";  引入方式*/

  $sc:25;
  header {
    width: 100%;
    height: 43.98/$sc+rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    .left {
      display: block;
      font-size: 28/$sc+rem;
      float: left;
      margin-top: 8/$sc+rem;
    }
    a {
      line-height: 43.98/$sc+rem;
      margin-left: 5/$sc+rem;
      font-size: 15/$sc+rem;
      color: #000;
    }
  }

  .content {
    position: absolute;
    top: 43.98/$sc+rem;
    left: 0;
    bottom: 264/$sc+rem;
    right: 0;
    background: #ccc;
    .pic {
      margin-top: 100.98/$sc+rem;
    }
    ul li {
      width: 100%;
      height: 49.98/$sc+rem;
      line-height: 49.98/$sc+rem;
      text-align: left;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      background: #fff;
    }
    ul li input {
      border: none;
    }
    #btn {
      float: right;
      width: 98/$sc+rem;
      height: 100%;
      color: red;
    }
  }

  footer {
    h1 {
      color: red;
      font-size: 16/$sc+rem
    }
    ul li {
      width: 351/$sc+rem;
      height: 37.5/$sc+rem;
      background: #fff;
    }
    ul li input {
      border: none;
      background: #fff;
    }
    width:100%;
    height:264/$sc+rem;
    background:#ccc;
    position:fixed;
    bottom:0;
    left:0;
    ul {
      display: flex;
    }
    ;
    ul li {
      text-align: center;
      flex: 1;
      height: 49/$sc+rem;
      line-height: 49/$sc+rem;
    }
  }

</style>
