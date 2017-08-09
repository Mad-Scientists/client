<template lang="html">
        <v-container>
          <v-layout row>
            <v-flex xs8 offset-xs2>
              <v-card class="grey pa-2">
                <v-card class="white white--text pa-2">
                  <v-card-title primary-title>
                    <div class="text-xs-center"><h5>{{options.bot_name || 'Bestie'}}</h5></div>
                  </v-card-title>
                  <div class="pl-3 pr-3 pb-3">
                    <hr>
                  </div>
                  <div class="scroll-it">
                    <div v-for="message in messages">
                      <BotMessage v-if="message.type == 'bot'" :message="message.message" :options="options"></BotMessage>
                      <UserMessage v-if="message.type !== 'bot'" :message="message.message" :options="options"></UserMessage>
                    </div>
                    <v-layout v-if="thinking">
                      <v-flex xs1 offset-xs2>
                      </v-flex>
                      <v-flex xs6>
                        <v-progress-circular indeterminate class="amber--text"></v-progress-circular>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div class="pa-3">
                    <hr>
                  </div>
                <v-layout>
                <v-flex xs6 offset-xs2>
                  <v-text-field
                  :disabled="!canRespond"
                  label="Message"
                  v-model="message"
               ></v-text-field>
                </v-flex>
                  <v-flex xs4>
                    <v-card-actions>
                      <v-btn :disabled="!canRespond" @click.native="send()">Send</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </main>
    </v-app>
</template>

<script>
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import botMessages from '../lib/botMessages';

const thinkTime = 2500;

export default {
  name: 'Profile',
  components: {
    BotMessage,
    UserMessage
  },
  data() {
    return {
      messages: localStorage.messages ? JSON.parse(localStorage.messages) : [],
      canRespond: false,
      thinking: false,
      message: '',
      options: botMessages.options
    };
  },
  mounted() {
    this.showNextMessage();
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  },
  watch: {
    messages() {
      localStorage.messages = JSON.stringify(this.messages);
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  },
  methods: {
    showNextMessage() {
      const message = botMessages.getNextMessage();
      if (!message) {
        this.canRespond = true;
        this.thinking = false;
        return '💩';
      }
      message.type = 'bot';
      this.messages.push(message);
      if (message.wait) {
        this.canRespond = false;
        this.thinking = true;
        setTimeout(() => {
          this.showNextMessage();
        }, thinkTime);
      } else {
        this.thinking = false;
        this.canRespond = true;
      }
      return '💩';
    },
    send() {
      const message = {
        message: this.message
      };
      this.messages.push(message);
      this.thinking = true;
      this.canRespond = false;
      this.message = '';
      setTimeout(() => {
        botMessages.processResponse(message.message);
        this.showNextMessage();
      }, thinkTime);
    },
    scrollToBottom() {
      const container = this.$el.querySelector('.scroll-it');
      container.scrollTop = container.scrollHeight;
    }

  }
};
</script>

<style lang="css">

span, .chips {
    display: block;
    word-wrap:break-word;
    white-space: pre-wrap;
    height: auto;
    padding: 1em;
}

.scroll-it {
  height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
