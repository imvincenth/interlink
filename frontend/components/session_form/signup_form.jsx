import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      headline: '',
      country_region: '',
      city_district: '',
      visiblePage: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

    this.pageCheck = this.pageCheck.bind(this);
    this.visibleCheck = this.visibleCheck.bind(this);

    this.changeBoxTwo = this.changeBoxTwo.bind(this);

    this.checkErrorPlus = this.checkErrorPlus.bind(this);
    this.checkErrorPlusTwo = this.checkErrorPlusTwo.bind(this);
    this.checkErrors = 0;
  }

  refreshPage() {
    window.location.reload(false);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  pageOne() {
    return (
      <div className="signup-form-container">
        <label className="signup-label">Email
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="signup-input"
            autoFocus
          />
          {this.renderEmailError()}
        </label>
        <br />

        <br />
        <label className="signup-label">Password (6 of more characters)
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="signup-input"
          />
          {this.renderPasswordError()}
        </label>

        <br />
        <input className="signup-submit" type="submit" value={"Agree & Join"} onClick={this.pageCheck} />

        <input className="demo-signup-submit" type="submit" value={"Demo Login"} onClick={this.demoLogin} />
        
        <br />
        <p className="session-redirect">Already on RingIn? <Link className="session-redirect-link" to="/login">Sign In</Link></p>
      </div>
    )
  }

  changeBoxTwo() {
    document.getElementsByClassName("signup-form-box")[0].classList.add("box-two");
    
  }

  pageTwo() {
    return (
      <div className="signup-form-container">
        <label className="signup-label">First name
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="signup-input"
          />
        </label>
  
        <br />
        {this.checkErrors === 0 ? "" : this.renderFirstNameError()}
        <br />
  
        <label className="signup-label">Last name
          <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="signup-input"
          />
        </label>

        <br />
        {this.checkErrors === 0 ? "" : this.renderLastNameError()}
        <br />

        <input className="signup-submit" type="submit" value={"Continue"} onClick={this.checkErrorPlus} />
      </div>
    )
  }

  checkErrorPlus() {
    this.checkErrors = 1;
  }

  pageThree() {
    return (
      <div className="signup-form-container">
        <h1 className="signup-label">Welcome {this.state.first_name}</h1>

        <label className="signup-label">Country/Region *
          <input type="text"
            value={this.state.country_region}
            onChange={this.update('country_region')}
            className="signup-input"
          />
        </label>
  
        <br />
        {this.checkErrors === 1 ? "" : this.renderCountryRegionError()}
        <br />
  
        <label className="signup-label">City/District *
          <input type="text"
            value={this.state.city_district}
            onChange={this.update('city_district')}
            className="signup-input"
          />
        </label>

        <br />
        {this.checkErrors === 1 ? "" : this.renderCityDistrictError()}
        <br />

        <input className="signup-submit" type="submit" value={"Next"} onClick={this.checkErrorPlusTwo} />
      </div>
    )
  }

  checkErrorPlusTwo() {
    this.checkErrors = 2;
  }

  pageFour() {
    return (
      <div className="signup-form-container">
        <h1 className="signup-label">Welcome {this.state.first_name}</h1>

        <label className="signup-label">What is your most current job title? *
          <input type="text"
            value={this.state.headline}
            onChange={this.update('headline')}
            className="signup-input"
          />
        </label>
  
        <br />
        {this.checkErrors === 2 ? "" : this.renderHeadlineError()}
        <br />


        <input className="signup-submit" type="submit" value={"Join"} />
      </div>
    )
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  renderEmailError() {
    let pageOneErrors = [];
    this.props.errors.forEach(error => {
      if (error.includes("Email")) {
        pageOneErrors.push(error);
      }
    })
    return(
      <span className="error">
        {pageOneErrors}
      </span>
    );
  }

  renderPasswordError() {
    let pageOneErrors = [];
    this.props.errors.forEach(error => {
      if (error.includes("Password")) {
        pageOneErrors.push(error);
      }
    })
    return(
      <span className="error">
        {pageOneErrors}
      </span>
    );
  }

  renderFirstNameError() {
    let pageTwoErrors = [];
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(error => {
        if (error.includes("First")) {
          pageTwoErrors.push(error);
        }
      })
      return(
        <span className="error">
          {pageTwoErrors}
        </span>
      );
    }
  }

  renderLastNameError() {
    let pageTwoErrors = [];
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(error => {
        if (error.includes("Last")) {
          pageTwoErrors.push(error);
        }
      })
      return(
        <span className="error">
          {pageTwoErrors}
        </span>
      );
    }
  }

  renderCountryRegionError() {
    let pageThreeErrors = [];
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(error => {
        if (error.includes("Country")) {
          pageThreeErrors.push(error);
        }
      })
      return(
        <span className="error">
          {pageThreeErrors}
        </span>
      );
    }
  }

  renderCityDistrictError() {
    let pageThreeErrors = [];
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(error => {
        if (error.includes("City")) {
          pageThreeErrors.push(error);
        }
      })
      return(
        <span className="error">
          {pageThreeErrors}
        </span>
      );
    }
  }

  renderHeadlineError() {
    let pageFourErrors = [];
    if (this.props.errors.length !== 0) {
      this.props.errors.forEach(error => {
        if (error.includes("Headline")) {
          pageFourErrors.push(error);
        }
      })
      return (
        <span className="error">
          {pageFourErrors}
        </span>
      );
    }
  }

  pageCheck() {
    if (this.props.errors.length === 7 || this.props.errors.length === 6 || this.props.errors.length === 0) {
      this.setState({ visiblePage: 1});
    } else if (this.props.errors.length === 5 || this.props.errors.length === 4) {
      this.setState({ visiblePage: 2 });
    } else if (this.props.errors.length === 3 || this.props.errors.length === 2) {
      this.setState({ visiblePage: 3 });
    } else if (this.props.errors.length === 1) {
      this.setState({ visiblePage: 4 });
    }
  }

  visibleCheck() {
    if (this.state.visiblePage === 1) {
      return this.pageOne();
    } else if (this.state.visiblePage === 2) {
      return this.pageTwo();
    } else if (this.state.visiblePage === 3) {
      return this.pageThree();
    } else {
      return this.pageFour();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors.length !== this.props.errors.length) {
      this.pageCheck();
    }
  }

  render() {
    this.props.errors.forEach(error => {
      if (error.includes("You shall not pass")) {
        this.refreshPage();
      }
    })
    return (
      <div className="signup-form">

        <header className="signup-header">
          <img className="header-logo" src={namelogoURL} alt="name logo" />
          <p className="signup-quote">Make the most of your professional life</p>
        </header>

          <form onSubmit={this.handleSubmit} className="signup-form-box">

            <div>
              {this.visibleCheck()}
            </div>
            
          </form>
      </div>
    );
  }
}

export default SignupForm;