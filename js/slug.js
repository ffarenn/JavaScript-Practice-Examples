// ADD SLUG TITLE FOR ARTICLE

const title = 'Top 10 benefits of react framework'
const normalizedTitle = title.toLowerCase();

const words = normalizedTitle.split(' ')
console.log(normalizedTitle);

const slug = words.join('-');
console.log(slug);

// 2nd method

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1)