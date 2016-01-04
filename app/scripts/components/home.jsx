var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;

var Hero = require('./hero.jsx');

var TileLayout = require('pui-react-tile-layout');
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
                <a href="#/pageheader">
                  <BasicPanelAlt className="mvn">
                    <h3 className="type-dark-1 mvn">Page Header</h3>
                    <Flag leftImage={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                      A responsive product grid layout with touch-friendly Flickity galleries and Isotope-powered filter functionality.	...
                    </Flag>
                  </BasicPanelAlt>
                </a>
              </TileLayout.Item>
              <TileLayout.Item>
                <BasicPanelAlt className="mvn">
                  <h3 className="type-dark-1 mvn">Page Stack Navigation</h3>
                  <Flag leftImage={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                    A responsive product grid layout with touch-friendly Flickity galleries and Isotope-powered filter functionality.	...
                  </Flag>
                </BasicPanelAlt>
              </TileLayout.Item>
              <TileLayout.Item>
                <BasicPanelAlt className="mvn">
                  <h3 className="type-dark-1 mvn">Page Stack Navigation</h3>
                  <Flag leftImage={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                    A responsive product grid layout with touch-friendly Flickity galleries and Isotope-powered filter functionality.	...
                  </Flag>
                </BasicPanelAlt>
              </TileLayout.Item>
              <TileLayout.Item>
                <BasicPanelAlt className="mvn">
                  <h3 className="type-dark-1 mvn">Page Stack Navigation</h3>
                  <Flag leftImage={mediaAlignmentImage} leftMediaSpacing='xlarge'>
                    A responsive product grid layout with touch-friendly Flickity galleries and Isotope-powered filter functionality.	...
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
