import * as functions from 'firebase-functions';
import * as fetch from 'node-fetch';

export const generateSitemap = functions.https.onRequest((req, res) => {
    const loanOfficerData = fetch ('https://comparemortgagererates.com/loanofficers.json');
    const loanProductData = fetch ('https://comparemortgagererates.com/loanproducts.json');

    let sitemap = '';

    Promise.all([
        loanOfficerData.then(result => result.json()),
        loanProductData.then(result => result.json())
    ])
    .then (jsonData => {
        const officers = jsonData[0];
        const products = jsonData[1];
                for(const key in officers) {
                        const name = encodeURIComponent(officers[key].name);
                        sitemap += `https://comparemortgagerates/loanoffices/${key}/${name}\n`;
                    }
                    for(const key in products) {
                        const title = encodeURIComponent(products[key].product);
                        sitemap += `https://devfest.mn/2018/schedule/${key}/${product}\n`;
                    }
                    res.send(sitemap);        
    })
    .catch(err => {
        res.send({msg: 'Error generating sitemap', error: err});
    });

});