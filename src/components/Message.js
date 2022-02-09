import styled from 'styled-components';

const Message = ({text, timestamp}) => {
    return (
    <>
        <MessageBubble>
        <Text>{text}</Text>
        <Timestamp>{timestamp}</Timestamp>
        </MessageBubble>   
        
        <MessageBubble beforeBorderLeft = "10px solid #012030" beforeBorderRight = "10px solid transparent" beforeLeft = "273px" beforeTop = "7px" afterBorderLeft = "10px solid #424952" afterBorderRight = "10px solid transparent" afterLeft = "270px" afterTop = "7px">
        <Text>{text}</Text>
        <Timestamp>{timestamp}</Timestamp>
        </MessageBubble>
    </>
)}

export default Message;

const MessageBubble = styled.div`
        margin: 5em;
        padding: .7em;
        width: 250px;
        height: auto;
        display: flex;
        flex-direction: column;
        border: #012030 2px solid;
        border-radius: 15px;
        background-color: #424952;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        position: relative;

        &:before {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: ${props => props.beforeBorderLeft || "10px solid transparent"};
        border-right: ${props => props.beforeBorderRight || "10px solid #012030"};
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        left: ${props => props.beforeLeft || "-21px"};
        top: ${props => props.beforeTop || "7px"};
        }
        
        &:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: ${props => props.afterBorderLeft || "10px solid transparent"};
        border-right: ${props => props.afterBorderRight || "10px solid #424952"};
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        left: ${props => props.afterLeft || "-18px"};
        top: ${props => props.afterTop || "7px"};
        }
`

const Text = styled.p`
        font-size: 1em;
        line-height: 1.35em;
        font-weight: 400;
        margin: 0;
        padding: 0;
        overflow-wrap: anywhere;
`

const Timestamp = styled.p`
        font-size: 0.7em;
        align-self: flex-end;
        margin: 0;
        padding-top: .2em;
        letter-spacing: -.001em;
`