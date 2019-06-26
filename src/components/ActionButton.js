import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextArea from 'react-textarea-autosize';

class ActionButton extends React.Component{

    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    handleInput = e => {
        this.setState({
            text: e.target.value
        });
    };

    renderActionButton = () => {
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBG = list ?  "rgba(0,0,0,15)" : "inherit";

        return (
            <div
                onClick = {this.openForm} 
                style = {{ 
                    ...styles.buttonGroup,
                    opacity: buttonOpacity, 
                    color: buttonTextColor, 
                    backgroundColor: buttonTextBG
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter list title..." : "Enter card title...";
        const buttonTitle = list ? "Add list" : "Add card";

        return <div>
            <Card style = {{
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px",
                overflow: "visible",
                
            }}> 
                <TextArea
                    placeholder = {placeholder}
                    autoFocus
                    onBlur = {this.closeForm}
                    value = {this.state.text}
                    onChange = {this.handleInput}
                    style = {{
                        resize: "none",
                        width: "100%",
                        border: "none",
                        outline: "none",
                        overflow: "hidden"
                    }}
                />
            </Card>
            <div style = {styles.formButtonGroup}>
                <Button variant = "contained" style = {{color: "white", backgroundColor: "#5aac44"}}>
                    {buttonTitle}
                </Button>
                <Icon style = {{ marginLeft: 8, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderActionButton();
    }
}


const styles = {
    buttonGroup:{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup:{
        display: "flex",
        alignItems: "center",
        marginTop: 8
    }
};

export default ActionButton;