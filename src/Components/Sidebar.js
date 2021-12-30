import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ sideBarToggle, todoList }) => {
    return (
        <Wrapper style={{ width: `${sideBarToggle ? '300px' : '70px'}` }} >
            <Title>{sideBarToggle ? 'Collections' : 'C'}</Title>

            <CategoryList>
                {todoList.map(category => (
                    < Category key={category.name} >
                        <CategoryIcon style={{ backgroundColor: category.color }}>
                            <i className={category.icon} />
                        </CategoryIcon>
                        {sideBarToggle && <span>{category.name}</span>}
                    </Category>
                ))}
            </CategoryList>
        </Wrapper >
    )
}

export default Sidebar;

const Wrapper = styled.div`
    height: calc(100vh - 70px);
    background-color: #20212d;
`

const Title = styled.div``
const CategoryList = styled.div``
const Category = styled.div``
const CategoryIcon = styled.div``
