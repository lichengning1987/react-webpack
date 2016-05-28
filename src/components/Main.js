require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imgDatas = require("json!../data/image.json");

class AppComponent extends React.Component {
  render() {
    return (
        <div className="stage">
            <div className="img-sec">

            </div>
            <div className="controler-nav">

            </div>
       </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
