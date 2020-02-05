import React, {Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

  render() {
    console.log('this.props.storedResults', this.props.storedResults);
    return (
      <div>
        <CounterOutput value={this.props.counter}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter(5)}/>
        <hr/>
        <button onClick={this.props.onStoreResult}>Store result</button>
        <ul>
          {this.props.storedResults.map(storeResult => (
            <li key={storeResult.id} onClick={this.props.onDeleteResult}>{storeResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: (value) => dispatch({type: 'ADD', value}),
    onSubstractCounter: (value) => dispatch({type: 'SUBSTRACT', value}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
