"use strict";

function getThemeValue(props, value) {
    if (typeof value === "function") {
        return value(props);
    } else {
        return value;
    }
}

function theme(name, values) {
    return function(props) {
        return getThemeValue(name, props, values);
    };
}

theme.variants = function(prop, values) {
    return function(props) {
        var variant = props[prop] && values[props[prop]];
        return variant && getThemeValue(props, variant);
    };
};

module.exports = theme;
