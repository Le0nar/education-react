import { ThemeContext } from "../context/theme-context";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme}>{theme}</button>
      )}
    </ThemeContext.Consumer>
  );
};

export default Button;
