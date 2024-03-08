const shortid  = require("shortid");
const Url = require("../models/url");
async function handleGenerateShortUrl(req, res)
{
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"});
    const shortId = shortid(8);
    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.render("home", {
        id: shortId
    });
}

async function handleGetResult(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId
    }, {
        $push:{
            visitHistory: {timeStamp: Date.now()},
        }
    });

    res.redirect(entry.redirectUrl)
}

async function handleAnalyticsOfRoute(req, res)
{
    const shortId = req.params.shortId;
    const result = await Url.findOne({
        shortId
    });

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleGetResult,
    handleAnalyticsOfRoute
}