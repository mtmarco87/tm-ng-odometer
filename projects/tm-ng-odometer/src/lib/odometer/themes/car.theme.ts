/**
 * Created by Jose Andres on 2017/02/23
 */

export const CAR_THEME =
  `
    @import url("//fonts.googleapis.com/css?family=Arimo");
    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-car {
        display: inline-block;
        vertical-align: middle;
        *vertical-align: auto;
        *zoom: 1;
        *display: inline;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-car .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        *vertical-align: auto;
        *zoom: 1;
        *display: inline;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
    .odometer.odometer-theme-car .odometer-digit .odometer-digit-spacer {
        display: inline-block;
        vertical-align: middle;
        *vertical-align: auto;
        *zoom: 1;
        *display: inline;
        visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-car .odometer-digit .odometer-digit-inner {
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
    .odometer.odometer-theme-car .odometer-digit .odometer-ribbon {
        display: block;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
    .odometer.odometer-theme-car .odometer-digit .odometer-ribbon-inner {
        display: block;
        -webkit-backface-visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value,
    .odometer.odometer-theme-car .odometer-digit .odometer-value {
        display: block;
        -webkit-transform: translateZ(0);
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
    .odometer.odometer-theme-car .odometer-digit .odometer-value.odometer-last-value {
        position: absolute;
    }
    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner {
        -webkit-transition: -webkit-transform 2s;
        -moz-transition: -moz-transform 2s;
        -ms-transition: -ms-transform 2s;
        -o-transition: -o-transform 2s;
        transition: transform 2s;
    }
    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-down .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
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
    .odometer.odometer-theme-car {
        -moz-border-radius: 0.34em;
        -webkit-border-radius: 0.34em;
        border-radius: 0.34em;
        font-family: "Arimo", monospace;
        padding: 0.15em;
        background: #000;
        color: #eee0d3;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-car .odometer-digit {
        -moz-box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSI` +
  `xLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYm` +
  `plY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzMzMzM` +
  `yIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMzMzMzMzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxMDEwMTAiLz48c3Rv` +
  `cCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjwvbGluZWFyR3J` +
  `hZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background-size: 100%;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #333333), color-stop(40%, #333333), ` +
  `color-stop(60%, #101010), color-stop(80%, #333333), color-stop(100%, #333333));
        background-image: -moz-linear-gradient(top, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);
        background-image: -webkit-linear-gradient(top, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);
        background-image: linear-gradient(to bottom, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);
        padding: 0 0.15em;
    }
    .odometer.odometer-auto-theme .odometer-digit:first-child,
    .odometer.odometer-theme-car .odometer-digit:first-child {
        -moz-border-radius: 0.2em 0 0 0.2em;
        -webkit-border-radius: 0.2em;
        border-radius: 0.2em 0 0 0.2em;
    }
    .odometer.odometer-auto-theme .odometer-digit:last-child,
    .odometer.odometer-theme-car .odometer-digit:last-child {
        -moz-border-radius: 0 0.2em 0.2em 0;
        -webkit-border-radius: 0;
        border-radius: 0 0.2em 0.2em 0;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxL` +
  `jEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3` +
  `RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjx` +
  `zdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjZWVlMGQzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNiYmFhOWEiLz48c3RvcCBvZmZz` +
  `ZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjwvbGluZWFyR3JhZGllbnQ+P` +
  `C9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background-size: 100%;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #eee0d3), color-stop(40%, #eee0d3), ` +
  `color-stop(60%, #bbaa9a), color-stop(80%, #eee0d3), color-stop(100%, #eee0d3));
        background-image: -moz-linear-gradient(top, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);
        background-image: -webkit-linear-gradient(top, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);
        background-image: linear-gradient(to bottom, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);
        background-color: #eee0d3;
        color: #000;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-car .odometer-digit .odometer-digit-inner {
        left: 0.15em;
    }
    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
        -webkit-transition-timing-function: linear;
        -moz-transition-timing-function: linear;
        -ms-transition-timing-function: linear;
        -o-transition-timing-function: linear;
        transition-timing-function: linear;
    }
`;
