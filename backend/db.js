import {mongoose} from 'mongoose';

const db = async () => {
  try {
    const link = 'mongodb+srv://Anjana_123:SSG0FPQcNKwnLX1I@mallsage.micefmh.mongodb.net/mallsage_DB?retryWrites=true&w=majority';
    mongoose.connect(link, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { connection } = mongoose;
    connection.once('open', () => {
      console.log('MongoDB Connection Success!');
    });
  } catch (err) {
    console.log('Database connection error:', err);
  }
};

export default db;