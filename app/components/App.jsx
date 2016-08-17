const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

// components
const Layout = require('./Layout')
const Landing = require('./Landing')

const App = React.createClass({
	render () {
		return (
			<Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/lol-page' />
        </Route>
      </Router>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))
