export type GetAddressByZipCodeResponseData = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

export type GetCompanyByCnpjResponseData = {
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  data_inicio_atividade: string;
  ddd_telefone_1: string;
};
