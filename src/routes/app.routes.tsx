import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens/Details";
import { EditMeal } from "@screens/EditMeal";
import { Home } from "@screens/Home";
import { NegativeFeedBack } from "@screens/NegativeFeedback";
import { PositiveFeedBack } from "@screens/PositiveFeedback";
import { Register } from "@screens/Register";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
      name="Home" 
      component={Home} />
      <Screen 
      name="Statistics" 
      component={Statistics} />
      <Screen 
      name="Register" 
      component={Register} />
      <Screen 
      name="PositiveFeedBack" 
      component={PositiveFeedBack} />
      <Screen
       name="NegativeFeedBack" 
      component={NegativeFeedBack} />
      <Screen 
      name="Details" 
      component={Details} />
      <Screen 
      name="EditMeal" 
      component={EditMeal} />
    </Navigator>
  );
}