import {
    getAll,
    getAllClientsAndSalesManagers ,
    getAllClientsAndSalesManagerNameAndIfThereIsPayments,
    getAllClientsWithoutPaymentsAndSalesManagerName,
    getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
    getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity,
    getClientsWithDelayedOrders,
    getAllclientsNotPayments,
    getAllClientsWhoHaveRequestedButHaventPaid,
    getAllSpanishClients,
    getAllClientsInFuenlabrada,    }
      from "./module/clients.js";
import {
  AllDirectionsWithClientsInFuenlabrada,
  getAllOficceAndCodeCity,
  
} from "./module/offices.js"

import {
  getAllEmpleyeesAndBoss,
  getAllEmployeesAndBossOfBoss,
  getEmployeesWithoutOfficeAndClients,
  getAllFullNameAndEmailsAndBoss,
  getBossFullNameAndEmail,
  getAllEmployeesThatDontHaveOffice,
  getAllEmployeesThatArentAssociatedWithAnyClient,
  getAllEmployeesThatArentAssociatedWithAnyClientOrOffice,
  getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName
  
  
  

} from "./module/employees.js"

import {

  getProductsNeverOrdered,
  getProductsNotOrdered,
  getAllProductsOrnamentales100

} from "./module/product.js"

import {
  requestStatuses,
  getAllCodeRequestCodeClientDateRequestDateWait,
  getOverdueRequests,
  getAllRejectedOrdersIn2009,
  getAllDeliveredOrderInJanuary
} from "./module/requests.js"

import {
  getAllPaymentsFromPayPalEachYear,
  getAllFormsPayments,

} from "./module/payment.js"

console.log(await getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName())


