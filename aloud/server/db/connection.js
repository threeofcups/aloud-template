const { Pool } = require('pg')

const db_user = 'postgres';
const db_name = 'aloud';

const config = {
  user: db_user,
  database: db_name,
  max: 10,
  idleTimeoutMillis: 30000
}

const pool = new Pool(config);

module.exports.pool = pool;
module.exports.db_name = db_name;
