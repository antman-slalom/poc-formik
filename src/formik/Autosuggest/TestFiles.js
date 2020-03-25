import React from 'react';

import PropTypes from 'prop-types';

// import this to help speed up comparing of current and previous values (see below)
import isEqual from 'react-fast-compare';

// Ref info
// diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// document: https://reactjs.org/docs/react-component.htm
class Lifecyle extends React.Component {
    constructor(props) {
        super(props);
        // this is a good spot to set initial values

        // this is called first
        console.log('I am first');
    }

    static getDerivedStateFromProps(props, state) {
        // this replaces and is safer than componentWillReceiveProps()
        // this is called right beefore render()

        console.log('I am called before render()');

        // return the new state value
        if (props.id !== state.id) {
            return {
                id: props.id,
            };
        }

        // return null to indicate no change to state
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // can be handy sometimes when you don’t want React to render your state or prop changes
        // cannot update component state in here

        console.log('I am called any time props or state values are updated');

        // use isEqual for fast compare of objects
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // can capture values prior to losing previous values.
        console.log('I am called after render, but before the updates are commited to the DOM / browser');

        // value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
        if (prevProps.id < prevState.id) {
            return this.props.id - prevProps.id;
        }

        return null;
    }

    static componentDidUpdate(prevProps, prevState, snapshot) {
        // invoked immediately after updating occurs
        console.log('I am called after render and snapshot has been commited to the DOM');

        if (snapshot) {
            // do some action
        }
    }

    static componentDidMount() {
        // can call setState in here, but will trigger a rendering
        console.log('I am called after the component has mounted (inserted into the tree)');
    }

    static componentWillUnmount() {
        // calling setState in here is pointless as all data will be lost
        console.log('I am called when the component is unmounted and destroyed.');
    }

    render() {
        // render the component

        console.log('I am called if shouldComponentUpdate() is true');

        return (
            <React.Fragment>
                Example Class
            </React.Fragment>
        );
    }
}

Lifecyle.propTypes = {
    id: PropTypes.number,
};

export default Lifecyle;
