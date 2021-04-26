import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const Header = () => {
    const theme = useContext(ThemeContext);

    return (
        <header>
            {theme.theme}
        </header>
    )
}

export default Header;