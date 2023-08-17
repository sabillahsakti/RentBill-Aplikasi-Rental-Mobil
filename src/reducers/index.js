import {combineReducers} from 'redux'
import RajaOngkirReducer from './rajaongkir'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import MerkReducer from './merk'
import CarReducer from './car'
import KeranjangReducer from './keranjang'
import PaymentReducer from './payment'
import PesananReducer from './pesanan'
import HistoryReducer from './history'

const rootReducer = combineReducers({
    RajaOngkirReducer,
    AuthReducer,
    ProfileReducer,
    MerkReducer,
    CarReducer,
    KeranjangReducer,
    PaymentReducer,
    PesananReducer,
    HistoryReducer
})

export default rootReducer