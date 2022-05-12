import { Router } from 'express'
import ValidateBillingBarCodeController from '../modules/billing/useCases/validateBilling/validateBillingController'

const billingRoutes = Router();

billingRoutes.get('/boleto/:barCode', ValidateBillingBarCodeController.handle);