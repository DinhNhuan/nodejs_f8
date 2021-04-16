const newsRoute = require('./news');
const siteRoute = require('./sites');
const courseRoute = require('./courses');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/courses', courseRoute);
    app.use('/', siteRoute);
}
module.exports = route;