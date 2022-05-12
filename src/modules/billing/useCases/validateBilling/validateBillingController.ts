import { Request, Response } from "express";
import validateBillingBarCodeService from "./validateBillingBarCodeService";

class ValidateBillingBarCodeController {
  async handle(request: Request, response: Response) {
    const { barCode } = request.params;
    console.info(`ValidateBillingBarCodeController | [barCode ${barCode}]`);

    const validate = await validateBillingBarCodeService.execute(barCode);

    
  }
}

export default new ValidateBillingBarCodeController();