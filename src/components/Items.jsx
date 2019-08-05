import React from 'react';
// Items component
class Items extends React.Component {

    constructor(props) {
        super(props);
        // Constructor function that binds whatever the user inputs 
        this.create_tasks = this.create_tasks.bind(this);
    }

// Function that creates new items in the list 
    create_tasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }
// Function that deletes items from the list
    delete(key) {

        this.props.delete(key);
    }
    render() {
        // What user enters
        var list_entries = this.props.entries;
        // What gets displayed
        var list_items = list_entries.map(this.create_tasks)

        return(
            // Display the user input items in html
            <ul className="the_list">
                {list_items}
            </ul>
        )
    }
}

export default Items