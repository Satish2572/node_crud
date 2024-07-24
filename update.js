const dbConnect = require('./mongodb');

const updateData = async () =>{
    let rep = await dbConnect();
    let result = await rep.updateOne({name: "Satish"},
        {
            $set: {email: "sahu@gmail.com", mobile:6789054321}
        }
    );

    if(result.acknowledged){
        console.log('Data Updated successfully!');
    }
    else{
        console.log('Failed to Updating data!');
    }
}

updateData();