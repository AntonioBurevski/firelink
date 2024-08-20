import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Content: React.FC = () => {
    return (
        <main className="p-6 bg-gray-100 space-y-8">
            <section id="section1">
                <Card
                    className="shadow-lg rounded-md"
                    title={<Title level={2} className="text-gray-900">Section 1</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </Card>
            </section>

            <section id="section2">
                <Card
                    className="shadow-lg rounded-md"
                    title={<Title level={2} className="text-gray-900">Section 2</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                </Card>
            </section>

            <section id="section3">
                <Card
                    className="shadow-lg rounded-md"
                    title={<Title level={2} className="text-gray-900">Section 3</Title>}
                    bordered={false}
                >
                    <Paragraph>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, vel faucibus lorem magna sit amet eros.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dapibus dolor justo, a tristique arcu viverra non.
                    </Paragraph>
                </Card>
            </section>
        </main>
    );
};

export default Content;
