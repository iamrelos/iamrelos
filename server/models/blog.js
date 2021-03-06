var mongoose = require('mongoose');

var Blog = mongoose.Schema({
    imageUrl: String,
    title: String,
    permalink: String,
    isActive: {type: Boolean, default: false},
    author: String,
    tags: Array,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    preview: String,
    content: String,
    comments: [{author: String, content: String, createdAt: Date}]
});

Blog.methods.toVM = function(){
    var _this = this;

    return {
        title: _this.title,
        author: _this.author,
        imageUrl: _this.imageUrl,
        permalink: _this.permalink,
        preview: _this.preview,
        content: _this.content,
        tags: _this.tags,
        createdAt: _this.createdAt,
        updateAt: _this.updateAt,
        comments: _this.comments
    };
};

Blog.statics.get = function (query, limit, callback) {
    this.find(query).sort({'createdAt': -1}).limit(limit || 10).exec(function(err, data) {
        if (!err) return callback(data);
    });
};

module.exports = mongoose.model('blogs', Blog);