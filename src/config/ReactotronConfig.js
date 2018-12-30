import Reactotron from 'reactotron-react-native'

const tron = Reactotron
  .configure({ host: '192.168.29.67' })
  .useReactNative()
  .connect();

tron.clear();
console.tron = tron;
