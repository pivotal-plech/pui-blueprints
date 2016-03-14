var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var PageHeader = require('./components/blueprints/pageHeader');
var Panels = require('./components/blueprints/panels');

var routes = (
  <Route name="layout" path="/" handler={Layout}>
    <DefaultRoute handler={Home} />
    <Route handler={PageHeader} name="/pageheader" />
    <Route handler={Panels} name="/panels" />
  </Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
    ReactDOM.render(<Handler />, document.getElementById('content'));
  });
}
