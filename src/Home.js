import React, { Component } from 'react';

import  {feed}  from './feed-socket-io';
import WatchStock from './WatchStock'
import  StockTable from "./StockTable";
//import { simulateChange } from './test';



class Home extends Component {

	constructor(props) {
      super(props);
      
      this.state = this.getInitialState();
/*
      simulateChange((err, stock) => {console.log('stock----simulateChange',stock);
          this.setState(
            { 
            stock:stock
            }
            )
        }
        );
        */
        
      this.unwatchStock = this.unwatchStock.bind(this)
	}

	getInitialState(){
        var stocks = {};
        feed.watch(['MCD', 'BA', 'BAC', 'LLY', 'GM', 'GE', 'UAL', 'WMT', 'AAL', 'JPM']);
        feed.onChange(function(stock) {
            stocks[stock.symbol] = stock;
            this.setState({stocks: stocks, last: stock});
        }.bind(this));
        return {stocks: stocks};
    }
    watchStock(symbols) {
        symbols = symbols.replace(/ /g,'');
        var arr = symbols.split(",");
        feed.watch(arr);
    }
    unwatchStock(symbol) {
        feed.unwatch(symbol);
        var stocks = this.state.stocks;
        delete stocks[symbol];
        this.setState({stocks: stocks});
    }

    render() {
        return (
            <div>
                <WatchStock watchStockHandler={this.watchStock}/>
                <StockTable stocks={this.state.stocks} last={this.state.last} unwatchStockHandler={this.unwatchStock}/>
                <div className="row">
                    <div className="alert alert-warning" role="alert">All stock values are fake and changes are simulated. Do not trade based on the above data.</div>
                </div>
            </div>
        );
    }
}

export default Home;