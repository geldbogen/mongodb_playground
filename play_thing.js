const csv = require('jquery-csv');
const fs = require("fs");
const {MongoClient} = require('mongodb');
const { error } = require('console');

// fs.open("csv-data/distance from capital to London.csv")
const csv_path ="csv-data/distance from capital to London.csv"
// read file into string named content
var content = fs.readFileSync(csv_path,'utf8');

//
var data= csv.toObjects(content);

console.log(typeof(data))
console.log((data.length))
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    element["name"] = element["0"]
    element["capital"] = element["1"]
    element["distance from capital to London"] = element["2"]
    delete element["0"]
    delete element["1"]
    delete element["2"]
}
console.log(data)

async function main() {
    uri='mongodb+srv://geldbogen:2KrudEufu@cluster0.en2gjsz.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri);
    try {
    await client.connect();
    const training_geography = client.db("training_geography");
    const countries = training_geography.collection("Countries")
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const result = await countries.insertOne(element);   
        console.log(index);     
    }
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}
async function listAllDatabases(client) {
    const databaseList = await client.db().admin().listDatabases() ;
    databaseList.databases.forEach(element => {
        console.log(element)
    });
}
main();