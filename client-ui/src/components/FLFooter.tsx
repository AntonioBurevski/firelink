import {Layout} from 'antd';

const { Footer } = Layout;

const FLFooter = () => {
    return (
        <Footer className="bg-gray-800 text-white text-center py-4 mt-auto">
            <div className="container mx-auto">
                <p className="text-sm md:text-base">&copy; 2024 My Website</p>
            </div>
        </Footer>
    );
};

export default FLFooter;
