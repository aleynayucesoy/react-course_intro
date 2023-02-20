import * as actionsTypes from "./actionTypes"

export const increaseCounter = () => ({
    type: actionsTypes.INCREASE_COUNTER,
    payload: 1
})
//Kullanıcı increaseCounter'ı gönderdiğinde içerisindeki gibi bir payload oluşuyor, bu payload'la reducerları(configureReducer.js) geziyor. Eğer varsa state'i bir artırıp state'i döndürüyor. Reducer'ın kendi 1 tane index'i oluyor burada reducerları bir araya getiriyoruz. Ve (configureStore.js)store fonksiyonunu yazıyoruz. En son cofigureStore nesnesini çalıştır Provider olarak belirttiğimiz storun içine App'i yerleştir.

export const decreaseCounter = () => ({
    type: actionsTypes.DECREASE_COUNTER,
    payload: 1
})

export const increaseByTwoCounter = () => ({
    type: actionsTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
})

//payloadlarımızı içeren ve tiplerimizin ne olduğunu belirttiğimiz fonksiyonlarımız
