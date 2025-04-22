/**
 * Created: 2017-06-15 by Jose Andres
 * Modified:
 *   - 2020-04-12 by Marco Trinastich: Migrated to Angular 9 and enhanced decimal precision handling using the updated tm-odometer library.
 *   - 2025-04-19 by Marco Trinastich: Upgraded to the latest Angular version, optimized performance, and improved code quality.
 */

import {
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Utilities } from "../utils/utilities";
import { OdometerModel } from "./odometer.model";
import { TmNgOdometerConfig, TmNgOdometerConfigModel } from "./odometer.config";
import {
  CAR_THEME,
  DEFAULT_THEME,
  DIGITAL_THEME,
  MINIMAL_THEME,
  PLAZA_THEME,
  SLOT_MACHINE_THEME,
  TRAIN_STATION_THEME,
} from "./themes";

// TmOdometer (https://github.com/mtmarco87/tm-odometer.git)
import TmOdometer from "tm-odometer";

@Component({
  selector: "tm-ng-odometer",
  encapsulation: ViewEncapsulation.None,
  styles: [
    CAR_THEME,
    DEFAULT_THEME,
    DIGITAL_THEME,
    MINIMAL_THEME,
    PLAZA_THEME,
    SLOT_MACHINE_THEME,
    TRAIN_STATION_THEME,
    `
      .odometer,
      .odometer-inside,
      .odometer-digit,
      .odometer-digit-spacer,
      .odometer-digit-inner,
      .odometer-ribbon,
      .odometer-ribbon-inner,
      .odometer-value,
      .odometer-formatting-mark {
        color: inherit;
        font-size: inherit;
        font-family: inherit;
      }
    `,
  ],
  template: `<div #container></div>`,
  standalone: false,
})
export class TmNgOdometerComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  private subscription: Subscription;
  private odometer: OdometerModel;
  @ViewChild("container", { read: ElementRef, static: false })
  container: ElementRef; // Using static: false for better compatibility in complex applications
  @Input() number: number; // Required
  @Input() config: TmNgOdometerConfigModel = {};
  @Input() observable: Observable<boolean> = undefined;

  // Individual configuration attributes
  @Input() animation: string = undefined;
  @Input() format: string = undefined;
  @Input() theme: string = undefined;
  @Input() value: number = undefined;
  @Input() duration: number = undefined;
  @Input() auto: boolean = undefined;

  // Available themes
  private themes: Array<string> = [
    "car",
    "default",
    "digital",
    "minimal",
    "plaza",
    "slot-machine",
    "train-station",
  ];

  // Start Odometer
  private initOdometer() {
    if (
      !Utilities.isUndefined(this.container) &&
      typeof TmOdometer !== "undefined"
    ) {
      this.odometer = new TmOdometer({
        el: this.container.nativeElement,
        animation: this.config.animation,
        value: this.config.value,
        duration: this.config.duration,
        format: this.config.format,
        theme: this.config.theme,
      });

      if (!Utilities.isUndefined(this.number) && this.config.auto) {
        this.odometer.update(this.number);
      }
    }
  }

  private initConfig() {
    this.config = Utilities.defaults(this.config, new TmNgOdometerConfig());

    // Animation
    if (!Utilities.isUndefined(this.animation)) {
      this.config.animation = this.animation;
    }

    // Format
    if (!Utilities.isUndefined(this.format)) {
      this.config.format = this.format;
    }

    // Theme
    if (!Utilities.isUndefined(this.theme)) {
      this.config.theme = !Utilities.includes(this.themes, this.theme)
        ? "default"
        : this.theme;
    }

    // Value
    if (!Utilities.isUndefined(this.value)) {
      this.config.value = this.value;
    }

    // Duration
    if (!Utilities.isUndefined(this.duration)) {
      this.config.duration = this.duration;
    }

    // Auto
    if (!Utilities.isUndefined(this.auto)) {
      this.config.auto = this.auto;
    }

    // Validate theme. If not part of the
    // available themes array, use the default
    if (!Utilities.includes(this.themes, this.config.theme)) {
      this.config.theme = "default";
    }
  }

  // ***************************************
  //  LIFECYCLES
  // ***************************************

  public ngOnInit() {
    // Bind Observable
    if (!Utilities.isUndefined(this.observable) && !this.config.auto) {
      this.subscription = this.observable.subscribe((trigger: boolean) => {
        if (!Utilities.isUndefined(trigger) && trigger) {
          this.odometer.update(this.number);
        }
      });
    }

    // Apply defaults and
    // individual configurations
    this.initConfig();
  }

  public ngOnDestroy() {
    if (!Utilities.isUndefined(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }

  public ngOnChanges() {
    if (
      !Utilities.isUndefined(this.number) &&
      !Utilities.isUndefined(this.odometer) &&
      this.config.auto
    ) {
      this.odometer.update(this.number);
    }
  }

  public ngAfterViewInit() {
    this.initOdometer();
  }
}
