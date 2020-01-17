

const urlParams = new URLSearchParams(window.location.search)
const country = urlParams.get("country")
const lang = urlParams.get("lang")



fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[country]=${country}`)
    .then(response => response.json())
    .then(posts => {
    	var cards = document.getElementById("cards")
    	posts = posts.entries
    	console.log(posts)
    	for(i = 0; i < posts.length; i++){
    		
    		var container = document.createElement("div")
    		container.classList.add("card", "col-lg-6", "mt-3")
    		container.setAttribute("style", "width: 18rem;")

    		var cardImg = document.createElement("img")
    		cardImg.classList.add("card-img-top")
    		cardImg.setAttribute("src", "http://cdsapply.com:2017"+posts[i].logo.path)

    		var cardBody = document.createElement("div")
    		cardBody.classList.add("card-body")

    		var cardHeader = document.createElement("h5")
    		cardHeader.classList.add("card-title")

    		var cardContent = document.createElement("p")
    		cardContent.classList.add("card-text")

    		var cardLink = document.createElement("a")
    		cardLink.classList.add("btn", "btn-warning")


    		if(lang == "en" && posts[i].en_title != ""){

	    		$('head').append(`<meta name="description" content=${posts[i].tags.join()}>`);
	    		for(i = 0; i < posts[i].tags.length; i++){
		            $('head').append(`<meta name="description" content=${posts[i].tags[i]}>`);
		        }
	    		$('head').append(`<title>CANDO Study Abroad Agency | ${posts[i].en_title} - ${country} </title>`);
    			cardImg.setAttribute("alt", posts[i].en_title)
    			cardHeader.appendChild(document.createTextNode(posts[i].en_title))
    			cardHeader.setAttribute("style", "font-weight: bold; font-size: 30px;")
    			cardContent.appendChild(document.createTextNode(posts[i].en_content.slice(0,80)+' ...'))
    			cardLink.href = "http://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=en"
    			cardLink.appendChild(document.createTextNode("Read More"))
    		}
    		if(lang == "fa" && posts[i].title != ""){
    			$('head').append(`<meta name="description" content=${posts[i].tags.join()}>`);
    			for(i = 0; i < posts[i].tags.length; i++){
		            $('head').append(`<meta name="description" content=${posts[i].tags[i]}>`);
		        }
	    		$('head').append(`<title>موسسه اعزام دانشحو کندو  | ${posts[i].title} - ${country}</title>`);
    			cardImg.setAttribute("alt", posts[i].title)
    			cardHeader.appendChild(document.createTextNode(posts[i].title))
    			cardHeader.setAttribute("style", "font-weight: bold; font-size: 30px; float:right")
    			cardContent.appendChild(document.createTextNode('... '+posts[i].content.slice(0,80)))
    			cardContent.setAttribute("style", "float: right;")
    			cardLink.href = "http://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
    			cardLink.appendChild(document.createTextNode("ادامه مطلب"))
    			cardLink.setAttribute("style", "float: right;")
    		}

    		container.appendChild(cardImg)
    		container.appendChild(cardBody)
    		cardBody.appendChild(cardHeader)
    		cardBody.appendChild(cardContent)
    		cardBody.appendChild(cardLink)
    		cards.appendChild(container)
    		
    	}
    })