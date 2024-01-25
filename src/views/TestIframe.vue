<template>
  <div>
    <el-container  v-loading="isLoading" id="container">
      <iframe v-if="!isLoading" class="ifr" :src="iframeSrc" allowfullscreen ref="iframe" name="ifmame"></iframe>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AlPageHome",
  data() {
    return {
      iframeSrc: "",
      host: "",
      pageUrl: "",
      userAndPwd: null,
      isLoading: true
    };
  },
  created(){
    console.log("访问地址： ", this.$route.params);
    //获取主机地址及端口号
    // this.host ="http://" + this.$route.params.host
    this.host ="http://192.168.10.83:5174"
    //获取页面路由地址
    // this.pageUrl = this.$route.params.pageUrl.replace("_","/")
    this.pageUrl = 'analysis/bigScreen?source=iframe&showNav=2'
    
     //判断是否有用户密码
    if(this.$route.params.userAndPwd){
     //获取用户名密码,并解密，账户密码使用“——”分割
      const userpwdStr =  (Base64.decode(this.$route.params.userAndPwd)).split("_")
     
      this.userAndPwd ={
          username: userpwdStr[0],
          password: userpwdStr[1],
      }
    }else{
      //没有使用默认密码
      // this.userAndPwd ={
      //   username: 'admin',
      //   password: 'admin',
      // }
      this.userAndPwd ={
        username: 'admin',
        password: 'admin@ailink123',
      }
    }
    // console.log("艾玲iframe: ",this.iframeSrc,  this.userAndPwd);
    // this.iframeSrc  = this.host + '/#/' + this.pageUrl
    //登录认证
    this.aiLingLogin(this.userAndPwd)
  },
  methods: {
    //艾灵登录认证
    aiLingLogin(userAndPwd) {
      let token = localStorage.getItem('ailink_token')
      if(token){
        this.isLoading = false
        this.iframeSrc  = this.host + '/#/' + this.pageUrl
        return 
      }
      const loginUrl = this.host + '/users/login'
      fetch(loginUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userAndPwd.username,
          password: userAndPwd.password,
        }),
      })
      .then((res) => res.json())
      .then((res) => {
        console.log("token: ", res.data.access, token);
        token = res.data.access;
        //  将token存入localStorage
        localStorage.setItem('ailink_token', token)
        console.log('localStorage set')
      });

      console.log('start creating iframe page')
      const iframePage = document.createElement("iframe");
      console.log('iframe created')

      iframePage.src = `${this.host}/static/handleToken.html`;
      document.body.append(iframePage);
      console.log('document body appended')
      setTimeout(() => {
          iframePage.contentWindow.postMessage({ token: token }, this.host);
          console.log('iframe page token set')
          this.isLoading = false
          this.iframeSrc  = this.host + '/#/' + this.pageUrl
      }, 4000);
      setTimeout(() => {
        iframePage.remove();
      }, 6000);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container, div{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.ifr {
  width: 100%;
  height: 100vh;
  border: 0;
  background-color: white;
}
</style>>