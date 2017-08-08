<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card dark class="primary">
        <v-card-text>
          <p>


            <template>
                <main>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-card class="blue-grey darken-2 white--text">
                          <v-card-title primary-title>
                            <div class="headline">ChatBox</div>
                          </v-card-title>
                          <v-layout row wrap>
                            <v-flex xs4>
                            <v-list-tile-avatar>
                            <img src="https://assets.tumblr.com/images/anonymous_avatar_96.gif"/>
                          </v-list-tile-avatar>
                        </v-flex>
                        <v-flex xs8>
                          <div class="text-xs-center">
                            <v-chip>Hi, I'm Bestie!</v-chip>
                          </div>
                        </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs8>
                            <div class="text-xs-center">
                              <v-chip class="blue white--text">i'm a stupid hooman</v-chip>
                            </div>
                          </v-flex>
                          <v-flex xs4>
                          <v-list-tile-avatar>
                          <img src="https://a.ppy.sh/3414065_1495448501.jpg"/>
                        </v-list-tile-avatar>
                      </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs8>
                          <div class="text-xs-center">
                            <v-chip class="blue white--text">do you have any weed?</v-chip>
                          </div>
                        </v-flex>
                        <v-flex xs4>
                        <v-list-tile-avatar>
                        <img src="https://a.ppy.sh/3414065_1495448501.jpg"/>
                      </v-list-tile-avatar>
                    </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                      <v-flex xs8>
                        <div class="text-xs-center">
                          <v-chip class="blue white--text">if i write a monologue here what happens. no really will it break</v-chip>
                        </div>
                      </v-flex>
                      <v-flex xs4>
                      <v-list-tile-avatar>
                      <img src="https://a.ppy.sh/3414065_1495448501.jpg"/>
                    </v-list-tile-avatar>
                  </v-flex>
                  </v-layout>
                          <v-card-actions>
                            <v-text-field></v-text-field>
                            <v-btn flat dark>Send</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </main>
            </template>



          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs8>
      <h2 class="text-xs-center bestie">Bestie</h2>
      <h3 class="text-xs-center">Your new best friend.</h3>
        <center>
          <img src="https://avatars0.githubusercontent.com/u/30674113?v=4&s=200" />
        </center>
      <p class="text-xs-center">Bestie will start a conversation with you via text message when you most need it. Bestie knows your interests and remembers past conversations. Bestie asks interesting and topical questions to keep the conversation going.
      </p>
      <div class="text-xs-center">
        <v-btn error dark large :to="{ name: 'signup' }">Sign Up</v-btn>
      </div>
    </v-flex>

    <v-flex xs4 class="text-xs-center mt-3">
      <i class="material-icons" style="font-size: 4em">grade</i>
      <h5>key feature 1</h5>
    </v-flex>
    <v-flex xs4 class="text-xs-center mt-3">
      <i class="material-icons" style="font-size: 4em">grade</i>
      <h5>key feature 2</h5>
    </v-flex>
    <v-flex xs4 class="text-xs-center mt-3">
      <i class="material-icons" style="font-size: 4em">grade</i>
      <h5>key feature 3</h5>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
