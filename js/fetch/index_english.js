
// fetch posts
fetch('https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries
        if((posts[0].newsletter && posts[0].en_title) && 
                (posts[1].newsletter && posts[1].en_title) &&
                (posts[2].newsletter && posts[2].en_title) &&
                (posts[3].newsletter && posts[3].en_title)){

                 
                $(".linkpost1").attr("href", "https://cdsapply.com/content.html?slug="+posts[0].en_slug+"&id="+posts[0]._id+"&lang=en")
                $(".linkpost1__F").append(posts[0].en_title)
                $(".linkpost1__F").attr("href", "https://cdsapply.com/content.html?slug="+posts[0].en_slug+"&id="+posts[0]._id+"&lang=en")
                p = document.getElementById("paragpost1") 
                p.innerHTML = posts[0].en_content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost1").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[0].logo.path)

                
                $(".linkpost2").attr("href", "https://cdsapply.com/content.html?slug="+posts[1].en_slug+"&id="+posts[1]._id+"&lang=en")
                $(".linkpost2__F").append(posts[1].en_title)
                $(".linkpost2__F").attr("href", "https://cdsapply.com/content.html?slug="+posts[1].en_slug+"&id="+posts[1]._id+"&lang=en")
                p = document.getElementById("paragpost2") 
                p.innerHTML = posts[1].en_content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost2").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[1].logo.path)

                 
                $(".linkpost3").attr("href", "https://cdsapply.com/content.html?slug="+posts[2].en_slug+"&id="+posts[2]._id+"&lang=en")
                $(".linkpost3__F").append(posts[2].en_title)
                $(".linkpost3__F").attr("href", "https://cdsapply.com/content.html?slug="+posts[2].en_slug+"&id="+posts[2]._id+"&lang=en")
                p = document.getElementById("paragpost3") 
                p.innerHTML = posts[2].en_content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost3").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[2].logo.path)

 
                $(".linkpost4").attr("href", "https://cdsapply.com/content.html?slug="+posts[3].en_slug+"&id="+posts[3]._id+"&lang=en")
                $(".linkpost4__F").append(posts[3].en_title)
                $(".linkpost4__F").attr("href", "https://cdsapply.com/content.html?slug="+posts[3].en_slug+"&id="+posts[3]._id+"&lang=en")
                p = document.getElementById("paragpost4") 
                p.innerHTML = posts[3].en_content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost4").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[3].logo.path)
            }
      })

// fetch seo
fetch('https://panel.cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=index_en')
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
            link.appendChild(document.createTextNode(bestof[i].en_title))
            li.appendChild(link)
            bestofUl.appendChild(li)
        }

    })