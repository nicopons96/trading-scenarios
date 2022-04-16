import React from 'react';
import ScenarioPanel from './ScenarioPanel';
import TradingView from './TradingView';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='tradingview'>
                    <TradingView></TradingView>
                </div>
                <div className='scenario-panel'>
                    <ScenarioPanel></ScenarioPanel>
                </div>
                <div className='trades'></div>
                <div className='infos'></div>
            </div>
        )
    }
}

export default Layout;