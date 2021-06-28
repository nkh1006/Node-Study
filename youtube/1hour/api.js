const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server localhost:3001');
});

const key = {
    apiKey: 'GN2V44N-FPM4W8R-MS0ST49-5NPC6EE',
    uuid: '8545b212-7da8-4e23-a641-9d112d6cc339'
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let {apikey, type} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid');
    } else {
        if (type === 'seoul') {
            let data = [
                {name: '홍길동', city:'seoul'},
                {name: '김철수', city:'seoul'},
            ];
            res.send(data);
        } else if (type === 'jeju') {
            let data = [
                {name: '박길동', city:'jeju'},
                {name: '최철수', city:'jeju'},
            ];        
            res.send(data);
        } else {
            res.send('Type is not correct.');
        }
    }
});

app.get('/api/sales/:apikey/:year', async (req, res) => {
    let {apikey, year} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid');
    } else {
        if (year === '2019') {
            let data = [
                {product: '제품1', code:'1'},
                {product: '제품2', code:'2'},
            ];
            res.send(data);
        } else if (year === '2020') {
            let data = [
                {product: '제품3', city:'3'},
                {product: '제품4', city:'4'},
            ];        
            res.send(data);
        } else {
            res.send('Type is not correct.');
        }
    }
});