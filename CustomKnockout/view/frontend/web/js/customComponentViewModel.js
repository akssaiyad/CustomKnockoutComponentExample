define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        heading:'content example',
        content:'<strong>Data</strong> binding example',
        navSectionclass: 'nav-sections',
        url: 'https://test.com/',
        getCustomText: function(){
            return "<strong>Custom</strong> Text using <em>function</em> " + this.content;
        },
        getPrice: function(){
            return 25;
        }
    });
});