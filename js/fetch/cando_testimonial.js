
// fetch testimonial
fetch('http://cdsapply.com:2017/api/collections/get/testimonial?token=account-3eb37339b9641b90e3f0b73b7cedf6')
    .then(response => response.json())
    .then(testimonial => {
        testimonial = testimonial.entries
        var div = document.createElement("div")
        div.appendChild(document.createTextNode(testimonial[0].content))
        div.setAttribute("style", "font-size:18px")
        div.setAttribute("data-aos", "fade-left")
        document.getElementById("testimonial").appendChild(div)
    })

// fetch seo
fetch('http://cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=cando-testimonial')
    .then(response => response.json())
    .then(seo => {
        seo = seo.entries
        $('meta[name=description]').remove();
        $('head').append(`<meta name="description" content=${seo[0].tags.join()}>`);
        for(i = 0; i < seo[0].tags.length; i++){
            $('head').append(`<meta name="description" content=${seo[0].tags[i]}>`);
        }
    })