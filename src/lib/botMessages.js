const messages = [{
  message: 'Hello, I\'m Bestie!',
  wait: true
}, {
  message: 'But you can call me something different, if you want.',
  wait: true
}, {
  message: 'What would you like to call me?',
  wait: false
}, {
  message: '\'Marvin\'! I like that. Is this what you want to call me?',
  wait: false
}, {
  message: 'Great! What should I call you?',
  wait: false
}, {
  message: 'Hello, CJ! Did I spell that right?',
  wait: false
}, {
  message: 'Marvin and CJ. That\'s got a nice ring to it.',
  wait: true
}, {
  message: 'I will send you messages throughout the day.',
  wait: true
}, {
  message: 'What is the first time of day I should contact you?',
  wait: false
}, {
  message: 'Nice and early. I like it.',
  wait: true
}, {
  message: 'What other time of day should I contact you?',
  wait: false
}, {
  message: 'OK! I\'ll send you a message everyday at 7AM and 10AM.',
  wait: true
}, {
  message: 'Talk to you Later!',
  wait: true
}];

let currentMessage = 0;

export default {
  getNextMessage() {
    const message = messages[currentMessage];
    currentMessage += 1;
    return message;
  }
};
