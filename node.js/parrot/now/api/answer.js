const TreeMenu = require('./treemenu');

module.exports = (text, payload) => {
  var answer = TreeMenu(text || payload.title);
  answer.end_session = false;
  return answer;
}