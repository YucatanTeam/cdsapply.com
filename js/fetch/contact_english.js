
fetch('https://panel.cdsapply.com:2017/api/collections/get/contactUS?token=account-3eb37339b9641b90e3f0b73b7cedf6')
.then(response => response.json())
.then(contactUS => {
    contactUS = contactUS.entries
    document.getElementById("contactus").innerHTML = contactUS[0].en_content
    images = document.getElementById('contactus').getElementsByTagName('img')
    for(i = 0; i < images.length; i++){
        IMGsrc = document.getElementById('contactus').getElementsByTagName('img')[i].src
        IMGsrc = IMGsrc.replace('https://cdsapply.com',  'https://panel.cdsapply.com:2017')
        document.getElementById('contactus').getElementsByTagName('img')[i].setAttribute("src", IMGsrc)
    }
})

// fetch seo
fetch('https://panel.cdsapply.com:2017/api/collections/get/seo?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[page]=contact')
.then(response => response.json())
.then(seo => {
    seo = seo.entries
    $('meta[name=description]').remove();
    $('head').append(`<meta name="description" content="${seo[0].tags.join()}">`);
    for(i = 0; i < seo[0].tags.length; i++){
        $('head').append(`<meta name="description" content="${seo[0].tags[i]}">`);
    }
})