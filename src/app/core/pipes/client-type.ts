import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
  standalone: true,
  name: 'clientType'
})
export class ClientType implements PipeTransform {
  transform(type: string ): string {
    if (type == "LABORIOUS") {
      return "Trabalhoso";
    }
    if(type == "NORMAL") {
      return "Normal";
    }
    return "Especial";
  }
}
