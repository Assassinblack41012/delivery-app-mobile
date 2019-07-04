import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Products from '~/pages/Products';
import Types from '~/pages/Types';
import SizePrices from '~/pages/SizePrices';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main: createStackNavigator(
          {
            Products,
            Types,
            SizePrices,
            Cart,
            Checkout,
          },
          {
            defaultNavigationOptions: {
              header: null,
            },
          },
        ),
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}

export default createNavigator;
