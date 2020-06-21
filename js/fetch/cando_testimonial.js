
// fetch testimonial
fetch('https://panel.cdsapply.com:2017/api/collections/get/testimonial?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(testimonial => {
        testimonial = testimonial.entries
        var div = document.createElement("div")
        div.innerHTML = testimonial[0].content
        div.setAttribute("style", "font-size:18px")
        div.setAttribute("dir", "rtl")
        div.setAttribute("data-aos", "fade-left")
        document.getElementById("testimonial").appendChild(div)
        images = document.getElementById('testimonial').getElementsByTagName('img')
        for(i = 0; i < images.length; i++){
            IMGsrc = document.getElementById('testimonial').getElementsByTagName('img')[i].src
            IMGsrc = IMGsrc.replace('https://cdsapply.com',  'https://panel.cdsapply.com:2017')
            document.getElementById('testimonial').getElementsByTagName('img')[i].setAttribute("src", IMGsrc)
        }
    })

// fetch seo
fetch('https://panel.cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=cando-testimonial')
    .then(response => response.json())
    .then(seo => {
        seo = seo.entries
        $('meta[name=description]').remove();
        $('head').append(`<meta name="description" content="${seo[0].tags.join()}">`);
        for(i = 0; i < seo[0].tags.length; i++){
            $('head').append(`<meta name="description" content="${seo[0].tags[i]}">`);
        }
    })