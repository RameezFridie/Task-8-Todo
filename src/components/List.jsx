import React from 'react';
// Import the items component
import Items from './Items';
import './List.css'

class List extends React.Component {
    constructor(props) {
        super(props);

        // Push items from input into an empty array
        this.state = {
            items: []
        };

        // Add every new item to the existing list,that way the list does not overwrite itself
        this.add_item = this.add_item.bind(this);
        // Delete items when clicked on
        this.delete_item = this.delete_item.bind(this);
    }
// Function that adds item to the empty list array
    add_item(e) {
        // When the list is not empty assign each item in list a key and text
        if (this.input_element.value !== "") {
            var new_item = {
                text: this.input_element.value,
                // The key will be the time the value was inputed
                key: Date.now()
            };
            // update list each time i new item has been entered
            this.setState((prev_state) => {
                return {
                    items: prev_state.items.concat(new_item)
                };
            });
        }
        this.input_element.value = "";
        // Prevent page from refreshing each time add button is clicked
        e.preventDefault();
    }
// Function that deletes item when clicked
    delete_item(key) {
        // Filter out item using the key of each item
        var fill_items = this.state.items.filter(function (item) {
            return (
                item.key !== key
            )
        });
        this.setState({
            items: fill_items
        });
    }
    render() {
        return(
            // display inputted items in list
            <div className="todoList">
                <div className="header">
                    {/* When submitted call add_item function */}
                    <form onSubmit={this.add_item}>
                        <input ref={(a)=> this.input_element = a}
                        placeholder="enter task">

                        </input>
                        {/* Submit the value that has been inputted */}
                        <button type="submit">Add</button>
                    </form>
                </div>
                <Items entries={this.state.items}
                        delete={this.delete_item}/>
            </div>
        )
    }
}

export default List;