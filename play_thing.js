require('jquery-csv');
const {MongoClient} = require('mongodb');
async function main() {
    uri='mongodb+srv://geldbogen:2KrudEufu@cluster0.en2gjsz.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri);

}
main();