/**
 * Created by Administrator on 2015/11/26.
 */
var React = require('react');
var AppAction = require('../../actions/appAction');

var ReactPropTypes = React.propTypes;

module.exports = React.createClass({
    _changeRole: e => {
        e.preventDefault();
        AppAction.change("Admin");
    },

    render: function(){
        return (
            <div className='control'>
                <a href='#' onClick={this._changeRole} ><span>Admin</span></a>
                &nbsp;
                <a href='#'><span>User</span></a>
            </div>
        );
    }
});