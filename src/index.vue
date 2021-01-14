<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">单视频样例</div>
      <router-link class="item" to="/example">多视频样例</router-link>
    </div>
    <div id="test"></div>
    <div class="btn" @click="nextPlayer">下一个</div>
    <div class="desc">
      <p>使用说明：</p>
      <p>
        1、此demo中的播放器的使用方式是：
        先加载播放器js文件，加载完后会有一个回调（onCCH5PlayerLoaded），在回调⽅方法中主动创建播放器。
      </p>
      <p>2、本样例中未含所有api调用以及回调，仅使用部分作范例</p>
      <p class="tip">调用的播放器api：setVolume(volume)（设置音量[0-1]）</p>
      <p class="tip">播放器回调： on_player_volumechange（音量改变的回调）</p>
      <p>3、在onCCH5PlayerLoaded方法上，说明如下：</p>
      <p class="tip">
        此方法为H5播放器加载完的回调方法，应保证此方法的位置顺序在H5播放器js文件script标签之前，以保证执行回调时能找到此方法的存在。否则可能不能成功执行此回调方法。
      </p>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  name: 'home',
  data() {
    return {
      list: [
        'AA22BDEE61E7455A9C33DC5901307461',
        'A4F81E6E8DD693A59C33DC5901307461',
        'CD2CADD51A908CC19C33DC5901307461',
      ],
      idx: 0,
    }
  },
  setup() {
    const player = ref(null)
    const createPlayer = (flag) => {
      console.log('创建player', flag)
      const test = document.getElementById('test')
      //   if (this.idx >= this.list.length) this.idx = 0
      player.value = window.createCCH5Player({
        vid: '3DA91578A367F06B9C33DC5901307461',
        siteid: '6A2E19DCB918CA38',
        autoStart: true,
        width: '100%',
        height: '100%',
        parentNode: test,
        vc: 'b1d4c047cccf4cbf806392781b112e03',
      })
      //   this.idx++
    }
    const onCCH5PlayerLoaded = () => {
      console.log('在项目中调用我---onCCH5PlayerLoaded')
      window.ccH5PlayerJsLoaded = true
      createPlayer('onCCH5PlayerLoaded')
    }
    const onSwitchRate = (vId, newValue) => {
      alert(newValue)
    }
    const onPlayerReady = (obj) => {
      console.log(
        'CCH5player_ready',
        obj,
        'innerHTML：',
        obj.container.innerHTML,
      )
      window.cc_js_Player.setVolume(0.3)
    }
    const onPlayerVolumeChange = (volume, vid) => {
      console.log('设置音量回调:  ', volume, vid)
    }

    const nextPlayer = () => {
      player.value && player.value.destroy()
      createPlayer('nextPlayer')
    }
    const setPlayerCallBack = () => {
      window.onCCH5PlayerLoaded = onCCH5PlayerLoaded
      window.on_CCH5player_ready = onPlayerReady
      window.on_player_volumechange = onPlayerVolumeChange
      window.on_switch_rate = onSwitchRate
    }

    console.log(window.onCCH5PlayerLoaded, '@@@@@@@@@@@')
    setPlayerCallBack()
    onMounted(() => {
      console.log(window.ccH5PlayerJsLoaded, '=======')
      if (window.ccH5PlayerJsLoaded) {
        createPlayer('onMounted')
      }
    })
    onUnmounted(() => {
      player.value && player.value.destroy()
    })

    return {
      nextPlayer,
    }
  },
}
</script>
<style scoped>
#test {
  width: 100%;
  height: 400px;
  max-width: 600px;
}
.btn {
  width: 100px;
  height: 36px;
  line-height: 40px;
  text-align: center;
  background: #ff6b3a;
  color: #fff;
  border-radius: 3px;
  font-size: 14px;
  margin-top: 70px;
  cursor: pointer;
  margin-left: 20px;
}
.desc {
  padding: 0 20px;
}
.desc p {
  font-size: 14px;
  line-height: 30px;
}
.desc p > span {
  color: #ff6b3a;
}
.title {
  margin-right: 10px;
}
.tip {
  text-indent: 2em;
}
@media screen and (min-width: 500px) {
  #test {
    margin-left: 20px;
  }
}
</style>
