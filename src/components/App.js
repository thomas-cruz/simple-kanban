import React, { Component } from "react";
import List from './List';
import { connect } from 'react-redux';

class App extends Component {
    render(){
        const { lists } = this.props;
        return(
            <div className = "App">
                <h2>Hello World!</h2>
                <div style = {styles.listContainer}>
                    {lists.map(list => (
                        <List title = {list.title} cards = {list.cards}/>
                    ))}
                </div>
            </div>
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
