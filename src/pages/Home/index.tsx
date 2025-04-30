import styled from 'styled-components';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import SelectList from '../../components/SelectList';
import { ChartInfoProvider } from '../../contexts/ChartInfo/ChartInfoProvider';
import Footer from '../../components/Footer';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    min-height: 100vh;
`;

function Home() {
    return (
        <HomeContainer>
            <Header />
            <ChartInfoProvider>
                <SelectList />
                <LineChart />
            </ChartInfoProvider>
            <Footer />
        </HomeContainer>
    );
}

export default Home;