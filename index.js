const dbConnect = require('./mongodb');

// dbConnect().then((resp) =>{
//     resp.find({name:"Satish"}).toArray().then((data) => {
//         console.log(data);
//     });
// });

const main = async () => {
    const resp = await dbConnect();
    const data = await resp.find().toArray();
    console.log(data);
}
main();