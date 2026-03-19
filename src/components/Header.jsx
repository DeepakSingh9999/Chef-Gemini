import chefClaudeLogo from "../images/chef-icon.png"
import geminiLogo from "../images/gemini_Logo.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo}/>
            <h1>
                Chef Gemini
                <img src={geminiLogo} alt="@"className="sup-img"/>
            </h1>
        </header>
    )
}