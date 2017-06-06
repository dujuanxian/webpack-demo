import _ from 'lodash';

function component () {
  var element = document.createElement('section');

  element.innerHTML = _.join(['Hello','World'], ' ');

  return element;
}

document.body.appendChild(component());

