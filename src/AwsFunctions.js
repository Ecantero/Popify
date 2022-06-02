import * as AWS from 'aws-sdk'

AWS.config.update({region: 'us-west-1', secretAccessKey: '1ANCxy56WfjmLFhFjveFhbcK7swZk2RS9c8olfw5',
accessKeyId: 'AKIAUBQP5LDCTKAXPKOQ'})

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (table_test) => {
    var params = {
        TableName: table_test
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

export const putData = (table_test, data) => {
    var params = {
        TableName: table_test,
        Item: data
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}