import React, { Component } from 'react'
import NavbarContainer from '../feed/navbar/navbar_container';
import SearchResultCardContainer from './search_result_card_container';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      action: false
    }
  }

  handleSearchEdit() {
    this.setState({ action: true });
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(() => this.props.fetchConnections(this.props.currentUser.id))
      .then(() => this.findMatches());
  }

  findMatches() {
    let searchTerm = window.location.href.slice(window.location.href.indexOf("=") + 1).split("%20").join(" ").trim();
    let tempMatches = [];
    this.props.users.forEach(user => `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`.includes(searchTerm) ? tempMatches.push(user) : null);
    this.setState({ matches: [...tempMatches] });
  }

  renderNoSearchResults() {
    return (
      <div className='no-search-results'>
        <button onClick={this.handleSearchEdit}>Edit</button>
      </div>
    )
  }

  render() {
    if (!this.props.users) return null;

    return (
      <div className='result-page'>
        <NavbarContainer action={this.state.action} page="results" />
        <div className='search-results-wrap'>
          <div className='search-results-container'>
            <div className='search-results-header' style={this.state.matches.length === 0 ? {"display": "none"} : null}>
              People
            </div>

            {this.state.matches.length === 0 ? this.renderNoSearchResults() : null}

            <ul>
              {this.state.matches.map((match, i) => <SearchResultCardContainer key={`${match.id}${match.first_name}${match.last_name}`} user={match} count={this.state.matches.length} place={i+1} />)}
            </ul>
          </div>

          <section className='project-info-bar'>
            <div className='project-info-text'>
              <h3>Project Description</h3>
              <p>RingIn is a clone of LinkedIn themed around J. R. R. Tolkien's The Lord of the Rings.</p>
              <p>This full stack project is built with...</p>
            </div>

            <ul>
              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>React</span>
                </div>
                <span className='post-info-item-desc'>Frontend structure</span>
              </li>

              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>Redux</span>
                </div>
                <span className='post-info-item-desc'>Frontend store</span>
              </li>

              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>Ruby on Rails</span>
                </div>
                <span className='post-info-item-desc'>Backend</span>
              </li>

              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>PostgreSQL</span>
                </div>
                <span className='post-info-item-desc'>Database</span>
              </li>

              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>AWS</span>
                </div>
                <span className='post-info-item-desc'>Media uploading and storage</span>
              </li>

              <li className='post-info-item-wrap'>
                <div className='post-info-item-header'>
                  <span className='post-info-bullet'></span>
                  <span className='post-info-item'>HTML, CSS</span>
                </div>
                <span className='post-info-item-desc'></span>
              </li>
            </ul>

          </section>

        </div>
      </div>
    )
  }
}
