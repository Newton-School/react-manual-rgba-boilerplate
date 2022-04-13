# Manual RGB

All browsers support for using <code>rgb()</code> for colors
whcich takes 3 arguments, which are all numbers ranging from 0-255 denoting component 
of red green and blue in the final color.

In this app we have three inputs denoting each components red,green and blue
and a div with <code>id="background"</code>.

As the value in any of the input changes, set its backgroundColor as rgb value.

Example, by default all inputs should have 255 as value, so <code>#background</code>
will have backgroundColor as <code>rgb(255, 255, 255)</code>.

On changing #r-input to 85, <code>#background</code>
will have backgroundColor as <code>rgb(85, 255, 255)</code>.