import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ sideBarToggle }) => {
    return (
        <Wrapper style={{ width: `${sideBarToggle ? '300px' : '70px'}` }} >
        </Wrapper>
    )
}

export default Sidebar;

const Wrapper = styled.div`
    height: calc(100vh - 70px);
    background-color: #20212d;
`
