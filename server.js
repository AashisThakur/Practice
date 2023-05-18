"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const getLocationWithTimezones = (request, response, next) => {
    let locations = [
        {
            location: "India",
            timezoneName: "Indian standard time",
            timezoneAbbr: "ist",
            utcOffset: 1,
        },
        {
            location: "China",
            timezoneName: "China standard time",
            timezoneAbbr: "cst",
            utcOffset: 1,
        },
    ];
    response.status(200).json(locations);
};
app.get("/timezones", getLocationWithTimezones);
app.get("/", (req, res) => {
    res.send("HOME");
});
// app.get('/',(req,res) => {
//     console.log(__dirname , "aaa");
//     // res.send( __dirname + "/index.html");
//     res.render("")
// });
app.listen(PORT, () => {
    console.log("listening on PORT : ", PORT);
});
