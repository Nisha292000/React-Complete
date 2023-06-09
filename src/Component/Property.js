import { Col, Row } from 'antd';
import React from 'react';
import banner from '../assets/banner.jpeg';
import './property.css';
import { Layout } from 'antd';
const { Content } = Layout;


const Property = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="image-container">
                        <img src={banner} alt="banner" />
                        <div className="text-overlay">
                            <h1>PRESTIGE KEW GARDEN</h1>
                            <h5>Prestige Constructions | Yemlur, Bangalore East</h5>
                        </div>
                    </div>
                </Col>
            </Row>

            <Layout>
                <Content>
                    <Row>
                        <Col span={10}>col-12</Col>
                        <Col span={10}>col-12</Col>
                    </Row>
                </Content>
            </Layout>

        </>
    );
};

export default Property;
