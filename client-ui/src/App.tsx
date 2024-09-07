import FlHeader from "./components/FlHeader.tsx";
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import FlFooter from "./components/FlFooter.tsx";
import FlContent from "./components/FlContent.tsx";

function App() {
    return (
        <ThemeProvider>
            <Layout className="min-h-screen">
                <FlHeader/>
                <Content>
                    <FlContent/>
                </Content>
                <FlFooter/>
            </Layout>
        </ThemeProvider>
    )
}

export default App;
