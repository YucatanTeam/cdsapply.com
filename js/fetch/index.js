
// fetch posts
fetch('https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&sort[_created]=-1&limit=4')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries
        var postsdiv = document.getElementById("posts")
        for(i = 0; i < posts.length; i++){
            if(posts[i].newsletter && posts[i].title){

                a = document.getElementsByClassName("linkpost1") 
                a.href = "https://cdsapply.com/content.html?slug="+posts[0].slug+"&id="+posts[0]._id+"&lang=fa"
                a.innerHTML = a.innerHTML + document.createTextNode(posts[0].title)
                p = document.getElementById("paragpost1") 
                p.innerHTML = posts[0].content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost1").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[0].logo.path)

                a = document.getElementsByClassName("linkpost2") 
                a.href = "https://cdsapply.com/content.html?slug="+posts[1].slug+"&id="+posts[1]._id+"&lang=fa"
                a.innerHTML = a.innerHTML + document.createTextNode(posts[1].title)
                p = document.getElementById("paragpost2") 
                p.innerHTML = posts[1].content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost2").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[1].logo.path)

                a = document.getElementsByClassName("linkpost3") 
                a.href = "https://cdsapply.com/content.html?slug="+posts[2].slug+"&id="+posts[2]._id+"&lang=fa"
                a.innerHTML = a.innerHTML + document.createTextNode(posts[2].title)
                p = document.getElementById("paragpost3") 
                p.innerHTML = posts[2].content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost3").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[2].logo.path)

                a = document.getElementsByClassName("linkpost4") 
                a.href = "https://cdsapply.com/content.html?slug="+posts[3].slug+"&id="+posts[3]._id+"&lang=fa"
                a.innerHTML = a.innerHTML + document.createTextNode(posts[i].title)
                p = document.getElementById("paragpost4") 
                p.innerHTML = posts[3].content
                p.innerHTML = '... '+p.textContent.slice(0,80)
                document.getElementById("imgpost4").setAttribute("src", "https://panel.cdsapply.com:2017"+posts[3].logo.path)
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