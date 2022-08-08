const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async tareaUno() {
        try {
            throw new Error('Algun problema');
            await sleep(4000);
            return 'VALOR UNO';
        }
        catch(e) {
            console.log(e);
        }
    },
    async tareaDos() {
        try {
            await sleep(2000);
            return 'VALOR DOS';
        }
        catch(e) {
            console.log(e);
        }
    }
}