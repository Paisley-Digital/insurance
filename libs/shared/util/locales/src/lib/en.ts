import localeData from '@angular/common/locales/en';
import { ɵLocaleDataIndex } from '@angular/core';

const newLocaleData = <any>localeData;

newLocaleData[ɵLocaleDataIndex.Currencies]['IRR'] = ['Rials', 'IRR', 0];
newLocaleData[ɵLocaleDataIndex.Currencies]['IRT'] = ['Tomans', 'IRT', 0];

export default newLocaleData;
