import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold  } from "@expo-google-fonts/nunito-sans";
import theme from "@theme/index";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { Register } from "@screens/Register";
import { PositiveFeedBack } from "@screens/PositiveFeedback";
import { NegativeFeedBack } from "@screens/NegativeFeedback";
import { Details } from "@screens/Details";
import { EditMeal } from "@screens/EditMeal";

import { Loading } from "@components/loading";

import { Routes } from "@routes/index";

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})


  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}
