// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      url: 'postgres://dpkpprkyblvciw:4f3bbe3cb01d4a329abe130fbec67970ad55ca583c3e5f6d1ea004e986297411@ec2-54-197-48-79.compute-1.amazonaws.com:5432/di0k0e1mc3gi0',
      database: 'di0k0e1mc3gi0',
      user:     'dpkpprkyblvciw',
      password: '4f3bbe3cb01d4a329abe130fbec67970ad55ca583c3e5f6d1ea004e986297411',
      host: 'ec2-54-197-48-79.compute-1.amazonaws.com'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
