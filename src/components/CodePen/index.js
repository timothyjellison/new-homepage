import React from 'react';

export default (props) => {
  return (
    <iframe
      height='300'
      scrolling='no'
      title={props.title}
      src={`//codepen.io/timothyjellison/embed/${props.uid}/?height=300&theme-id=16490&default-tab=html,result&embed-version=2`}
      frameborder='no'
      allowtransparency='true'
      allowfullscreen='true'
      style={{width: '100%'}}
    >See the Pen <a href={`https://codepen.io/timothyjellison/pen/${props.uid}/`}>{props.title}</a> by Tim Ellison (<a href='https://codepen.io/timothyjellison'>@timothyjellison</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
  );
}