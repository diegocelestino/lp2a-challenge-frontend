import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'gender'
})
export class Gender implements PipeTransform{
  transform(gender: string): string {
    if(gender == 'm'){
      return "Masculino";
    }
    return "Feminino";
  }
}
