

const urlParams = new URLSearchParams(window.location.search)
const country = urlParams.get("country")
const lang = urlParams.get("lang")


fetch_cmd = null
if(country != '') fetch_cmd = fetch(`https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[country]=${country}`)

if(fetch_cmd && (lang == 'en' || lang == 'fa')){
    fetch_cmd
        .then(response => response.json())
        .then(posts => {
        	var cards = document.getElementById("cards")
        	posts = posts.entries
            if(posts.length==0) $(location).attr('href','https://cdsapply.com')
        	if(lang == "fa") $('head').append(`<title> موسسه کندو  - CDS Apply | ${country}</title>`);
            if(lang == "en") $('head').append(`<title>CANDO Study Abroad Agency | ${country}</title>`);
            
            for(i = 0; i < posts.length; i++){
        		var container = document.createElement("div")
                container.setAttribute("class", "card")
        		container.classList.add("card", "col-lg-6", "mt-3")
        		container.setAttribute("style", "width: 18rem;")

        		var cardImg = document.createElement("img")
        		cardImg.classList.add("card-img-top")
        		cardImg.setAttribute("src", "https://panel.cdsapply.com:2017"+posts[i].logo.path)

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
    	    		for(j = 0; j < posts[i].tags.length; j++){
    		            $('head').append(`<meta name="description" content=${posts[i].tags[i]}>`);
    		        }
        			cardImg.setAttribute("alt", posts[i].en_title)
        			cardHeader.appendChild(document.createTextNode(posts[i].en_title))
        			cardHeader.setAttribute("style", "font-weight: bold; font-size: 30px;")
        			cardContent.innerHTML = posts[i].en_content
                    cardContent.innerHTML = cardContent.textContent.slice(0,80) + ' ...'
        			cardLink.href = "https://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=en"
        			cardLink.appendChild(document.createTextNode("Read More"))
                    cardLink.setAttribute("style", "margin-top: 15px;")
        		}
        		if(lang == "fa" && posts[i].title != ""){
        			$('head').append(`<meta name="description" content=${posts[i].tags.join()}>`);
        			for(j = 0; j < posts[i].tags.length; j++){
    		            $('head').append(`<meta name="description" content=${posts[i].tags[i]}>`);
    		        }
        			cardImg.setAttribute("alt", posts[i].title)
        			cardHeader.appendChild(document.createTextNode(posts[i].title))
        			cardHeader.setAttribute("style", "font-weight: bold; font-size: 30px; float:right")
        			cardContent.innerHTML = posts[i].content
                    cardContent.innerHTML = '... '+cardContent.textContent.slice(0,80)
        			cardContent.setAttribute("style", "float: right;")
        			cardLink.href = "https://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
        			cardLink.appendChild(document.createTextNode("ادامه مطلب"))
        			cardLink.setAttribute("style", "float: right; margin-top: 15px;")
        		}

        		container.appendChild(cardImg)
        		container.appendChild(cardBody)
        		cardBody.appendChild(cardHeader)
        		cardBody.appendChild(cardContent)
        		cardBody.appendChild(cardLink)
        		cards.appendChild(container)
        		
        	}
        })
} else{
    $(location).attr('href','https://cdsapply.com')
}