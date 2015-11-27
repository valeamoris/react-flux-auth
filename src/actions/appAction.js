/**
 * Created by Administrator on 2015/11/26.
 */
var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require('../constants/AppConstants');

var action = {
    change : function(role){
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE
        })
    }
};

module.exports = action;