/**
 * Created by Jose Andres on 2017/06/15
 */

export interface TmNgOdometerConfigModel {
  animation?: string;
  format?: string;
  theme?: string;
  value?: number;
  duration?: number;
  auto?: boolean;
}

export class TmNgOdometerConfig implements TmNgOdometerConfigModel {
  animation = "slide";
  format = "(,ddd)";
  theme = "default";
  value = 0;
  duration = 2000;
  auto = true;
}
