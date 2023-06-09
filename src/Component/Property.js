import { Col, Row } from 'antd';
import React from 'react';
import banner from '../assets/banner.jpeg';
import './property.css';
import { Layout } from 'antd';
import { Container } from 'react-bootstrap';
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

            <Container className='mt-5'>
                <Row className='d-flex justify-content-between'>
                    <Col span={15} className='bg-danger'>
                        <Col></Col>
                    </Col>
                    <Col span={7} className='bg-danger'>col-12</Col>
                </Row>
            </Container>
        </>
    );
};

export default Property;
