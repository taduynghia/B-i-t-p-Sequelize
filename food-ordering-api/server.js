import app from './app.js';
import sequelize from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
