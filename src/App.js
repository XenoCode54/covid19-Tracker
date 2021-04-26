import React from 'react';
import {MainApp, OverviewSection, Title} from "./appStyles";
import Total from "./components/Total";
import Chart from "./components/Chart";
import Country from "./components/Country";


function App() {
    return (
        <MainApp>
            <Title>
                COVID19 TRACKER
            </Title>
            <OverviewSection>
                <Total label="Total World Cases" data={["Total Confirmed", "Total Recovered", "Total Deaths"]} total/>
                <Total label="New World Cases" data={["New Confirmed", "New Recovered", "New Deaths"]}/>
            </OverviewSection>
            <OverviewSection>
                <Chart/>
                <Country/>
            </OverviewSection>
        </MainApp>
    );
}

export default App;
