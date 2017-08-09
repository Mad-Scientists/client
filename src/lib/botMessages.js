import Vue from 'vue';

const messages = [{
  message: 'Hello, I\'m Bestie!',
  wait: true
}, {
  message: 'But you can call me something different, if you want.',
  wait: true
}, {
  message: 'What would you like to call me?',
  option: 'bot_name',
  wait: false
}, {
  message: option => `'${option.bot_name}'! I like that. I've updated my image accordingly.`,
  wait: true
}, {
  message: 'What should I call you?',
  option: 'user_name',
  wait: false
}, {
  message: option => `Hello, ${option.user_name}! Did I spell that right?`,
  wait: false
}, {
  message: option => `${option.bot_name} and ${option.user_name}. That's got a nice ring to it.`,
  wait: true
}, {
  message: option => `I'm curious ${option.user_name}... What do you look like?`,
  option: 'user_image',
  wait: false
}, {
  message: 'Wow! What a good looking human.',
  wait: true
}, {
  message: option => `Well ${option.user_name}, I will keep in touch and send you a message a couple times a day.`,
  wait: true
}, {
  message: 'What is the first time of day I should contact you?',
  option: 'first_time_of_day',
  wait: false
}, {
  message: '🌄 Nice and early. I like it.',
  wait: true
}, {
  message: 'What other time of day should I contact you?',
  option: 'second_time_of_day',
  wait: false
}, {
  message: option => `👍 OK! I'll send you a message everyday at ${option.first_time_of_day} and ${option.second_time_of_day}.`,
  wait: true
}, {
  message: 'That\'s all the questions I have for you now.',
  wait: true
}, {
  message: option => `Great to meet you ${option.user_name}! 😊`,
  wait: true
}, {
  message: 'Talk to you Later! 👋',
  wait: true
}];

let currentMessage = localStorage.currentMessage ? Number(localStorage.currentMessage) : -1;
const options = localStorage.options ? JSON.parse(localStorage.options) : {};

export default {
  options,
  getNextMessage() {
    if (!messages[currentMessage + 1]) return null;
    if (messages[currentMessage]
      && messages[currentMessage].option
      && !options[messages[currentMessage].option]) return null;

    currentMessage += 1;
    localStorage.currentMessage = currentMessage;

    const message = Object.assign({}, messages[currentMessage]);
    if (message && typeof message.message === 'function') {
      message.message = message.message(options);
    }
    return message;
  },
  processResponse(response) {
    if (messages[currentMessage].option) {
      const message = messages[currentMessage];
      Vue.set(options, message.option, response);
      localStorage.options = JSON.stringify(options);
    }
  }
};
