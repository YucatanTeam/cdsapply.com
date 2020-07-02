// fetch posts
fetch('https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&sort[_created]=-1')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries

        for(i = 0; i < posts.length; i++){

                if(posts[i].en_title){

            	divCard = document.createElement("div")
            	divCard.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mt-4")

            	cardLink = document.createElement("a")
            	cardLink.href = "https://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=fa"
            	cardLink.classList.add("card")

            	cardImg = document.createElement("img")
            	cardImg.classList.add("card-img-top")
            	cardImg.setAttribute("src", "https://panel.cdsapply.com:2017"+posts[i].logo.path)

            	secDiv = document.createElement("div")
            	secDiv.classList.add("card-block")

            	cardHeader = document.createElement("h4")
            	cardHeader.classList.add("card-title", "mt-3", "saheltitle")
            	cardHeader.appendChild(document.createTextNode(posts[i].en_title))
                cardHeader.setAttribute("style", "direction: ltr;")
                

            	thDiv = document.createElement("div")
            	thDiv.classList.add("card-text")
            	thDiv.innerHTML = posts[i].en_content
                thDiv.innerHTML = thDiv.textContent.slice(0,80) + ' ...'

                fDiv = document.createElement("div")
                fDiv.classList.add("card-footer")

                cardTime = document.createElement("small")
                date = new Date(posts[i]._created)
                var time = '';
                time += date.getUTCDate()-1 + " days - ";
                time += date.getUTCHours() + " hours - ";
                time += date.getUTCMinutes() + " minutes ago ";
                cardTime.innerHTML = time
                cardTime.setAttribute("dir", "ltr")



                divCard.appendChild(cardLink)
                cardLink.appendChild(cardImg)
                cardLink.appendChild(secDiv)
                secDiv.appendChild(cardHeader)
                secDiv.appendChild(thDiv)
                // cardLink.appendChild(fDiv)
                // fDiv.appendChild(cardTime)


                document.getElementById("postCards").appendChild(divCard)

            } else {
                $(location).attr('href','https://cdsapply.com')
            }
        }
    })



// fetch seo
fetch('https://panel.cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=index_en')
    .then(response => response.json())
    .then(seo => {
        seo = seo.entries
        $('meta[name=description]').remove();
        $('head').append(`<meta name="description" content="${seo[0].tags.join()}">`);
        for(i = 0; i < seo[0].tags.length; i++){
            $('head').append(`<meta name="description" content="${seo[0].tags[i]}">`);
        }
    })