require('jquery-csv');
const {MongoClient} = require('mongodb');
async function main() {
    uri='mongodb+srv://geldbogen2:548L22XWv4iCxB8.en2gjsz.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri);
    client.connect();
    db.createCollection("languages")
}
main();