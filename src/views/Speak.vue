<template>
  <div>
    <div id="speak">
      <form @submit="speak">
        <textarea @change="handleChange" type="text" name="text-input" id="text-input" placeholder="Type a phrase..." />
        <div>
          <select @change="voiceChange" id="voice-select">
            <option v-for="voice in voices" :key="voice.index" v-bind:value="voice.name">{{voice.name}}: {{voice.lang}}</option>
          </select>
        </div>
        <button>Speak it!</button>
      </form>
    </div>
    <div class="how-to">
      <ol>
        <li>Enter the text that you want synthesized</li>
        <li>Choose a language*</li>
        <li>Press the "Speak it!" button</li>
      </ol>
      <section>
        <p class="asterisk">* The voice may be automatically set based on your language settings.</p>
        <p class="asterisk">If the list appears blank, try refreshing the page.</p>
        <p class="asterisk">For a better experience use Google Chrome, as you will have access to more voices.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speak",
  data() {
    return {
      voices: [],
      text: "",
      selectedVoice: ""
    }
  },
  methods: {
    // set state for text we want to synthesize
    handleChange(e) {
      e.preventDefault()
      this.text = e.target.value
    },
    // select the voice?
    voiceChange(e) {
      this.selectedVoice = e.target.value
      // play the text in state when the selected voice changes
      this.speak(e)
    },
    speak(e) {
      e.preventDefault()
      const synth = window.speechSynthesis;

      // to prevent blown out ear drums
      if(synth.speaking) {
        console.error('Already speaking...');
        return;
      }

      // if there is text in state when speak is called, get the text
      if(this.text !== "") {
        const speakText = new SpeechSynthesisUtterance(this.text);

        speakText.onerror = () => {
          console.error('Something went wrong, try again later.')
        }

        // get the selected voice
        this.voices.forEach(voice => {
          if (voice.name === this.selectedVoice) {
            speakText.voice = voice;
          }
        })
        // set the rate of playback and pitch to 1, because anything else doesn't work well
        speakText.rate = 1;
        speakText.pitch = 1;

        // let's hear that beautiful synthesized voice
        synth.speak(speakText);
      }
    }
  },
  created() {
    const synth = window.speechSynthesis;

    // getting voices is an async operation, so we will call this a few lines later
    const getVoices = () => {
      this.voices = synth.getVoices();
    }

    if(typeof InstallTrigger !== 'undefined') {
      getVoices();
    }

    if(synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = getVoices;
    }
  }
}
</script>

<style scoped>
  #speak {
    width: 400px;
    margin: 50px auto;
    padding: 25px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
  }
  #text-input {
    padding: 7px;
    border: none;
    width: 375px;
    min-width: 375px;
    max-width: 375px;
    min-height: 50px;
    max-height: 50vh;
    border-radius: 3px;
    font-size: 1.4rem;
  }
  #voice-select {
    margin: 10px 0;
    border: none;
    padding: 5px;
    width: 375px;
    height: 30px;
    border-radius: 3px;
    font-size: 1.4rem;
  }
  button {
    border: none;
    padding: 5px;
    width: 375px;
    background: #fff;
    border-radius: 3px;
    font-size: 1.4rem;
  }
  section { margin-top: 20px; }
  .how-to {
    width: 23%;
    margin: 0 auto;
    text-align: center;
  }
  .how-to li {
    font-size: 1.3rem;
  }
  .asterisk {
    margin-bottom: 10px;
    font-size: 1rem;
    text-align: left;
  }
  @media(max-width: 500px) {
    #speak {
      width: 90%;
      display: block;
    }
    #text-input {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
    #voice-select {
      width: 100%;
    }
    button {
      width: 100%;
    }
    .how-to {
      width: 100%;
    }
    .asterisk {
      width: 90%;
      margin: 0 auto 10px;
    }
  }
</style>