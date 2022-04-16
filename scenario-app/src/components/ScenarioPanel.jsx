import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

class ScenarioPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tp1: 0,
            tp1Qty: 40,
            tp2: 0,
            tp2Qty: 30,
            tp3: 0,
            tp3Qty: 30,
            tp4: 0,
            tp4Qty: 0,
            sl: 0,
            isCt: false,
            ct: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target);
        this.setState({[event.target.id]: event.target.value});
    }

    handleQtyChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        alert('Scenario posted !');
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            TP1:
                            <input id='tp1' type='text' value={this.state.tp1} onChange={this.handleChange}/>
                        </label>
                        <Box width={300}>
                            <Slider name='tp1Qty' defaultValue={40} aria-label="Default" valueLabelDisplay="auto" onChange={this.handleQtyChange} />
                        </Box>
                    </div>
                    <div>
                        <label>
                            TP2:
                            <input id='tp2' type='text' value={this.state.tp2} onChange={this.handleChange}/>
                        </label>
                        <Box width={300}>
                            <Slider name='tp2Qty' defaultValue={30} aria-label="Default" valueLabelDisplay="auto" onChange={this.handleQtyChange} />
                        </Box>
                    </div>
                    <div>
                        <label>
                            TP3:
                            <input id='tp3' type='text' value={this.state.tp3} onChange={this.handleChange}/>
                        </label>
                        <Box width={300}>
                            <Slider name='tp3Qty' defaultValue={30} aria-label="Default" valueLabelDisplay="auto" onChange={this.handleQtyChange} />
                        </Box>
                    </div>
                    <div>
                        <label>
                            SL:
                            <input id='sl' type='text' value={this.state.sl} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Closing Time:
                            <input id='isCt' type='checkbox' value={this.state.isCt} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <select id='ct' value={this.state.ct} onChange={this.handleChange}>
                            <option value="m15">M15</option>
                            <option value="h1">H1</option>
                            <option value="h4">H4</option>
                            <option value="d1">D1</option>
                            <option value="w1">W1</option>
                        </select>
                    </div>
                    <div>
                        Avbl <span>33.3</span>
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ScenarioPanel;