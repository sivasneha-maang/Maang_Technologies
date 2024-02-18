    var appsButton = document.getElementById('appsButton');
    var modal = document.getElementById('appsModal');
    var closeBtn = document.getElementsByClassName('close')[0];
  
    appsButton.addEventListener('click', function() {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        // Get button position
        var buttonRect = appsButton.getBoundingClientRect();
        // Set modal position
       modal.style.top = (buttonRect.bottom + 10) + 'px'; // 5px offset from button
       modal.style.right = (window.innerWidth - buttonRect.right) + 'px';
        modal.style.display = 'block';
      }
   });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
 

  
  
  