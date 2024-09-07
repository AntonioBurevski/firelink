import {Layout} from 'antd';

const { Footer } = Layout;

const FlFooter = () => {
    return (
        <Footer className="bg-gray-800 text-white text-center py-4 mt-auto">
            <div className="container mx-auto">
                <p className="text-sm md:text-base">&copy; 2024 Firelink</p>
            </div>
        </Footer>
    );
};

export default FlFooter;
