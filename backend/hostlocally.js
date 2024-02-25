const ngrok = require('ngrok');



(async function () {
    console.log('Starting ngrok');
  try {
    const url = await ngrok.connect(3001);
    console.log('url is ', url);
  } catch (err) {
    throw err;
  }
})();
