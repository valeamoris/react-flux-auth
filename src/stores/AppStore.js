/**
 * Created by Administrator on 2015/11/26.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');

var CHANGE_EVENT = 'change';
var assign = require('object-assign');

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange : function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener : function(callback){
        this.on(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action){
    switch (action.actionType) {
        case AppConstants.APP_CHANGE:
            AppStore.emitChange();
    }
});

module.exports = AppStore;