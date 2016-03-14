var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;
var Media = require('pui-react-media').Media;
var Flag = require('pui-react-media').Flag;

var Hero = require('./hero.jsx');

var TileLayout = require('pui-react-tile-layout').TileLayout;
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;

var Header = require('./header');
var mediaAlignmentImage = <img href='http://www.google.com' src='http://placehold.it/100x100'  alt='A sample media object' />;

var Home = React.createClass({

  mixins: [Navigation],


  render: function() {
    return (
      <div className="wrap">
        <div className="home">
          <Hero />
          <div className="container">
            <h1 className="em-low">Blueprints</h1>
            <hr />
            <TileLayout columns={2}>
              <TileLayout.Item>
                  <BasicPanelAlt className="mvn">
                    <h3 className="type-dark-1 mvn"><a href="#/pageheader">Page Header</a></h3>
                    <Flag image={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                      A responsive product grid layout with touch-friendly Flickity galleries and Isotope-powered filter functionality.	...
                    </Flag>
                  </BasicPanelAlt>
              </TileLayout.Item>
              <TileLayout.Item>
                <BasicPanelAlt className="mvn">
                  <h3 className="type-dark-1 mvn"><a href="#/panels">Panels</a></h3>
                  <Flag image={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                    How and when to use panels and cards.
                  </Flag>
                </BasicPanelAlt>
              </TileLayout.Item>
            </TileLayout>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
