const { PubSub } = require('@google-cloud/pubsub');
// const GOOGLE_CRED = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
const SUBSCRIPTION_NAME = process.env.PUBSUB_SUBSCRIPTION_NAME;

const { creteMessage } = require('../services')

module.exports = {
  subscription: async(req, res) => {    

    try {
      const message = await creteMessage(req.body.event)
      
      if (message){
        return res.status(200).json({ pubsub: message })
      }

    } catch(error){
      return res.status(500).json({ error: error.message })
    }
    // res.send({ message: req.body.challenge })
  }, 
  getMessage: async() => {

    const pubSubClient = new PubSub()

    const lisentError = () => {
      const subscription = pubSubClient.subscription(SUBSCRIPTION_NAME)

      const messageHandler = message => {
        // TODO MAKE A FETCH TO THE API FOR THE MESSAGE
        console.log(`Received message ${message.data}:`);
        console.log(`Message: ${message}`);
        message.ack();
      }

      const errorHandler = err => {
        console.error(`ERROR: ${err}`);
        throw err;
      }

      subscription.on('message', messageHandler);
      subscription.on('error', errorHandler);
    }
    return lisentError()
  },
}
