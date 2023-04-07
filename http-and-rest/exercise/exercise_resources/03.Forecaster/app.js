function attachEvents() {
    const clearSections = () => {
        document.getElementById(
            "current"
        ).innerHTML = `<div class="label">Current conditions</div>`;
        document.getElementById(
            "upcoming"
        ).innerHTML = `<div class="label">Three-day forecast</div>`;
    };

    const getLocationCodes = async (locationName) => {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        try {
            const request = await fetch(url);
            const data = await request.json();
            console.log(locationName)
            return data.filter(x => x.name.toLowerCase() === locationName.toLowerCase())[0].code;
        } catch(error) {
            console.log(error);
        }        
    }

    const getLocationWeather = async (locationCode) => {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
        try {
            const request = await fetch(url);
            const data = await request.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const getUpcoming = async (locationCode) => {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;

        try {
            const request = await fetch(url);
            const data = await request.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const iconMap = {
        Sunny: "&#x2600;",
        "Partly sunny": "&#x26C5;",
        Overcast: "&#x2601;",
        Rain: "&#x2614;",
    };

    const getWeather = async (e) => {
        clearSections();
        const locationName = document.getElementById('location');
        const locationCode = await getLocationCodes(locationName.value);



        const today = await getLocationWeather(locationCode);
        console.log(today)
        const forecast = await getUpcoming(locationCode);
        console.log(forecast);

        document.getElementById('forecast').style.display = 'block';

        const current = document.getElementById('current');
        const upcomingParentElement = document.getElementById('upcoming');

        if (!locationCode) {
            current.appendChild(document.createTextNode("Error"));
        }


        const forecastsElement = document.createElement("div");
        forecastsElement.classList.add("forecasts");

        const conditionSymbolElement = document.createElement("span");
        conditionSymbolElement.classList.add("condition", "symbol");
        conditionSymbolElement.innerHTML = iconMap[today.forecast.condition];

        const spanContainer = document.createElement('span');
        spanContainer.classList.add('condition');

        const nameElement = document.createElement("span");
        nameElement.classList.add("forecast-data");
        nameElement.textContent = today.name;

        const tempElement = document.createElement("span");
        tempElement.classList.add("forecast-data");
        tempElement.innerHTML = `${today.forecast.low}${"&#176;"}/${
            today.forecast.high
        }${"&#176;"}`;

        const weatherTypeElement = document.createElement("span");
        weatherTypeElement.classList.add("forecast-data");
        weatherTypeElement.textContent = today.forecast.condition;

        spanContainer.appendChild(nameElement);
        spanContainer.appendChild(tempElement);
        spanContainer.appendChild(weatherTypeElement);

        forecastsElement.appendChild(conditionSymbolElement);
        forecastsElement.appendChild(spanContainer);
        current.appendChild(forecastsElement);

        const forecastInfoElement = document.createElement("div");
        forecastInfoElement.classList.add("forecast-info");
        forecast.forecast.forEach((f) => {
            const upcomingElement = document.createElement("span");
            upcomingElement.classList.add("upcoming");

            const symElement = document.createElement("span");
            symElement.classList.add("symbol");
            symElement.innerHTML = iconMap[f.condition];
            upcomingElement.appendChild(symElement);

            const tempForecastElement = document.createElement("span");
            tempForecastElement.classList.add("forecast-data");
            tempForecastElement.innerHTML = `${f.low}${"&#176;"}/${
                f.high
            }${"&#176;"}`;
            upcomingElement.appendChild(tempForecastElement);

            const condElement = document.createElement("span");
            condElement.classList.add("forecast-data");
            condElement.textContent = f.condition;
            upcomingElement.appendChild(condElement);

            forecastInfoElement.appendChild(upcomingElement);
        });
        upcomingParentElement.appendChild(forecastInfoElement);
    }

    document.getElementById('submit').addEventListener('click', getWeather);
}

attachEvents();