import * as opsService from './ops'
import * as dataConstants from '../constant/Data'
// import {emptyCart} from './Order'
const getCardsList = async () => {
    let result = await opsService.post(dataConstants.base.api + `cards/cards-list.php`);
    console.log('result', result)
    return result;
},
    addCardData = async (requestData) => {
        let result = await opsService.post(dataConstants.base.api + `cards/add-card.php`, requestData)
        console.log('result', result)
        return result;
    },
    deleteCardData = async (requestData) => {
        let result = await opsService.post(dataConstants.base.api + `cards/delete-card.php`, requestData)
        console.log('result', result)
        return result;
    };

export {
    getCardsList,
    addCardData,
    deleteCardData
}