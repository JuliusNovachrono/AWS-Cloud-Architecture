export const handler = async (event) => {
  const lat = event.queryStringParameters?.lat;
  const lon = event.queryStringParameters?.lon;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      return {
          statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
              temperature: data.current_weather.temperature,
              windspeed: data.current_weather.windspeed
          })
      };

  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to fetch weather" })
      };
  }
};
