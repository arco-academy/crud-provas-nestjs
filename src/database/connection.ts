import * as sqlite3 from 'sqlite3';

const db = sqlite3.verbose();
const connection = new db.Database('./database.db');

export default connection;
