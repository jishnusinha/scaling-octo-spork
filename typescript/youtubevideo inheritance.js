var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebookDetails = /** @class */ (function () {
    function facebookDetails(videoTitle, videoLength, videoPublishedOn, videoPublishedBy, baseurl, lifeEvents, NumberofDislike, NumberofComments) {
        this.videoTitle = videoTitle;
        this.videoLength = videoLength;
        this.videoPublishedOn = videoPublishedOn;
        this.videoPublishedBy = videoPublishedBy;
        this.baseurl = baseurl;
        this.lifeEvents = lifeEvents;
        this.NumberofDislike = NumberofDislike;
        this.NumberofComments = NumberofComments;
        this.videoTitle = videoTitle;
        this.videoLength = videoLength;
        this.videoPublishedOn = videoPublishedOn;
        this.videoPublishedBy = videoPublishedBy;
        this.baseurl = baseurl;
        this.NumberofDislike = NumberofDislike;
        this.NumberofComments = NumberofComments;
    } //end of constructor
    return facebookDetails;
}());
var IMAGINE_DRAGON = /** @class */ (function (_super) {
    __extends(IMAGINE_DRAGON, _super);
    function IMAGINE_DRAGON(videoTitle, videoLength, videoPublishedOn, videoPublishedBy, baseurl, numberOfView, NumberofDislike, NumberofComments) {
        var _this = _super.call(this, videoTitle, videoLength, videoPublishedOn, videoPublishedBy, baseurl) || this;
        _this.videoTitle = videoTitle;
        _this.videoLength = videoLength;
        _this.videoPublishedOn = videoPublishedOn;
        _this.videoPublishedBy = videoPublishedBy;
        _this.baseurl = baseurl;
        _this.numberOfView = numberOfView;
        _this.NumberofDislike = NumberofDislike;
        _this.NumberofComments = NumberofComments;
        // method
        _this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        _this.getvideoLength = function () {
            return _this.videoLength;
        };
        _this.getvideoPublishedOn = function () {
            return _this.videoPublishedOn;
        };
        _this.getvideoPublishedBy = function () {
            return _this.videoPublishedBy;
        };
        _this.getbaseurl = function () {
            var link = "/watch?v=hXQxSi34GWY";
            return _this.baseurl + link;
        };
        _this.getnumberOfView = function () {
            return _this.numberOfView;
        };
        return _this;
    }
    return IMAGINE_DRAGON;
}(facebookDetails));
var video = new IMAGINE_DRAGON("Believer - Imagine Dragons - Fingerstyle Guitar Cover", 4, "Jul 29, 2017", "Eddie Van", "https://www.youtube.com/");
console.log("Heading:" + video.getvideoTitle() + "\n VIDEO LENGTH: " + video.getvideoLength() + "min \n PUBLISHED ON :" + video.getvideoPublishedOn() + "\n PUBLISHED BY :" + video.getvideoPublishedBy() + "\n URL :" + video.getbaseurl());
