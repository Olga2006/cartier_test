import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list
      ? (filterText != null && filterText != "")
        ? list.filter(item =>
          (item.raisonSocial.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.siren.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.siret.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.siren.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.adress.adress.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.adress.ville.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
          || (item.adress.codePostal.toLowerCase().search(new RegExp(filterText.toLowerCase(), 'i')) > -1)
        )
        : list
      : [];
  }
}