## Website Performance Optimization portfolio project

You can view my project here: http://lacyjpr.github.io/optimization/

####Part 1: Optimize PageSpeed Insights score for index.html

##### Optimizations:
* Reduce the size of pizzaria.jpg to 100px width
* Inline css/style.css
* Make google-analytics script async
* Add a media query for print.css
* Use Web Font Loader to load the Google webfont asynchronously
* Use Gulp to:
* Minify CSS
* Uglify JS
* Compress jpg and png files
* Minify HTML

Sources:
https://discussions.udacity.com/t/how-to-optimize-css-and-google-fonts/26997
https://github.com/typekit/webfontloader
https://discussions.udacity.com/t/gulp-and-setting-up-a-gulp-workflow-intermediate/24359


####Part 2: Optimize Frames per Second in pizza.html

##### Optimizations:
* Use requestAnimationFrame for updatePositions
* Move all constants out of the for loop in updatePositions
* Move the Math.sin calculation out for the for loop in updatePositions
* Move var items = document.getElementsByClassName('mover'); to the anonymous function at the bottom of the file to stop updatePositions from re-defining items on every scroll event
* Use window.items[i].style.left = items[i].basicLeft + 100 * phase + 'px'; instead of items...
* Set number of pizzas to 36 in document.addEventListener('DOMContentLoaded', function()
* Replace "querySelector" with getElementById in document.getElementById("movingPizzas1").appendChild(elem);

Sources:
https://github.com/Sarika-C/frontend-nanodegree-mobile-portfolio/blob/master/views/js/main.js
https://discussions.udacity.com/t/p4-pizza-scrolling-rasterize-paint/30713/13

####Part 3: Optimize Time to Resize Pizzas in pizza.html

##### Optimizations:
* Move document.document.querySelectorAll(".randomPizzaContainer"); outside the for loop
* Refactor to use a switch to set pizza width in order to avoid Forced Synchronous Layout and avoid use of determineDx to determine new pizza widths

Source:
https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4147498575/e-4154208580/m-4240308553


