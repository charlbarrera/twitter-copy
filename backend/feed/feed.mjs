import {FeedController} from './feed.controller.mjs'

app.get('/feed', function(req, res) {
    return FeedController.getFeed(req.query);
});