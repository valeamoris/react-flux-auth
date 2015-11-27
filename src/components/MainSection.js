var React = require('react');
var ReactDom = require('react-dom');
var ControlSetion = require('./module/ControlSection');
var AppStore = require('../stores/AppStore');

module.exports = React.createClass({
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    render: function(){
        return (
            <div className='main'>
                <input/>
                <button>click</button>
                <ControlSetion />
            </div>
        );
    },

    _onChange : function(){
        console.log(123);
    }
});