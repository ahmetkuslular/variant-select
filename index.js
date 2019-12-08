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
        var defaultVarient = props[prop] && values['default'];

        return variant
            ? getThemeValue(props, variant)
            : getThemeValue(props, defaultVarient);
    };
};


module.exports = theme;
