
import * as opsService from './ops'
import * as dataConstants from '../constant/Data'
// import {emptyCart} from './Order'
const getBuyerList = async () => {
    let result = await opsService.post(dataConstants.base.api + `buyers/buyer-list.php`);
    console.log('result', result)
    return result;
}
;

export {
    getBuyerList
}
