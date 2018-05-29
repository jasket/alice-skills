const Command = require('./util/constants');
const DefaultMessage = require('./variants/_default');
const HelloMessage = require('./variants/hello');
const HomeMessage = require('./variants/home');
const FaqMessage = require('./variants/faq');
const ContactMessage = require('./variants/contact');
const CatalogMessage = require('./variants/catalog');
const SubscribeMessage = require('./variants/subscribe');

module.exports = text => {
  var formatText = format(text);
  if (formatText === Command.HELLO) return HelloMessage(text);
  if (text === Command.BACK) return HomeMessage(text);
  if (text === Command.FAQ) return FaqMessage(text);
  if (text === Command.CATALOG) return CatalogMessage(text);
  if (text === Command.CONTACT) return ContactMessage(text);
  if (text === Command.SUBSCRIBE) return SubscribeMessage(text);

  return DefaultMessage(text);
}

function format(text) {
  return !!text && text.toLowerCase();
}