const path = require("path");
exports.game = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'game-page.html'));

};
