import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.kpv8cmh.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(`Error in DB connection: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
