const pug = require('pug');
const fs = require('fs');

const html = pug.renderFile('src/pages/customers.pug', {
    title: 'Customers Page',
    page: 'Customers'
});

fs.writeFileSync('src/pages/customers.html', html);