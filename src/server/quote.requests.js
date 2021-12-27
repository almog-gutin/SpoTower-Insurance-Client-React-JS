const axios = require('axios');

const NODE_ENV = process.env.NODE_ENV;
const SERVER_URL = NODE_ENV === 'production' ? process.env.REACT_APP_PROD_SERVER : process.env.REACT_APP_DEV_SERVER;

const findQuotes = async (data) => {
    try {
        const result = await axios.post(`${SERVER_URL}/quotes/find`, data);

        const quotes = result.data.data.quotes;

        return quotes;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    findQuotes,
};
