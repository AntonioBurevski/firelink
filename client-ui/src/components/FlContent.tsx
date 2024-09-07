import React from 'react';
import {Card, Typography} from 'antd';
import '../assets/css/content.css'
import {sectionMock, sectionMock2, sectionMock3} from "../assets/temporary/mock.ts";

const { Title, Paragraph } = Typography;

const FlContent: React.FC = () => {
    return (
        <div className="fl-content-container">
            <div id="#products" className='fl-section'>
                <Card
                    title={<Title level={2}>Products</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        {sectionMock}
                    </Paragraph>
                </Card>
            </div>
            <div id="#services" className='fl-section'>
                <Card
                    title={<Title level={2}>Services</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        {sectionMock2}
                    </Paragraph>
                </Card>
            </div>
            <div id="#about" className='fl-section'>
                <Card
                    title={<Title level={2}>About</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        {sectionMock3}
                    </Paragraph>
                </Card>
            </div>
            <div id="#contact">
                <Card
                    title={<Title level={2}>Contact</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        {sectionMock3}
                    </Paragraph>
                </Card>
            </div>
        </div>
    );
};

export default FlContent;
