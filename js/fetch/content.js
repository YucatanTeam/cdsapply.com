


const urlParams = new URLSearchParams(window.location.search)
const slug = urlParams.get("slug")
const id = urlParams.get("id")
const lang = urlParams.get("lang")

if(slug && id && (lang == 'en' || lang == 'fa')){
    fetch(`https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[_id]=${id}`)
        .then(response => response.json())
        .then(posts => {
            posts = posts.entries
            background_image = "https://panel.cdsapply.com:2017"+posts[0].background_head.path
            if( background_image) document.getElementById("main_backimg").setAttribute("style", `background-image: url(${background_image}); background-repeat: no-repeat;background-position: 50% 50%; max-width: 100%; background-size:cover;`)
            if(!background_image) document.getElementById("main_backimg").setAttribute("style", "background-image: url(images/background.jpg);background-repeat: no-repeat;background-position: 50% 50%; max-width: 100%; background-size:cover;")
            	 $('meta[name=description]').remove();
            	 $('title').remove();
        		 $('head').append(`<meta name="description" content=${posts[0].tags.join()}>`);
                 for(i = 0; i < posts[0].tags.length; i++){
                    $('head').append(`<meta name="description" content=${posts[0].tags[i]}>`);
                 }

            if(lang == "fa"){
        		$('head').append(`<title>موسسه کندو  - CDS Apply | ${posts[0].title}</title>`);
            	document.getElementById('content').innerHTML = posts[0].content
                document.getElementById('content').setAttribute("dir", "rtl")
                images = document.getElementById('content').getElementsByTagName('img')
                for(i = 0; i < images.length; i++){
                    IMGsrc = document.getElementById('content').getElementsByTagName('img')[i].src
                    IMGsrc = IMGsrc.replace('https://cdsapply.com',  'https://panel.cdsapply.com:2017')
                    document.getElementById('content').getElementsByTagName('img')[i].setAttribute("src", IMGsrc)
                }
            }
            if (lang == "en"){
            	$('head').append(`<title>CANDO Study Abroad Agency | ${posts[0].en_title}</title>`);
            	document.getElementById('content').innerHTML = posts[0].en_content
                document.getElementById('content').setAttribute("dir", "ltr")
                for(i = 0; i < images.length; i++){
                    IMGsrc = document.getElementById('content').getElementsByTagName('img')[i].src
                    IMGsrc = IMGsrc.replace('https://cdsapply.com',  'https://panel.cdsapply.com:2017')
                    document.getElementById('content').getElementsByTagName('img')[i].setAttribute("src", IMGsrc)
                }

            }

        })
} else{
    $(location).attr('href','https://cdsapply.com')
}
