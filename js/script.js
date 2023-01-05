'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
   
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
        activeLink.classList.remove('.active');

        console.log(activeLink);
    }
  /* [DONE] remove class 'active' from all articles */
    const activeArticles=document.querySelectorAll('.post.active');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('.active');
  
        console.log(activeArticle);
    }
    
  /*[DONE] add class 'active' to the clicked link */
    const addActiveLinks = clickedElement;
    addActiveLinks.classList.add('active');

    console.log('clickedElement:', clickedElement);

     /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector=clickedElement.getAttribute('href');
    console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
    }


 

  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }





