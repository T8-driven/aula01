const os = require("os");

console.log(os.platform());
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.totalmem());// total de memoria em bytes
console.log(os.totalmem() / 1024 / 1024 / 1024); // total de memoria em GB
