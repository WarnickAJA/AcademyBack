const mongoose = require('mongoose');

//code de chatgpt
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not set');
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.name === 'MongoNetworkError') {
      console.log('Make sure your MongoDB is running');
    }
    process.exit(1); //¿Es necesario o recomendable?
  }
};

module.exports = connectDB;