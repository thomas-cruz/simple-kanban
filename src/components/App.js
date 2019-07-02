import React, { Component } from "react";
import List from './List';
import { connect } from 'react-redux';
import ActionButton from './ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

class App extends Component {

    onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if(!destination){ //if drop object doesnt land in a list
            return;
        }

        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId
            ));
    }

    render(){
        const { lists } = this.props;
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
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
