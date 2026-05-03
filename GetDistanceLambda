import https from "https";

export const handler = async (event) => {
    const originLat = event.queryStringParameters.originLat;
    const originLon = event.queryStringParameters.originLon;
    const destLat = event.queryStringParameters.destLat;
    const destLon = event.queryStringParameters.destLon;

    const apiKey = "LKJpuU9CExea5D2SqKCNRD40q3qmIkO6nrOnqXP151MNCjSA7XghWBsbvL1mgT9m";

    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${originLat},${originLon}&destinations=${destLat},${destLon}&key=${apiKey}`;

    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                try {
                    const json = JSON.parse(data);

                    const distance = json.rows[0].elements[0].distance.text;
                    const duration = json.rows[0].elements[0].duration.text;

                    resolve({
                        statusCode: 200,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },
                        body: JSON.stringify({
                            Distance: distance,
                            Duration: duration
                        })
                    });
                } catch (error) {
                    resolve({
                        statusCode: 500,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },
                        body: JSON.stringify({
                            error: "Could not parse Distance Matrix response",
                            rawResponse: data
                        })
                    });
                }
            });
        }).on("error", (err) => {
            resolve({
                statusCode: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    error: err.message
                })
            });
        });
    });
};
