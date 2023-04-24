db.version()

const database = 'geography_database';
const collection = 'geography_collection';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);