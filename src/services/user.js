import * as opsService from './ops'
import * as dataConstants from '../constant/Data'
// import {emptyCart} from './Order'
const getUsersList = async () => {
    let result = await opsService.post(dataConstants.base.api + `user-list.php`);
    console.log('result', result)
    return result;
},
login = async (data) => {
    let result = await opsService.post(dataConstants.base.api + `admin/login.php`, data);
    return result;
},
    deleteUser = async (data, token) => {
        let result = await opsService.deleteData(dataConstants.base.api + `user/delete`, data, token);
        return result;
    };
export {
    getUsersList,
    deleteUser,
    login
}