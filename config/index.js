const NODE_ENV = process.env.NODE_ENV

const config = {
  test: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`
  },
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`
  }

}
module.exports = config[NODE_ENV]

// https://www.youtube.com/watch?v=_DzBez4qMi0&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=11
