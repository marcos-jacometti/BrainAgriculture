import React from "react";
import { Container, MainContent } from "./styles";
import { Header, Content } from "../../components/common/index";
import { ColumnChart, PieStateChart, PieUsedChart, PieCropChart } from "../../components/specific/index";

export default function DashboardPage(){
    return(
        <Container>
            <Header />
            <MainContent>
                <Content minHeight="50vh" maxHeight="50vh" width="50vw">
                    <ColumnChart />
                </Content>
                <Content minHeight="50vh" maxHeight="50vh" width="25vw">
                    <PieStateChart />
                </Content>
                <Content minHeight="50vh" maxHeight="50vh" width="37.5vw">
                    <PieUsedChart />
                </Content>
                <Content minHeight="50vh" maxHeight="50vh" width="37.5vw">
                    <PieCropChart />
                </Content>
            </MainContent>
        </Container>
    );
}