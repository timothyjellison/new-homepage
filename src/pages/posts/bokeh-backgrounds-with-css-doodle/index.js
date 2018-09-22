import React, {Fragment} from 'react';
import CodePen from '../../../components/CodePen';

export default () => {
  return (
    <div>
      <p>I’ve been obsessing over this ultra-cool <a href="https://css-doodle.com/" target="blank"><code>&lt;css-doodle /&gt;</code></a> web component. It makes it so easy to generate fun and beautiful graphics for websites. I was playing around with one of the samples <a href="https://css-doodle.com/#usage" target="blank">in the docs</a> and came up with this cool pattern for creating a <a href="https://en.wikipedia.org/wiki/Bokeh" target="_blank">bokeh</a> background. I’ll walk you through it 😃 The final product will look like this:</p>
      <CodePen uid='qYeQBX' title='Bokeh Background with CSS Doodle' />
      <p>First we add a <code>&lt;css-doodle&gt;</code> component to our html. Throughout the tutorial we’ll add CSS properties inside this component. Using the :doodle selector we divide the doodle into a 12 by 12 grid, stretch it across the whole viewport, and give it a dark blue background color. Just for illustration purposes I’ve added an outline property so you can see the edges of the empty grid cells.</p>
      <CodePen uid='OZKGvW' title='Bokeh Background with CSS Doodle - Step 1' />
      <p>Let’s start filling our grid cells. We’re going to replace our outline property with background: hsla(@index(), 70%, 68%, 1); . css-doodle exposes the index of each grid cell (starting from 0) using the @index function. Now each cell will be filled with a solid block of color along the spectrum from red (hue 0) to a turquoise (hue 143, because that’s the last index in a 12×12 grid).</p>
      <CodePen uid='PeMgXp' title='Bokeh Background with CSS Doodle - Step 2' />
      <p>css-doodle exposes a number of cool functions, properties, and selectors to help make coding easier. <a href="https://css-doodle.com/#usage" target="_blank">(Check out their awesome docs for a full list.)</a> We’ll use the @shape selector to fill each grid with a circle instead of a square, and we’ll use the random number generator  function @rand to randomize the opacity of each circle. Now some of circles will really pop while others fade into the background.</p>
      <CodePen uid='MGNRdP' title='Bokeh Background with CSS Doodle - Step 3' />
      <p><a href="https://css-doodle.com/#property-@shape" target="_blank">(Fun idea: replace “circle” with another shape from this list.)</a></p>
      <p>Now we’ll add some css transform properties to make things really interesting. First we’ll make the circles smaller or larger at random. We’ll pass @rand two arguments so that it scales down to at least 20% the original size and scales up at most 120% the original size.</p>
      <CodePen uid='dexEMX' title='Bokeh Background with CSS Doodle - Step 4' />
      <p>And now we’ll add a `translate` effect to move each circle’s center away from it’s origin by a random amount. This gives us an interesting clustering of circles, like neon bubbles in a champagne flute. 🍾</p>
      <CodePen uid='LmwKEz' title='Bokeh Background with CSS Doodle - Step 5' />
      <p>Finally, to get that nice bokeh look we’ll put a blur filter on the :doodle selector. The css blur function unfortunately blurs the container along with the content, so to make sure we don’t see those blurry edges of the doodle we scale the size up just a little bit and add some overflow properties in our stylesheet so the edges of the doodle are off the viewport. And voila!            </p>
      <CodePen uid='qYeQBX' title='Bokeh Background with CSS Doodle' />
    </div>
  );
}
