// require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///highlonesome100',
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
  },
};
