export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        mysql: {
            host: process.env.DATABASE,
            port: process.env.PORT
        }
    }
})