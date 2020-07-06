<template>
  <div id="container">
    <h1>Vidja</h1>
    <video id="video" width="720" height="560" autoplay muted></video>
  </div>
</template>

<script>
export default {
  name: 'Face',
  data() {
    return {
      audioConstraints: {
        audio: false,
        video: true
      },
    }
  },
  methods: {
    startVideo() {
      navigator.mediaDevices.getUserMedia(
        this.audioConstraints,
        stream => this.video.srcObject = stream,
        err => console.error(err)
      )
    }
  },
  mounted () {
    this.video = document.getElementById('video')
    this.startVideo()
  }
}
</script>

<style>
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4rem;
  }
</style>