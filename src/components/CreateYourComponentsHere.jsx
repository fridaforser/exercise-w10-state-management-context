import { useTheme } from "../contexts/ThemeContext.jsx";


export const CreateYourComponentsHere = () => {
const { theme, toggleTheme } = useTheme()


  return (
    <div>
      <button onClick={toggleTheme}>Choose theme</button>
      <p>{theme}</p>
    </div>
  );
};
