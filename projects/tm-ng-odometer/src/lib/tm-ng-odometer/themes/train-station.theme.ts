/**
 * Created: 2017-02-23 by Jose Andres
 */

export const TRAIN_STATION_THEME =
  `
    @import url("//fonts.googleapis.com/css?family=Economica");
    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-train-station {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-train-station .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-spacer {
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-inner {
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
    .odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon {
        display: block;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon-inner {
        display: block;
        -webkit-backface-visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-value {
        display: block;
        -webkit-transform: translateZ(0);
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-value.odometer-last-value {
        position: absolute;
    }
    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-theme-train-station.odometer-animating-up .odometer-ribbon-inner {
        -webkit-transition: -webkit-transform 2s;
        -moz-transition: -moz-transform 2s;
        -ms-transition: -ms-transform 2s;
        -o-transition: -o-transform 2s;
        transition: transform 2s;
    }
    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-train-station.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
    .odometer.odometer-theme-train-station.odometer-animating-down .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-train-station.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
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
    .odometer.odometer-theme-train-station {
        font-family: "Economica", sans-serif;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-train-station .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        -moz-border-radius: 0.1em;
        -webkit-border-radius: 0.1em;
        border-radius: 0.1em;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uP` +
  `SIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPS` +
  `JvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE` +
  `xMTExMSIvPjxzdG9wIG9mZnNldD0iMzUlIiBzdG9wLWNvbG9yPSIjMTExMTExIi8+PHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiMzMzMzMzMi` +
  `Lz48c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjwvb` +
  `GluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC` +
  `9zdmc+IA==');
        background-size: 100%;
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #111111), color-stop(35%, #111111), ` +
  `color-stop(55%, #333333), color-stop(55%, #111111), color-stop(100%, #111111));
        background-image: -moz-linear-gradient(top, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);
        background-image: -webkit-linear-gradient(top, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);
        background-image: linear-gradient(to bottom, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);
        background-color: #222;
        padding: 0 0.15em;
        color: #fff;
    }
    .odometer.odometer-auto-theme .odometer-digit + .odometer-digit,
    .odometer.odometer-theme-train-station .odometer-digit + .odometer-digit {
        margin-left: 0.1em;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-inner {
        left: 0.15em;
    }
`;
