let quotes = [
    '"It does not matterhow slowly you go as long as you do not stop!"','"Search for a job you love and you will never have to work a day in your life!"','"Finding your passion is the key to your success!"','"The only way to do great workis to love what you do. If you haven\'t found it yet,Keep looking don\'t settle"',
    '"The best way to predict the future is to create it"','"Every day is the beginning of your career!"','"It takes courage to grow up and become who you really are!"','"It always seems impossible until it\'s done"','"If you can dream it, you can do it!"','"The way to get started is to quit talking and begin doing!"','"Opportunities don\'t happen,You create them!"'
]

function newQuote(){
    let randomNum = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNum];
}