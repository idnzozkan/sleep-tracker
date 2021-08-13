import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AccountArea = () => {
    return (
        <Container>
            <StyledAvatar shape="square" size={70} icon={<UserOutlined />} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledAvatar = styled(Avatar)`
    border-radius: 24px;
    margin-left: auto;
`

export default AccountArea
