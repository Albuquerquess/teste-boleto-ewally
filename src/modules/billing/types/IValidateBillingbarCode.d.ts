interface IValidateBillingbarCode {
  barCode: string;
}

type IResponseValidateBillingbarCode = "título bancário" | "pagamento de concessionárias" | "Código de barras inválido";


export { IValidateBillingbarCode, IResponseValidateBillingbarCode };