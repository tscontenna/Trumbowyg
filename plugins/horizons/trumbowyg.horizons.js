/**
*  Insert horizontal bar with color/width/style options
*/
(function($) {
    'use strict';

    // My plugin default options
    var defaultOptions = {};

    var horizons = {};

    horizons.init = function(t) {
        // Fill current Trumbowyg instance with my plugin default options
        t.o.plugins.horizons = $.extend(true, {},
                defaultOptions,
                t.o.plugins.horizons || {}
                );

        t.addBtnDef('horizons', horizons.buildButtonDef(t));
    };

    // horizons.tagHandler: function(element, t) {
    //     console.debug("Not supported yet");
    //     return [];
    // },

    horizons.destroy = function() {
    };

    horizons.buildButtonDef = function (t) {
        var buttonDef = { };

        buttonDef.hasIcon = true;

        buttonDef.fn = function() {
            t.saveRange();

            setTimeout(function(){
                horizons.openModel(t);
              }, 10);
        };

        return buttonDef;
    };

    horizons.openModel = function(t) {
        t.openModalInsert(
            t.lang.horizonsInsertHorizonBar,
            {
                width: {
                    label : t.lang.horizonWidth,
                    type : "number",
                    value: "1",
                },
                color: {
                    label : t.lang.horizonColor,
                    value: "#999999",
                    type: 'color',
                },
                dotted : {
                  label : t.lang.horizonUseDottedLine,
                  type: "checkbox"
                }
            },
            // Callback is called when user confirms
            function(values){
              try {
                var hr = document.createElement("hr");
                if (values['width']) hr.style.borderWidth = values["width"]+"px 0 0 0",
                hr.style.borderStyle = (values["dotted"]) 
                   ? "dotted none none none" 
                   : "solid none none none"
                   ;
                if (values["color"] ) hr.style.borderColor = values['color'];
                
                t.range.deleteContents();
                t.range.insertNode(hr);
                t.syncCode();
                t.$c.trigger('tbwchange');
              } catch (e) {
                console.warn(e);
              }
              return true;   // Return true if you have finished with this modal box
            }
        );
    };

    horizons.langs = {
            en: {
                horizons: 'Horizontal bar',
                horizonWidth : "Bar width",
                horizonColor : "Bar color",
                horizonUseDottedLine : "Use dotted line",
                horizonsInsertHorizonBar : "Insert horizontal bar"
            },
            ja: {
                horizons: '水平線',
                horizonsInsertHorizonBar : "水平線を挿入",
                horizonWidth : "線の太さ",
                horizonColor : "色",
                horizonUseDottedLine : "破線を使用"
            }
        };

    $.extend(true, $.trumbowyg, {
        // Add some translations
        langs: horizons.langs,
        // Add our plugin to Trumbowyg registred plugins
        plugins: {
            horizons: horizons,
        }
    });

})(jQuery);
