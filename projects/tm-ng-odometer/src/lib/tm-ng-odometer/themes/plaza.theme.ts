/**
 * Created: 2017-02-23 by Jose Andres
 */

export const PLAZA_THEME = `
    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-plaza {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-plaza .odometer-digit {
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-spacer {
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-inner {
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
    .odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon {
        display: block;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon-inner {
        display: block;
        -webkit-backface-visibility: hidden;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-value {
        display: block;
        -webkit-transform: translateZ(0);
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-value.odometer-last-value {
        position: absolute;
    }
    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
    .odometer.odometer-theme-plaza.odometer-animating-up .odometer-ribbon-inner {
        -webkit-transition: -webkit-transform 2s;
        -moz-transition: -moz-transform 2s;
        -ms-transition: -ms-transform 2s;
        -o-transition: -o-transform 2s;
        transition: transform 2s;
    }
    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-plaza.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
    .odometer.odometer-theme-plaza.odometer-animating-down .odometer-ribbon-inner {
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,
    .odometer.odometer-theme-plaza.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
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
    .odometer.odometer-theme-plaza {
        -moz-border-radius: 0.15em;
        -webkit-border-radius: 0.15em;
        border-radius: 0.15em;
        background-color: #f0f8ff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: 100;
        padding: 0 0.12em;
        line-height: 1.2em;
        font-size: 1.2em;
        background-size: 16px 16px;
    }
    .odometer.odometer-auto-theme .odometer-digit,
    .odometer.odometer-theme-plaza .odometer-digit {
        -moz-border-radius: 0.1em;
        -webkit-border-radius: 0.1em;
        border-radius: 0.1em;
        padding: 0 0.03em;
        color: #648baf;
    }
    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
    .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-inner {
        left: 0.03em;
    }
`;
