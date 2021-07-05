import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://play-lh.googleusercontent.com/FgQDxvgFLIQaBmhEkoe-ytQsSRORKEFmwG0VZpZiNIbMYCtUswa5K6EuYMy-KnwqCj4"></img>
                <span className="help-text">
                    Meet Bar
                </span>
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
                <FontAwesomeIcon className="icon-block" icon={faCog} />
            </div>
        </div>
    )
}

export default Header;