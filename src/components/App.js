import React, { Component } from "react";
import List from './List';
import { connect } from 'react-redux';
import ActionButton from './ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {

    onDragEnd = () =>{
//add logic
    }

    render(){
        const { lists } = this.props;
        return(
            <DragDropContext onDrageEd={this.onDragEnd}>
            <div className = "App">
                <h2>Hello World!</h2>
                <div style = {styles.listContainer}>
                    {lists.map(list => (
                        <List 
                            listID = {list.id} 
                            key = {list.id} 
                            title = {list.title} 
                            cards = {list.cards}/>
                    ))}
                    <ActionButton list/>
                </div>
            </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

const styles = {
    listContainer: {
        display: "flex",
        flexDirection: "row"
    }
};

export default connect(mapStateToProps)(App);
