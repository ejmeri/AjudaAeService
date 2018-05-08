module.exports = {
    database: "ajudaae_db",
    username: "root",
    password: "Googleamazon!123", //Google@amazon!123
    params: {
        host: 'ajudaaedb.cabz5p5rbadb.us-east-2.rds.amazonaws.com',
        port: '3306',
        dialect: "mysql",
        define: {
            underscored: true,
            freezeTableName: true,
        }
    }
}