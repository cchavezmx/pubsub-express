// https://cloud.google.com/pubsub/docs/apis

const { PubSub } = require('@google-cloud/pubsub');
const GOOGLE_CRED = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
const TOPIC_NAME = process.env.PUBSUB_TOPIC_NAME

module.exports = {
  creteMessage: async(req) => {
    
    const publish = async (
      projectId = GOOGLE_CRED.projectId,
      topicName = TOPIC_NAME,      
    ) => {
      const pubsub = new PubSub({ projectId });
      const data = JSON.stringify(req)
      const dataBuffer = Buffer.from(data);

      const message = await pubsub.topic(topicName).publish(dataBuffer);      
      return message;
    }      

    return await publish()    
    .then(messageId => { 
      console.log(`Message ${messageId} published.`);     
      return messageId
    })

  },
}