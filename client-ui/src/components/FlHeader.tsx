import {Header} from "antd/es/layout/layout";
import {Menu, Image} from "antd";
import {Link} from 'react-scroll';
import '../assets/css/header.css';
import logo from '../../public/firelink_logo.png';

const FlHeader = () => {

    const menuItems = [
        {
            key: "1",
            label: <Link to="#products" smooth duration={800}>Products</Link>,
        },
        {
            key: "2",
            label: <Link to="#services" smooth duration={800}>Services</Link>,
        },
        {
            key: "3",
            label: <Link to="#about" smooth duration={800}>About</Link>,
        },
        {
            key: "4",
            label: <Link to="#contact" smooth duration={800}>Contact</Link>,
        }
    ];

    return (
        <Header>
            <div className="fl-header-container">
                <div>
                    <Image
                        className="fl-header-logo"
                        src={logo as string}
                        width={55}
                        preview={false}
                        // onClick={() => navigate('/')}
                    />
                    <h1 className="fl-header-title">Firelink</h1>
                </div>
                <Menu
                    className="fl-header-menu gap-3"
                    mode="horizontal"
                    items={menuItems}
                />
            </div>
        </Header>
    )
}

export default FlHeader;
