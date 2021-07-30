export const standardTemplate = () => {
  const containerStandardTemplate = document.createElement('div');

  /*const containerHeaderMenuTemplate = document.createElement('div');
  containerHeaderMenuTemplate.className = 'container__menu-template';
  const headerTemplate = `<header><div class=headerContainer>
    <div class="nameApp">PUNTO PYME</div>

    <div class="search">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <input type="text" class="inputSearch" placeholder="Buscar">
     </div>

     <div class="menu-icons2">
  <span class="first_item" id="home2">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house" viewbox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
    </svg>                           
  </span>
  <span class="second_item2">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
    </svg>
  </span>
  <span class="third_item2">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewbox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
  </span>
  <span class="fourth_item2" id="usuario2">
  <a type="button" href='#/profile' style='color:white;' id='prueba' class='prueba'>
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" id="persona1" class="bi bi-person" viewbox="0 0 16 16">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" id="persona2" display="none" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </svg>
    </a>

  

  </span>
  

</div>
   </div>
   </header>`

   
   containerHeaderMenuTemplate.innerHTML = headerTemplate;
   const btnUsurio2 = containerHeaderMenuTemplate.querySelector('#prueba');
  /*btnUsurio2.addEventListener('click', () =>{
    
    containerHeaderMenuTemplate.querySelector('#persona1').style.display = "none";
    //btnUsurio2.style.display = "none";
    containerHeaderMenuTemplate.querySelector('#persona2').style.display = "block";
    
         
});*/


/*const btnHome2 = containerHeaderMenuTemplate.querySelector('#home2');
btnHome2.addEventListener('click', () =>{
   
        window.location.hash = '#/feed';
         
});*/



    const containerMenuTemplate = document.createElement('div');
   const menuTemplate = `<div class="FABMenu">
    <input type="checkbox" checked />
    <div class="hamburger">
    <div class="dots">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </div>
    </div>
    <div class="action_items_bar">
      <div class="action_items">
        <span class="first_item" id="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house" viewbox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>                           
        </span>
        <span class="second_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
          </svg>
        </span>
        <span class="third_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewbox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </span>
        <span class="fourth_item" id="usuario">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person" viewbox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        </span>
      </div>
    </div>
  </div>`
  containerMenuTemplate.innerHTML = menuTemplate;
  const btnUsurio = containerMenuTemplate.querySelector('#usuario');
   btnUsurio.addEventListener('click', () =>{
         window.location.hash = '#/profile';
});
  const btnHome = containerMenuTemplate.querySelector('#home');
  btnHome.addEventListener('click', () =>{
    window.location.hash = '#/feed';
         
});

  //containerStandardTemplate.appendChild(containerHeaderMenuTemplate);
  containerStandardTemplate.appendChild(containerMenuTemplate);
  
  
  return containerStandardTemplate;
};