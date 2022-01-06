import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'replaceComma'
})
export class ReplaceComma implements PipeTransform {
    transform(value:string|null) : string{
        //indefined et null
        if(!!value){
            //remplacer virgule par point
            return value.replace(/,/g, '.');
        }else{
            return '';
        }
    }

}