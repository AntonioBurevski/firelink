import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import { Link } from 'react-scroll';

const FLHeader = () => {
    return (
        <Header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Firelink Client</div>
                <Menu mode="horizontal" className="flex space-x-4">
                    <Menu.Item key="1">
                        <Link to="section1" smooth duration={500} className="cursor-pointer text-white">
                            Section 1
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="section2" smooth duration={500} className="cursor-pointer text-white">
                            Section 2
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="section3" smooth duration={500} className="cursor-pointer text-white">
                            Section 3
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}

export default FLHeader;