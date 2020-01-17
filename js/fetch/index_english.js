
// fetch posts
fetch('http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6')
      .then(response => response.json())
      .then(posts => {
        posts = posts.entries
        var postsdiv = document.getElementById("posts")
        for(i = 0; i < posts.length; i++){
            if(posts[i].newsletter){
                var divRow = document.createElement("div")
                divRow.classList.add("row")
                var divColLg10 = document.createElement("div")
                divColLg10.classList.add("col-lg-10")
                var divTextRight = document.createElement("div")
                divTextRight.classList.add("text-left", "mt-1")
                postsdiv.appendChild(divTextRight)
                divTextRight.appendChild(divRow)
                var divColLg2 = document.createElement("div")
                divColLg2.setAttribute("data-aos", "fade-up")
                divColLg2.classList.add("col-lg-2")                
                var h4 = document.createElement("h4")
                divColLg10.appendChild(h4)
                h4.setAttribute("data-aos", "fade-up")
                var aTitle = document.createElement("a")
                h4.appendChild(aTitle)
                var link = document.createTextNode(posts[i].en_title)
                aTitle.appendChild(link)
                aTitle.href = "http://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=en"
                var p = document.createElement("p")
                divColLg10.appendChild(p)
                p.setAttribute("data-aos", "fade-up")
                var content = document.createTextNode(posts[i].en_content.slice(0,80)+' ...')
                p.appendChild(content)
                divRow.appendChild(divColLg2)
                divRow.appendChild(divColLg10)
                var aImg = document.createElement("a")
                divColLg2.appendChild(aImg)
                aImg.href = "http://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=en"
                var img = document.createElement("img")
                img.setAttribute("style", "width: 100%")
                img.setAttribute("src", "http://cdsapply.com:2017"+posts[i].logo.path)
                aImg.appendChild(img)                       
            }

        }
      })
      .catch(error => {
            // loading gif ...
       })