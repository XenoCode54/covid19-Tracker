import React, { useEffect, useState } from "react";
import { NumberText, OverviewCard } from "../appStyles";
import { Bar } from "react-chartjs-2";

function Chart(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [barData, setBarData] = useState({});
  const [error, setError] = useState(null);

  //Function to sort in descending order
  // eslint-disable-next-line no-extend-native
  Array.prototype.sortBy = function (p) {
    return this.slice(0).sort(function (a, b) {
      return a[p] < b[p] ? 1 : a[p] > b[p] ? -1 : 0;
    });
  };

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to get resource");
        }
        return res.json();
      })
      .then((requests) => {
        console.log(requests);
        const countryData = requests.Countries;
        const newCountryData = countryData.sortBy("TotalConfirmed");
        console.log(newCountryData[0].Country);

        setBarData({
          labels: [
            newCountryData[0].Country,
            newCountryData[1].Country,
            newCountryData[2].Country,
            newCountryData[3].Country,
            newCountryData[4].Country,
          ],
          datasets: [
            {
              label: "Total Confirmed",
              backgroundColor: "rgba(192,187,40,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [
                newCountryData[0].TotalConfirmed,
                newCountryData[1].TotalConfirmed,
                newCountryData[2].TotalConfirmed,
                newCountryData[3].TotalConfirmed,
                newCountryData[4].TotalConfirmed,
              ],
            },
            {
              label: "Total Recovered",
              backgroundColor: "rgba(15,192,092,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [
                newCountryData[0].TotalRecovered,
                newCountryData[1].TotalRecovered,
                newCountryData[2].TotalRecovered,
                newCountryData[3].TotalRecovered,
                newCountryData[4].TotalRecovered,
              ],
            },
            {
              label: "Total Deaths",
              backgroundColor: "rgba(195,092,092,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [
                newCountryData[0].TotalDeaths,
                newCountryData[1].TotalDeaths,
                newCountryData[2].TotalDeaths,
                newCountryData[3].TotalDeaths,
                newCountryData[4].TotalDeaths,
              ],
            },
          ],
        });
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <OverviewCard>
      <NumberText style={{ margin: "0 auto 20px auto" }}>
        Top 5 Country Cases
      </NumberText>
      {error ? (
        <h4>{error}</h4>
      ) : isLoading ? (
        <h3>Generating Lots of Data...</h3>
      ) : (
        <Bar
          data={barData}
          options={{
            title: {
              display: true,
              text: "",
              fontSize: 40,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      )}
    </OverviewCard>
  );
}

export default Chart;
