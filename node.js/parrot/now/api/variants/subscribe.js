const Command = require('../util/constants');

module.exports = text => {
  return {
    text: "Сообщение: ПОДПИСКА",

    "buttons": [{
      "title": Command.BACK,
      "payload": {
        "title": Command.BACK
      },
      "hide": true
    }]
  }
}