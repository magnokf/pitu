import app  from './app';

import database from './database';
database.sync({});
console.log('Database running at 5000');

app.listen(3001);
console.log('server running at 3001');