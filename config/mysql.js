module.exports = {
    database: 'ajudaae_db', //"d8e77t9rho4bnd", // "ajudaae_db",
    username: 'root', //"lrgmoarmphbxgt",
    password: 'Googleamazon!123', //"afb6436b63658a6ba42878084c538bffafe07a262beacaeb9785681e98d8eb43", //Google@amazon!123
    params: {
        host: 'ajudaaedb.cabz5p5rbadb.us-east-2.rds.amazonaws.com', //'ec2-174-129-41-64.compute-1.amazonaws.com', //
        port: '3306', //'5432',
        dialect: "mysql",
        define: {
            underscored: true,
            freezeTableName: true,
        },
        pool: {
            max: 5,
            min: 0,
            idle: 1 // Keep this very low or it'll make all Lambda requests take longer
        },
    }
}