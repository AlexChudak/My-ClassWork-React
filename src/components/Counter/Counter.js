import React from 'react';
import './Counter.css';
import Controls from './Controls';

class Counter extends React.Component {  
//Вначале идет статика.
    static defaultProps = {
        initialValue:3,
    }

//Далее идет State
    state = { value:this.props.initialValue };
    
// Пишет медоды для изминения
  
    handleIncrement = event => {
        // this.setState({ value: 444, })
        this.setState(prevState => { return { value: prevState.value + 1 } }
        );
    }

    handleDecrement = event => {
        this.setState(prevState => {
            return { value: prevState.value - 1 }
        });
    }
//Заканчиваем методом Рендео, тоесть разметка
    render () {
        return (
            <div className="Counter">
                <span className="Counter__value" >{this.state.value}</span>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}/>
              
            </div>
        );
    }
}

export default Counter;