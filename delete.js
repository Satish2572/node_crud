const dbConnect = require('./mongodb');

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteMany( {name: "sam"} );
    // console.log(result);

    if(result.deletedCount >= 1){
        console.log('Data Deleted successfully!');
    }
    else{
        console.log('Failed to Deleting data!');
    }
}

deleteData();