window.CytubeEnhancedUITab = function (app, name, title, sort) {
    'use strict';
    var that = this;

    this.$button = $('<li><a href="#' + app.prefix + name + '__content" class="' + name + '__button" data-toggle="tab">' + title + '</a></li>');
    this.$content = $('<div id="' + app.prefix + name + '__content" class="tab-pane">');
    this.$form = app.UI.createControlsWrapper('horizontal').appendTo(this.$content);
    this.sort = Math.abs(parseInt(sort, 10)) || 0;
    this.controls = {};


    /**
     * Shows the tab
     */
    this.show = function () {
        that.$button.find('a').tab('show');
        $(document).trigger(app.prefix + 'tab-' + name + '.show');
    };
    this.$button.on('show.bs.tab', function () {
        $(document).trigger(app.prefix + 'tab-' + name + '.show');
    });


    /**
     * Adds action on selecting tab
     * @param callback Callback to be called on selecting tab
     */
    this.onShow = function (callback) {
        $(document).on(app.prefix + 'tab-' + name + '.show', function () {
            callback(that);
        });
    };


    /**
     * Adds custom control to tab
     * @param {String} type Type of control function
     * @param {String} controlType Control's type (default, horizontal, inline)
     * @param {String} title Label's title
     * @param {String} name Name of the control
     * @param {Object} [options] Options for the control.
     * @param {Function} [handler] Callback, which is calling on every control's change.
     * @param {Number} [sort] Position of control (positive integer number, the higher the value, the "bottomer" the control)
     * @param {jQuery} [$customContainer] Custom container for control
     * @returns {jQuery}
     */
    this.addControl = function (type, controlType, title, name, options, handler, sort, $customContainer) {
        type = (['select', 'checkbox'].indexOf(type) != -1) ? type : 'select';
        sort = Math.abs(parseInt(sort, 10)) || 0;
        var controlFunctionName = 'create' + type.slice(0, 1).toUpperCase() + type.slice(1) + 'Control';

        var $control = app.UI[controlFunctionName](controlType, title, name, options, handler);
        $control.data('sort', sort);

        that.controls[name] = {$el: $control, sort: sort};
        if ($customContainer) {
            $control.appendTo($customContainer);
        } else {
            $control.appendTo(that.$form);
        }

        that.sortControls();

        return $control;
    };


    this.sortControls = function () {
        var controlsArray = [];
        for (var control in that.controls) {
            controlsArray.push(that.controls[control]);
        }

        controlsArray = controlsArray.sort(function (a, b) {
            if (a.sort > b.sort) {
                return 1;
            } else if (a.sort < b.sort) {
                return -1;
            } else {
                return 0;
            }
        });

        for (var controlIndex = 0, controlsLength = controlsArray.length; controlIndex < controlsLength; controlIndex++) {
            controlsArray[controlIndex].$el.detach().appendTo(that.$form);
        }
    };


    /**
     * Returns tab's name
     */
    this.getName = function () {
        return name;
    };


    /**
     * Removes tab's markup
     */
    this.remove = function () {
        that.$button.empty();
        that.$content.empty();
    };
};