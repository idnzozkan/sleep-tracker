import React from 'react'
import styled from 'styled-components';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const AccountArea = () => {
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">Export Report</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="0">
                <a href="/auth" onClick={handleSignOut}>Logout</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Container>
            <Dropdown overlay={menu} trigger={['click']}>
                <StyledAvatar shape="square" size={70} icon={<UserOutlined />} />
            </Dropdown>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledAvatar = styled(Avatar)`
    border-radius: 24px;
    &:hover {
        cursor: pointer;
    }
`

export default AccountArea
