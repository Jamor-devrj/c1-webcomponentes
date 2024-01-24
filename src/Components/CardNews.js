class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());        
    }
    
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card"); //settando a classe usando o "setAttribute"
                
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url"); //link
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
       
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-img.jpg"
        newsImage.alt = "Foto da Notícia"
        cardRight.appendChild(newsImage);

//so para lembrar que esses são os filhos do componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `        
            .card{                
                box-shadow: 2px 4px 10px -4px rgba(0,0,0,0.63);
                -webkit-box-shadow: 2px 4px 10px -4px rgba(0,0,0,0.63);
                -moz-box-shadow: 2px 4px 10px -4px rgba(0,0,0,0.63);                
                width: 80%; 
                display: flex;
                flex-direction: row;   
                justify-content: space-between;            
            }

            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;                
            }

            .card_left > span {
                font-weight: 400; 
            }

            .card_left > a {
                margin-top: 10px;
                font-size: 25px;   
                font-weight: bold;
                color: black; 
                text-decoration: none;
            }

            .card_left > p{
                color: rgb(113, 113, 113);
            }
        `;
        return style;
    }    
}

customElements.define('card-news', CardNews);