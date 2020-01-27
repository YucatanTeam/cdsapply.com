
// fetch posts
fetch('https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries
        var postsdiv = document.getElementById("posts")
        for(i = 0; i < posts.length; i++){
            if(posts[i].newsletter && posts[i].title){
                var divRow = document.createElement("div")
                divRow.classList.add("row")
                var divColLg10 = document.createElement("div")
                divColLg10.classList.add("col-lg-10")
                var divTextRight = document.createElement("div")
                divTextRight.classList.add("text-right", "mt-1")
                postsdiv.appendChild(divTextRight)
                divTextRight.appendChild(divRow)
                var divColLg2 = document.createElement("div")
                // divColLg2.setAttribute("data-aos", "fade-up")
                divColLg2.classList.add("col-lg-2")                
                var h4 = document.createElement("h4")
                divColLg10.appendChild(h4)
                h4.setAttribute("data-aos", "fade-up")
                var aTitle = document.createElement("a")
                h4.appendChild(aTitle)
                var link = document.createTextNode(posts[i].title)
                aTitle.appendChild(link)
                aTitle.href = "https://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
                var p = document.createElement("p")
                divColLg10.appendChild(p)
                p.setAttribute("data-aos", "fade-up")
                p.innerHTML = posts[i].content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                divRow.appendChild(divColLg10)
                divRow.appendChild(divColLg2)
                var aImg = document.createElement("a")
                divColLg2.appendChild(aImg)
                aImg.href = "https://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
                var img = document.createElement("img")
                img.setAttribute("style", "width: 100%")
                img.setAttribute("src", "https://panel.cdsapply.com:2017"+posts[i].logo.path)
                aImg.appendChild(img)
            }

        }
      })

// fetch seo
fetch('https://panel.cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=index')
    .then(response => response.json())
    .then(seo => {
        seo = seo.entries
        $('meta[name=description]').remove();
        $('head').append(`<meta name="description" content=${seo[0].tags.join()}>`);
        for(i = 0; i < seo[0].tags.length; i++){
            $('head').append(`<meta name="description" content=${seo[0].tags[i]}>`);
        }
    })


fetch('https://panel.cdsapply.com:2017/api/collections/get/bestof?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(bestof =>{
        bestof = bestof.entries
        bestofUl = document.getElementById("bestof")
        for(i = 0; i < bestof.length; i++){
            li = document.createElement("li")
            link = document.createElement("a")
            link.classList.add("btn", "btn-outline-dark", "mt-2", "mr-4")
            link.setAttribute("data-aos", "fade-right")
            link.setAttribute("data-aos-duration", "500")
            link.href = bestof[i].link
            link.appendChild(document.createTextNode(bestof[i].title))
            li.appendChild(link)
            bestofUl.appendChild(li)
        }

    })