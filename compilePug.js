const pug = require('pug');
const fs = require('fs');

const html = pug.renderFile('pages/customers.pug', {
    title: 'Customers Page',
    page: 'Customers'
});

fs.writeFileSync('pages/customers.html', html);

console.log('Pug был успешно скомпилирован в HTML!');
