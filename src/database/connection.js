import sql from 'mssql'
const dbSettings = {
    user: 'Joham',   
    password: '22100166' ,
    server: 'localhost',
    database: 'WebStore',
    options:{
        encrypt: true,
        trustServerCertificate: true,
    },
}
async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch(error){
        console.error(error);
    }
    
}

getConnection();
