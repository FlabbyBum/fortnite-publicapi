const request = require('request');
async function Return(data, callback) {
    try {
        if (callback == undefined) {
            return JSON.parse(data);
        } else {
            return callback(JSON.parse(data))
        }
    } catch (e) {
        if (callback == undefined) {
            return e;
        } else {
            return callback(e)
        }
    }
}

/* Fortnite */
module.exports.FortniteStatus = (callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status',
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.FortniteStore = (language, callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/store/get',
        {qs: {
            language: language
        }},
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.FortniteNews = (language, callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get',
        {qs: {
            language: language
        }},
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
/* Player Information */
module.exports.Search = (Query, callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/users/id',
        {qs: {
            username: Query
        }},
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.Stats = (uid, platform, callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats',
        {qs: {
            user_id: uid,
            platform: platform
        }},
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
/* Weapons/Items */
module.exports.AllWeapons = (callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/weapons/get',
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.AllItems = (callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/items/list',
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.UpcomingItems = (callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get',
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};
module.exports.Item = (ids, callback) => {
    request.post(
        'https://fortnite-public-api.theapinetwork.com/prod09/item/get',
        {qs: {
            ids: ids
        }},
        async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                Return(body, callback)
            } else {
                Return(error, callback)
            }
        }
    );
};