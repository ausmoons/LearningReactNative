import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import storybook from './storybook';
import ShopApp from './ShopApp'

const IS_STORYBOOK = true;

AppRegistry.registerComponent(appName, () => (IS_STORYBOOK ? storybook : ShopApp));
