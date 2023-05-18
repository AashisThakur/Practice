import express from 'express';
import { Request,Response,NextFunction } from 'express';

const app = express();
const PORT:Number = 3000;

interface LocationWithTimeZone {
    location: string;
    timezoneName: string;
    timezoneAbbr:string;
    utcOffset: number;
}

const getLocationWithTimezones = (request:Request,response:Response,next:NextFunction) => {
    let locations: LocationWithTimeZone[] = [
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
}

app.get("/timezones",getLocationWithTimezones);
app.get("/",(req,res) => {
    res.send("HOME")
});
// app.get('/',(req,res) => {
//     console.log(__dirname , "aaa");
//     // res.send( __dirname + "/index.html");
//     res.render("")
// });

app.listen(PORT,() => {
    console.log("listening on PORT : ",PORT);
});