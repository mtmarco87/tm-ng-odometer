/**
 * Created: 2017-02-23 by Jose Andres
 */

export const SLOT_MACHINE_THEME =
  `
    @import url("//fonts.googleapis.com/css?family=Rye");
    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-slot-machine {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-slot-machine .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-spacer {
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
        }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-inner {
        text-align: left;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-ribbon {
        display: block;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-ribbon-inner {
        display: block;
        -webkit-backface-visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-value {
        display: block;
        -webkit-transform: translateZ(0);
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-value.odometer-last-value {
        position: absolute;
    }
    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-theme-slot-machine.odometer-animating-up .odometer-ribbon-inner {
        -webkit-transition: -webkit-transform 2s;
        -moz-transition: -moz-transform 2s;
        -ms-transition: -ms-transform 2s;
        -o-transition: -o-transform 2s;
        transition: transform 2s;
    }
    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-slot-machine.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
    .odometer.odometer-theme-slot-machine.odometer-animating-down .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-slot-machine.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
        -webkit-transition: -webkit-transform 2s;
        -moz-transition: -moz-transform 2s;
        -ms-transition: -ms-transform 2s;
        -o-transition: -o-transform 2s;
        transition: transform 2s;
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }
    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-slot-machine {
        -moz-border-radius: 0.34em;
        -webkit-border-radius: 0.34em;
        border-radius: 0.34em;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSI` +
  `xLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYm` +
  `plY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmYwM` +
  `CIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmYTUwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdp` +
  `ZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background-size: 100%;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffff00), color-stop(100%, #ffa500));
        background-image: -moz-linear-gradient(#ffff00, #ffa500);
        background-image: -webkit-linear-gradient(#ffff00, #ffa500);
        background-image: linear-gradient(#ffff00, #ffa500);
        background-color: #fc0;
        font-family: "Rye", monospace;
        padding: 0.15em;
        color: #f80000;
        line-height: 1.35em;
        border: 0.03em solid #000;
        -webkit-text-stroke: 0.05em #000;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-slot-machine .odometer-digit {
        -moz-box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        -moz-border-radius: 0.2em;
        -webkit-border-radius: 0.2em;
        border-radius: 0.2em;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPS` +
  `IxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJv` +
  `YmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2` +
  `NjYyIvPjxzdG9wIG9mZnNldD0iMjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSI4MCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48` +
  `c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD` +
  `0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=');
        background-size: 100%;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #cccccc), color-stop(20%, #ffffff), ` +
  `color-stop(80%, #ffffff), color-stop(100%, #cccccc));
        background-image: -moz-linear-gradient(top, #cccccc 0%, #ffffff 20%, #ffffff 80%, #cccccc 100%);
        background-image: -webkit-linear-gradient(top, #cccccc 0%, #ffffff 20%, #ffffff 80%, #cccccc 100%);
        background-image: linear-gradient(to bottom, #cccccc 0%, #ffffff 20%, #ffffff 80%, #cccccc 100%);
        border: 0.03em solid #444;
        padding: 0.1em 0.15em 0;
    }
    .odometer.odometer-auto-theme .odometer-digit:first-child,
    .odometer.odometer-theme-slot-machine .odometer-digit:first-child {
        -moz-box-shadow: inset 0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: inset 0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        box-shadow: inset 0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
    }
    .odometer.odometer-auto-theme .odometer-digit:last-child,
    .odometer.odometer-theme-slot-machine .odometer-digit:last-child {
        -moz-box-shadow: inset -0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: inset -0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
        box-shadow: inset -0.05em 0 0.1em rgba(0, 0, 0, 0.5), 0 0 0 0.03em #fff, 0 0 0 0.05em rgba(0, 0, 0, 0.2);
    }
    .odometer.odometer-auto-theme .odometer-digit + .odometer-digit,
    .odometer.odometer-theme-slot-machine .odometer-digit + .odometer-digit {
        margin-left: 0.15em;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-inner {
        padding-top: 0.08em;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-slot-machine .odometer-digit .odometer-value.odometer-last-value {
        left: 0;
        right: 0;
        text-align: center;
    }
`;
