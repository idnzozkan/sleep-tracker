import React, { useState } from 'react'
import { Button, Modal, Form, DatePicker, TimePicker } from 'antd'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'

const NewEntryButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    }

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    }

    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div>
                <StyledButton shape='round' size="large" ghost={true} onClick={showModal}>
                    <PlusOutlined />
                    New Entry
                </StyledButton>
            </div>
            <Modal title="Add new entry" footer={null} visible={isModalVisible} onCancel={handleCancel} maskStyle={{ backdropFilter: 'blur(1.5px)' }}>
                <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                    <Form.Item name="date" label="Date" {...config}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="sleep-time" label="Sleep Time" {...config}>
                        <TimePicker />
                    </Form.Item>
                    <Form.Item name="wakeup-time" label="Wake-up Time" {...config}>
                        <TimePicker />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: {
                                span: 24,
                                offset: 0,
                            },
                            sm: {
                                span: 16,
                                offset: 8,
                            },
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

const StyledButton = styled(Button)`
    height: 100% !important;
    font-size: 1.5rem !important;
    color: #90a8f7 !important;
    padding: 0.5rem 1.5rem !important;
    border: 2px solid #465EAD !important;
    border-radius: 24px !important;

    &:hover {
        color: white !important;
    }
`

export default NewEntryButton