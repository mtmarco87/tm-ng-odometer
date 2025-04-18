/**
 * Created by Marco Trinastich 2025/04/19
 */

declare module "tm-odometer" {
  class TmOdometer {
    MAX_VALUES: number;
    digits: Array<HTMLElement>;
    el: HTMLElement;
    format: {
      precision: number;
      radix: any;
      repeating: string;
    };
    inside: HTMLElement;
    options: {
      el: HTMLElement;
      duration: number;
      theme: string;
      format: string;
      animation: string;
    };
    ribbons: any;
    transitionEndBound: boolean;
    value: 0;

    constructor(options: {
      el: HTMLElement;
      animation?: string;
      value?: number;
      duration?: number;
      format?: string;
      theme?: string;
    });

    update(value: number): void;
  }

  export = TmOdometer;
}
