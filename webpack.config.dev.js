const common = require('./node_modules/juicyfront/wp5_template')

const config = common.config({
    port: 8888,
    applicationName: 'portfolio_main',
    russianName: 'Portfolio',
    exposes:{}
})

module.exports = config;
