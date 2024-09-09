
import * as opsService from './ops'
import * as dataConstants from '../constant/Data'
// import {emptyCart} from './Order'
const getpayment = async () => {
    let result = await opsService.post(dataConstants.base.api + `payment/payment-list.php`);
    console.log('result', result)
    return result;
}
;

export {
    getpayment
}
