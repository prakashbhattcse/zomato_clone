import React,{useState} from 'react'
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import TabOptions from '../../components/common/tabOptions';
import DiningOut from '../../components/diningOut';
import Delivery from '../../components/delivery';
import NightLife from '../../components/nightLife';


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <>

            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </>

    );
}

const getCorrectScreen = (tabs) => {
    switch (tabs) {
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>;
        case "Nightlife":
            return <NightLife/>;
        default:
            <Delivery/>
    }
}

export default HomePage

