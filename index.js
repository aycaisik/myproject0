/**
 * @format
 */

import {AppRegistry} from 'react-native';
import myApp from './src/myApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => myApp);