const fs = require('fs');
fs.readFile('./build/index.html', (err, data) => {
  let html = data.toString();
  let src = /src="\//g,
    href = /href="\//g;

  html = html.replace(src, 'src="').replace(href, 'href="');

  fs.writeFile('./build/index.html', html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
