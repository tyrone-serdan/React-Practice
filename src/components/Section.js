import React from 'react';
import styled from 'styled-components';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImage }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>{ leftBtnText }</LeftButton>

                    { rightBtnText && 
                        <RightButton>{ rightBtnText }</RightButton>
                    }
                    
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>

        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.85;
    color: black;

`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``