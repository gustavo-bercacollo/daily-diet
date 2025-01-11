import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold  } from "@expo-google-fonts/nunito-sans";
import theme from "@theme/index";

import { Home } from "@screens/Home/home";
import { Loading } from "@components/loading";

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})


  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home /> : <Loading /> }
    </ThemeProvider>
    
  );
}
