import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { CreateYourComponentsHere } from "./components/CreateYourComponentsHere.jsx";

export const App = () => {
  return(
    <ThemeProvider>
      <div>
        <CreateYourComponentsHere />
      </div>
    </ThemeProvider> 
  ) 
};
