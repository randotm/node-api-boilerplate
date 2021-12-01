const app = require('./app');
const dbConnection = require('./connection');
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await dbConnection;

    const serverConnection = app.listen(port, () =>
      console.log(`Api listening at http://localhost:${port}/api`)
    )
  } catch (error) {
    console.log(`Server encountered ${error}`);
  }
}

module.exports = { start };