import { Steps } from '@/pages/Main/types';

export const CPF_MAX_LENGTH = 11;

export const MAX_DATE_RANGE = new Date().toISOString().split('T')[0];

export const IS_FIRST_STEP = (currentStep: Steps) =>
  currentStep === Steps.FIRST;

export const IS_LAST_STEP = (currentStep: Steps) =>
  currentStep === Object.keys(Steps).length - 1;

export const VALIDATIONS = {
  date: /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/,
  phone: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
  email:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  name: /^([A-Za-zÀ-ÖØ-öø-ÿ]{2,}\s[A-Za-zÀ-ÖØ-öø-ÿ]{1,}'?-?[A-Za-zÀ-ÖØ-öø-ÿ]{1,}\s?([A-Za-zÀ-ÖØ-öø-ÿ]{1,})?)/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  cep: /^[0-9]{5}-[0-9]{3}$/
};
