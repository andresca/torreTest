const https = require('https');

const basePath = 'https://bio.torre.co/';

const bioCall = (bioName) => {
    return new Promise(resolve => {
        https.get(`${basePath}api/bios/${bioName}`, (res) => {
        let personalData = '';

        res.on('data', (d) => {
            personalData += d
        });
        res.on('end', () => {
            resolve(personalData)
        });
        })
    })
}

module.exports.bioCall = bioCall;