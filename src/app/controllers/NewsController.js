class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('new')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('send detail')
    }
}

module.exports = new NewsController;