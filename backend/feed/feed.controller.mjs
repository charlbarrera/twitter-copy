import { FeedService } from 'feed.service.mjs';

class FeedController {

    static getFeed(query) {
        return FeedService.getFeed(query);
    }
}