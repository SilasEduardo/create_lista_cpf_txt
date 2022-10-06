const fs = require('fs').promises;


module.exports = function(caminho, dados){
    return fs.writeFile(caminho, dados, {flag: 'w'})
}
