import logoImage from '../../assets/image0_0 esrosa.png';
import './logo-icon.scss'

export function LogoIcon() {
    return (
        <div className="logo-icon-container"> 
            <img src={logoImage} className="logo-icon" alt="Logo Doce Delícia"/>
        </div>
    );
}
