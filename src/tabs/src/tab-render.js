/**
 * @fileOverview Single tab render in tab bar.
 * @author yiminghe@gmail.com
 */
KISSY.add("tabs/tab-render", function (S, Button) {

    return Button.Render.extend({
        createDom: function () {
            this.get("el").attr("role", "tab");
        },
        _uiSetSelected: function (v) {
            var el = this.get("el");
            el[v ? 'addClass' : 'removeClass'](this.get("selectedCls"));
            el.attr('aria-selected', !!v);
        }
    }, {
        ATTRS: {
            selected: {
                value: false
            },
            selectedCls: {
                value: 'ks-tabs-tab-selected'
            }
        },
        HTML_PARSER: {
            selected: function (el) {
                return el.hasClass(this.get("selectedCls"));
            }
        }
    }, {
        xclass: 'tabs-tab'
    });

}, {
    requires: ['button']
});