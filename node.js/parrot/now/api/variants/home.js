const Command = require('../util/constants');

module.exports = text => {
  return {
    text: "Еще что-нибудь?",

    "buttons": [{
        "title": Command.FAQ,
        "payload": {
          "title": Command.FAQ,
        },
        "hide": true
      },
      {
        "title": Command.CATALOG,
        "payload": {
          "title": Command.CATALOG,
        },
        "hide": true
      },
      {
        "title": Command.CONTACT,
        "payload": {
          "title": Command.CONTACT,
        },
        "hide": true
      },
      {
        "title": Command.SUBSCRIBE,
        "payload": {
          "title": Command.SUBSCRIBE,
        },
        "hide": true
      }
    ]
  }
}