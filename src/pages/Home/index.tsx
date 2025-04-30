import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import SelectList from '../../components/SelectList';
import { ChartInfoProvider } from '../../contexts/ChartInfo/ChartInfoProvider';
import Footer from '../../components/Footer';
import { HomeContainer } from "./styles";


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