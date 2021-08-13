import React, { useState } from 'react'
import { Button, Modal } from 'antd'
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

    return (
        <>
            <div>
                <StyledButton shape='round' size="large" ghost={true} onClick={showModal}>
                    <PlusOutlined />
                    New Entry
                </StyledButton>
            </div>
            <Modal title="Add new entry" footer={null} visible={isModalVisible} onCancel={handleCancel} maskStyle={{ backdropFilter: 'blur(1.5px)' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, consectetur? </p>
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
