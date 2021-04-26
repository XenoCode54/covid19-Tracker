import React, {useState} from "react";
import CaseCard from "./CaseCard";
import {CaseCardSection, LineChartSections, OverviewCard} from "../appStyles";
import {Line} from 'react-chartjs-2';


function New() {
    const [data, setData] = useState({});

    return (
        <OverviewCard>
            <CaseCardSection>
                <CaseCard/>
                <CaseCard/>
                <CaseCard/>
            </CaseCardSection>
            <LineChartSections>
                <Line
                    height={80}
                    width={160}
                    data={data}
                    options={{
                        title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </LineChartSections>
        </OverviewCard>
    );
}

export default New;
