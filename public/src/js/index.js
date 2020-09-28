if('serviceWorker' in navigator){ //To check if supported by browser
    navigator.serviceWorker.register('./sw.js')
    .then(() => {
      console.log('Service Worker Registered');
    });
  }
  
const mainDiv = document.getElementById('mainDiv'),
    quoteBox = document.getElementById('quote-box'),
    text = document.getElementById('text'),
    author = document.getElementById('author'),
    twitter = document.querySelector('.fa-twitter-square-a'),
    whatsapp = document.querySelector('.fa-whatsapp-a'),
    tumblr = document.querySelector('.fa-tumblr-square-a'),
    newQuote = document.getElementById('new-quote'),
    colorChange = document.querySelectorAll('.colorChange'),
    bgChange = document.querySelectorAll('.bgChange'),
    colors = ['#fb6964', '#342224', '#2c3e50', '#27ae60', '#77b1a9', '#ab7bdb', '#c451b7', '#bf2c6e', '#bf2c3b', '#bd7f2a'];

    newQuote.addEventListener('click', function(){ 
        options = document.getElementById('selectQuote').value;
        const random_color = colors[Math.floor(Math.random() * colors.length)];
        
        for(var i =0; i<colorChange.length; i++){
            colorChange[i].style.color = random_color;
        }
        for(var i =0; i<bgChange.length; i++){
            bgChange[i].style.background = random_color;
        }
        console.log(options)
        if(options == 1){
            fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((json1) => {
                return json1.json();  
            })
            .then(quotes => {
                const quotesArray = quotes["quotes"]
                // console.log(random_quote["quote"]);
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                text.innerText = random_quote["quote"];
                author.innerText = '― ' + random_quote["author"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quote"]}%20―%20${random_quote["author"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
            })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });

        } else if (options == 2) {
            fetch('https://gist.githubusercontent.com/aeskay/a465618c590d6037be0ea08c762d387f/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json')
            .then((json1) => {
                return json1.json();  
            })
            .then(quotes => {
                const quotesArray = quotes;
                // console.log(random_quote["quote"]);
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                text.innerText = random_quote["text"];
                author.innerText = '― ' + random_quote["from"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["text"]}"%20―%20${random_quote["from"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["from"]}&content=${random_quote["text"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["text"]}%20―%20${random_quote["from"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
            })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });

        } else if (options ==5){
            fetch('https://gist.githubusercontent.com/shakked/f56894535c7292c4d6c6/raw/a7c5fa1065bca1ab4790fd06ba0f84ade4c263b2/funnyQuotes.json')
            .then((json1) => {
                return json1.json();  
            })
            .then(quotes => {
                const quotesArray = quotes;
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                text.innerText = random_quote["quote"];
                author.innerText = '― ' + random_quote["author"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quote"]}%20―%20${random_quote["author"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
            })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });
        }
        
        else if (options == 10) {
            fetch('https://raw.githubusercontent.com/aeskay/quotes/master/programming.json')
            .then((json1) => {
                return json1.json();  
            })
            .then(quotes => {
                const quotesArray = quotes;
                // console.log(random_quote["quote"]);
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                text.innerText = random_quote["quote"];
                author.innerText = '― ' + random_quote["author"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quote"]}%20―%20${random_quote["author"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
            })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });

        }else if (options == 3) {
            fetch('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json')
            .then((json1) => {
                return json1.json();  
                
            })
            .then(quotes => {
                const quotesArray = quotes;
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];         
                text.innerText = random_quote["quoteText"];
                author.innerText = '― ' + random_quote["quoteAuthor"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quoteText"]}"%20―%20${random_quote["quoteAuthor"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["quoteAuthor"]}&content=${random_quote["quoteText"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quoteText"]}%20―%20${random_quote["quoteAuthor"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
             })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });

        } else if (options == 4) {
            fetch('https://gist.githubusercontent.com/aeskay/50e3b1481fbe59ce5f6d1bfe6e45859e/raw/bda7928fe658a847506a3e564d37e9ae353cba61/quotes.json')
            .then((json1) => {
                return json1.json();  
                
            })
            .then(quotes => {
                const quotesArray = quotes;
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];         
                text.innerText = random_quote["quote"];
                author.innerText = '― ' + random_quote["author"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quote"]}%20―%20${random_quote["author"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
             })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });

        } else if(options == 7) {
            fetch('https://raw.githubusercontent.com/btford/philosobot/master/quotes/love.json')
            .then((json1) => {
                return json1.json();  
            })
            .then(quotes => {
                const quotesArray = quotes["quotes"]
                // console.log(random_quote["quote"]);
                const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                text.innerHTML = random_quote["quote"];
                author.innerText = '― ' + random_quote["author"];
                twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
                tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
                whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${random_quote["quote"]}%20―%20${random_quote["author"]}`);
                localStorage.setItem("quoteStore", quotesArray);
                
            })
            .catch((error) => {
                alert('Quote was not able to load. Please reload page')
            });
        }


    })
    
    
    
