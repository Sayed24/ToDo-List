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
    padding-left: 35px;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    padding: 50px 0;
`

const CategoryList = styled.div`
    margin-top: -16px;
`

const Category = styled.div`
    display: flex;
    align-items: center;
    margin: 4px -16px;
    padding: 10px 16px;
    border-radius: 12px;
    width: calc(100% - 32px);

    span {
        margin-left: 10px;
        font-weight: 500;
        font-size: 18px;
    }

    &:hover {
        background-color: #18181f;
        cursor: pointer;
    }
`

const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: grid;
    place-items: center;
`
