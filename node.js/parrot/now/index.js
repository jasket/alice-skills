const {
  json
} = require('micro');
const answer = require('./api/answer');

module.exports = async req => {
  const {
    request,
    session,
    version
  } = await json(req);

  const text = request.original_utterance;
  const payload = request.payload;
  console.log(request);
  return {
    version,
    session,
    response: answer(text, payload),
  };
};