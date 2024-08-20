import 'antd/dist/reset.css';
import FLHeader from "./components/FLHeader.tsx";
import FLFooter from "./components/FLFooter.tsx";
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import FLContent from "./components/FLContent.tsx";

function App() {
    return (
        <Layout className="min-h-screen">
            <FLHeader/>
            <Content>
                <FLContent/>
            </Content>
            <FLFooter/>
        </Layout>
    )
}

export default App
