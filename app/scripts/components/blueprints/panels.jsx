var React = require('react');
var BasicPanel = require('pui-react-panels').BasicPanel;
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var PanelTitle = require('pui-react-panels').PanelTitle;
var DefaultButton = require('pui-react-buttons').DefaultButton;

var Panels = React.createClass({

  render: function() {

    return (
      <div className="container">
        <h1 className="title em-low type-dark-2 man">Panels</h1>
        <hr />

        <BasicPanelAlt header='Basic Alt Title' subtitle='subtitle' actions={<div><DefaultButton href="http://example.com">Default</DefaultButton></div>}>
          Basic Panel No Border
        </BasicPanelAlt>

      </div>
    );
  }
});

module.exports = Panels;
