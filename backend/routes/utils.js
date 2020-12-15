const https = require('https');
const { stringify } = require('querystring');

const bioBasePath = 'https://bio.torre.co/';
const searchBasePath = 'search.torre.co';

const httpsGetCall = (path, resolve) =>{
    return https.get(path, (res) => {
        let personalData = '';

        res.on('data', (d) => {
            personalData += d
        });
        res.on('end', () => {
            resolve(personalData)
        });
    })
}

const httpsPostCall = (path, payload, resolve) =>{
    const options = {
        host: searchBasePath,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(payload).length
        }
    }
    const req = https.request(options, (res) => {
        let personalData = '';

        res.on('data', (d) => {
            personalData += d
        });
        res.on('end', () => {
            resolve(personalData)
        });
        res.on('error', (e) => {
            console.error(e)
        });
    })
    req.write(JSON.stringify(payload))
    return req.end();
}

const bioCall = (bioName) => {
    return new Promise(resolve => {
        httpsGetCall(`${bioBasePath}api/bios/${bioName}`, resolve).end();
    })
}

const searchPeople = (payload, pagination, currency='USD', aggregate=false) => {
    return new Promise(resolve =>{
        httpsPostCall(`/people/_search/?currency=${currency}&periodicity=hourly&lang=en&aggregate=${aggregate}&page=${pagination.page}&offset=${pagination.offset}&size=${pagination.size}`, payload, resolve).end();
    })
}

module.exports.bioCall = bioCall
module.exports.searchPeople = searchPeople