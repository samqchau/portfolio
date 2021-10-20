const fs = require('fs');
fs.readFile('./build/index.html', (err, data) => {
  let html = data.toString();
  let src = /src="\//g,
    href = /href="\//g;
  console.log(html);
  html = html.replace(src, 'src="').replace(href, 'href="');
  console.log(html);

  fs.writeFile('./build/index.html', html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
