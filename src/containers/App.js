import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {

  // ** state definition **
  constructor() {
    super()
    this.state = {
      contacts: [],
      searchfield: ''
    }
  }

  // ** API fetch **
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }));
  }

  // **  search filter event handler **
  filterKeys = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  render() {

    // ** search filter **
    const { contacts, searchfield } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // ** loading bar (if contacts empty) **
    return !contacts.length ? <h1>Loading</h1> :

      // ** main body **
      (
        <div className='tc' >
          <h1 className='f1' >My Contacts</h1>
          <SearchBox filter={this.filterKeys} />
          <Scroll>
            <ErrorBoundary>
              <CardList contacts={filteredContacts} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;