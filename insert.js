const dbConnect = require('./mongodb');

const insertData = async () => {
    let resp = await dbConnect();

    let result = await resp.insertMany(
    [
        {name:'jack',email: 'jack@gmail.com',mobile: 9876543210},
    //     {name:'sam',email: 'sam@gmail.com',mobile: 9876543210},
    //     {name:'peter',email: 'peter@gmail.com',mobile: 9876543210},
    ]
    );
    if(result.acknowledged){
        console.log('Data inserted successfully!');
    }
    else{ 
        console.log('Failed to insert data!');
    }
}

insertData();