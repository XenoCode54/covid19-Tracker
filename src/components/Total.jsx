import React, {useState, useEffect} from "react";
import CaseCard from "./CaseCard";
import {CaseCardSection, LineChartSections, OverviewCard} from "../appStyles";
import {Line} from 'react-chartjs-2';

function Total(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary').then(res => {
            if (!res.ok) {
                throw Error('Unable to get resource');
            }
            return res.json()
        }).then(requests => {
            console.log(requests);
            setData(
                {
                    labels: props.data,
                    datasets: [{
                        label: props.label,
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: `${props.total ? "rgba(75,192,192,1)" : "rgba(75,100,192,1)"}`,
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 3,
                        data: props.total ? [requests.Global.TotalConfirmed, requests.Global.TotalRecovered, requests.Global.TotalDeaths] : [requests.Global.NewConfirmed, requests.Global.NewRecovered, requests.Global.NewDeaths],
                    }]
                });
        }).then(() => {
            setIsLoading(false);
        }).catch(err => setError(err.message));

    }, [])

    return (
        <OverviewCard>
            <CaseCardSection>
                {error ? <h4>{error}</h4> : isLoading ? <p>Loading...</p> :
                    <CaseCard headerText={props.data[0]} numberText={data.datasets[0].data[0]}/>}
                {error ? <h4>{error}</h4> : isLoading ? <p>Loading...</p> :
                    <CaseCard headerText={props.data[1]} numberText={data.datasets[0].data[1]}/>}
                {error ? <h4>{error}</h4> : isLoading ? <p>Loading...</p> :
                    <CaseCard headerText={props.data[2]} numberText={data.datasets[0].data[2]}/>}
            </CaseCardSection>
            <LineChartSections>
                {error ? <h4>{error}</h4> : isLoading ? <h3>Generating Data...</h3> : <Line
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: 'Total Cases',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />}
            </LineChartSections>
        </OverviewCard>
    );
}

export default Total;
