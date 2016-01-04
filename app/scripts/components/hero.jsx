var React = require('react');

var Hero = React.createClass({

  render: function() {

    return (
      <div className="hero">
        <p className="type-dark-11 txt-c h1 mvn em-low" style={{maxWidth: "800px", margin: "0 auto"}}>
          Pivotal UI Blueprints are a collection concepts and components.
        </p>
      </div>
    );
  }
});

module.exports = Hero;
