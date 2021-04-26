import React, {useState, useEffect} from 'react';
import {CountryCaseSection, CountrySection, NumberText} from "../appStyles";
import CaseCard from "./CaseCard";
import {Doughnut} from 'react-chartjs-2';


function Country(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [lastCountryData, setLastCountryData] = useState({});
    const [country, setCountry] = useState('afghanistan');
    const [countries, setCountries] = useState([]);
    const [doughnutChartData, setDoughnutChartData] = useState({});
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(`https://api.covid19api.com/country/${country}`).then(res => {
            if (!res.ok) {
                throw Error('Unable to get resource');
            }
            return res.json();
        }).then(requests => {

            setLastCountryData(requests[requests.length - 1]);

            setDoughnutChartData({
                    labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
                    datasets: [
                        {
                            label: 'Rainfall',
                            backgroundColor: [
                                // '#00A6B4',
                                '#C9DE00',
                                // '#B21F00',
                                '#2FDE00',
                                '#B21F00',
                                '#6800B4'
                            ],
                            hoverBackgroundColor: [
                                '#4B5000',
                                // '#003350',
                                // '#501800',
                                '#175000',
                                '#501800',
                                '#35014F'
                            ],
                            data: [requests[requests.length - 1].Confirmed, requests[requests.length - 1].Recovered, requests[requests.length - 1].Deaths, requests[requests.length - 1].Active]
                        }
                    ]
                }
            );
        }).then(() => {
            setIsLoading(false);
        }).catch(err => setError(err.message));

    }, [country])

    useEffect(() => {
        fetch('https://api.covid19api.com/summary').then(res => {
            if (!res.ok) {
                throw Error('Unable to get resource');
            }
            return res.json()
        }).then(requests => {
            setCountries(requests.Countries);
        }).then(() => {
            setIsLoading(false);
        }).catch(err => setError(err.message));

    }, [])
    return (
        <CountrySection>
            <CountryCaseSection>
                {error ? <h4>{error}</h4> :
                    isLoading ? <h3>Loading...</h3> :
                        <CaseCard headerText='Total Confirmed' numberText={lastCountryData.Confirmed}/>}
                {error ? <h4>{error}</h4> :
                    isLoading ? <h3>Loading...</h3> :
                        <CaseCard headerText='Total Recovered' numberText={lastCountryData.Recovered}/>}
                {error ? <h4>{error}</h4> :
                    isLoading ? <h3>Loading...</h3> :
                        <CaseCard headerText='Total Deaths' numberText={lastCountryData.Deaths}/>}
                {error ? <h4>{error}</h4> :
                    isLoading ? <h3>Loading...</h3> :
                        <CaseCard headerText='Total Active' numberText={lastCountryData.Active}/>}
            </CountryCaseSection>
            <CountryCaseSection>
                <NumberText style={{'margin': "0 auto 10px auto"}}>{country.toUpperCase()}</NumberText>
                <select style={{'marginBottom': '20px'}} name="country" id="country" onChange={(e) => {
                    setCountry(e.target.value)
                }}>
                    {
                        countries.map((country) => {
                            return <option value={country.Slug} key={country.ID}>{country.Country}</option>
                        })
                    }
                </select>
                {error ? <h4>{error}</h4> :
                    isLoading ? <h3>Generating Data...</h3> : <Doughnut
                        data={doughnutChartData}
                        options={{
                            title: {
                                display: true,
                                text: 'Country Cases',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                }
            </CountryCaseSection>
        </CountrySection>
    );
}

export default Country;
