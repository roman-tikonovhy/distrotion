const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:9000';

// const client = new MongoClient(url);
// await client.connect();
// //   console.log('Connected successfully to server');

exports.insertMany =  async (db_input,collection_input,input) => {
    
  const client = new MongoClient(url);
  await client.connect();
//   console.log('Connected successfully to server');
  const db = client.db(db_input);
  const collection = db.collection(collection_input);
  let res = await collection.insertMany(input);

  return res;

};

exports.find =  async (db_input,collection_input,input) => {
    
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(db_input);
    const collection = db.collection(collection_input);
    let res = await collection.find(input).toArray();
    

    return res;
  };

  exports.update =  async (db_input,collection_input,input1,input2) => {
    
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(db_input);
    const collection = db.collection(collection_input);
    let res = await collection.updateOne(input1,input2);
    //updateOne({ a: 3 }, { $set: { b: 1 } });

    return res;
  };