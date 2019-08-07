babel --presets react,es2015 js/sources/ -d js/build
browserify js/build/app.js -o bundle.js
rm -f bundle.css; cat css/*/*.css | sed 's/..\/..\/images/images/g' > bundle.css
