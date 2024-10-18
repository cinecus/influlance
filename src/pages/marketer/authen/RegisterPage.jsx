// RegisterPage.js
import React from 'react';
import { Form, Input, Button, Row, Col, Typography, Divider, Card } from 'antd';
import { GoogleOutlined, AppleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const RegisterPage = () => {
  // ฟังก์ชันในการจัดการการส่งฟอร์ม
  const onFinish = (values) => {
    console.log('Form values: ', values);
    // สามารถเพิ่มการนำค่าฟอร์มไปใช้งาน เช่น ส่งไปยัง backend หรือไปหน้าถัดไปได้
  };

  const onFinishFailed = (errorInfo) => {
    console.log('errorInfo', errorInfo)
  }
  return (
    <Row justify="center" >
      <Col xs={0} md={12} style={{ background: 'grey' }}>

      </Col>
      <Col xs={24}  md={12}>
        <Card title={"Register"}>
          <Form
            name="register"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label="Confirm Password"
              name="confirm-password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            {/* ปุ่ม Next */}
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Next
              </Button>
            </Form.Item>
          </Form>

          {/* OAuth Options */}
          <Divider>Or Register with</Divider>
          <Row justify="center" gutter={16}>
            <Col>
              <Button
                icon={<GoogleOutlined />}
                style={{ backgroundColor: '#DB4437', color: '#fff' }}
              >
                Google
              </Button>
            </Col>
            <Col>
              <Button
                icon={<AppleOutlined />}
                style={{ backgroundColor: '#000', color: '#fff' }}
              >
                Line
              </Button>
            </Col>
          </Row>
        </Card>

      </Col>
    </Row>
  );
};

export default RegisterPage;