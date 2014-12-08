// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
		
		}
	});


// Toggle Search Bar

    var searchBar = document.querySelector('.searchbar');

    document.querySelector('.search-btn').addEventListener('click', function(e){
        e.preventDefault();
        
        if (searchBar.getAttribute('data-state') == 'open'){
            
            searchBar.setAttribute('data-state', 'closed');
            
        }else{
            
            searchBar.setAttribute('data-state', 'open');
            
        }
    });