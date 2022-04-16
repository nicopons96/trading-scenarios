import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
 
class TradingView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TradingViewWidget
            symbol='BINANCE:BTCUSDT'
            theme={Themes.DARK}
            timezone='Europe/Paris'
            withdateranges={true}
            autosize
            studies={[
                'MASimple@tv-basicstudies',
                'MASimple@tv-basicstudies',
                'MASimple@tv-basicstudies',
                'BB@tv-basicstudies',
                'BB@tv-basicstudies'
            ]}
        />
    }
}

export default TradingView;