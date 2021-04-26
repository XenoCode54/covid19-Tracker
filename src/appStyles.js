import styled from "styled-components";

export const MainApp = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.div`
text-align: center;
margin: 10px 20px 0;
border-radius: 15px;
padding: 15px;
box-sizing: border-box;
background: #3799e2;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
font-size: 2rem;
color: white;
`

export const OverviewSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 20px 10px;
`

export const OverviewCard = styled.div`
width: 49%;
display: flex;
flex-direction: column;
border-radius: 15px;
padding: 15px;
box-sizing: border-box;
background: #ecf0f3;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`

export const NewSection = styled.div`
grid-area: new;
`

export const ChartSection = styled.div`
grid-area: chart;

`

export const CountrySection = styled(OverviewCard)`
flex-direction: row;
justify-content: center;
`

export const CountryCaseSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: 80px;
`

export const CaseCardSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const CaseCardBody = styled.div`
display: inline-block;
padding: 1rem;
margin-bottom: 20px;
text-align: center;
background: #ecf0f3;
font-size: 14px;
border-radius: 20px;
box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
`

export const HeaderText = styled.div`
letter-spacing: 1px;
`
export const NumberText = styled.div`
font-size: 1.5em;
letter-spacing: 2px;
`

export const LineChartSections = styled.div`
margin-top: 20px;
flex-grow: 1;
`
