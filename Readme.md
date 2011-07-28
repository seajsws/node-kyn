
# node-kyn

  know your neighbor in node.js

## License 

(The MIT License)

Copyright (c) 2011 seajsws &lt;seajsws&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Installation 

% git clone git@github.com:seajsws/node-kyn.git
% cd node-kyn
% brew install node 
% brew install npm
% npm update
% node index.js



## Deployment

These instructions haven't been verified:

http://devcenter.heroku.com/articles/node-js
http://devcenter.heroku.com/articles/keys

% gem install heroku
% heroku create --stack cedar  
http://severe-moon-790.herokuapp.com/ | git@heroku.com:severe-moon-790.git
% git remote add git@heroku.com:severe-moon-790.git
% heroku keys:add
% git push heroku master  

