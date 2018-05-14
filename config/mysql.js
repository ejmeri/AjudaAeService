module.exports = {
    database: 'ajudaae_db',//'dbsnh3fvi5vqnd', // //"dbsnh3fvi5vqnd", //
    username: 'root',//"oohwmnwcudtdeq", //, //
    password: '', //"475be89406bcc380fde09ec2000d0a45a7d9c44349b2cc0038c89844993fa3c9", //'Googleamazon!123', //, //Google@amazon!123
    params: {
        host:  'localhost',//'ec2-54-163-240-54.compute-1.amazonaws.com', //'ajudaaedb.cabz5p5rbadb.us-east-2.rds.amazonaws.com', // //
        port: '3306',//'5432', // //
        dialect: "mysql",
        define: {
            underscored: true,
            freezeTableName: true,
        }
    }
}