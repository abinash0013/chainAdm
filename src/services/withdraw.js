
import * as opsService from './ops'
import * as dataConstants from '../constant/Data'
// import {emptyCart} from './Order'
const getwithdraw = async (requestData) => {
    let result = await opsService.post(dataConstants.base.api + `withdraw/withdraw-list.php`,requestData);
    console.log('result', result)
    return result;
},
deleteWithdrawData = async (requestData) => {
    let result = await opsService.post(dataConstants.base.api + `withdraw/cancel-withdraw.php`,requestData);
    console.log('result', result)
    return result;
}
;

export {
    getwithdraw,
    deleteWithdrawData
}
