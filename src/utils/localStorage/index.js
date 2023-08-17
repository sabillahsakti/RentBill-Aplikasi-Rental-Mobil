import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    console.log("Hasil set : ", jsonValue)
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    console.log("Hasil get : ", jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null
    
  }catch(e) {
    console.log(e);
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
} catch (error) {
    console.log(error);
}
}