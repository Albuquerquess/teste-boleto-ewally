import { formatBarCode } from "../../../../utils/formatBarCode";
import { IResponseValidateBillingbarCode } from "../../types/IValidateBillingbarCode";

class ValidateBillingBarCodeService {
  //validar tipos de boleto
  async execute(barCode: string): Promise<IResponseValidateBillingbarCode> {
    const barCodeFormated = formatBarCode(barCode);

    if (barCodeFormated.length === 46) {
      return "pagamento de concessionárias"
    } else if (barCodeFormated.length === 44) {
      return "título bancário"
    } else {
      return "Código de barras inválido"
    }
  }
}

export default new ValidateBillingBarCodeService();