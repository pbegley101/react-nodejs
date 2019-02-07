import React, { Component } from 'react';

class WatchStock extends Component {
    constructor(props){
        super(props)
        this.state = this.getInitialState();

        this.watchStock = this.watchStock.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

        getInitialState() {
            return {symbol: ""};
        }

        watchStock() {
            this.props.watchStockHandler(this.state.symbol);
            this.setState({symbol: ''});
        }

        handleChange(event) {
            this.setState({symbol: event.target.value});
        }

        render (){
            return (
                <div className="row">
                    <div>Available stocks for demo: MCD, BA, BAC, LLY, GM, GE, UAL, WMT, AAL, JPM</div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Comma separated list of stocks to watch..." value={this.state.symbol} onChange={this.handleChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.watchStock}>
                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Watch
                            </button>
                        </span>
                    </div>
                </div>
            );
        }

  }
  
  export default WatchStock;