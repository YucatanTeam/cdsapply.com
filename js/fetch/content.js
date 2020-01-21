


const urlParams = new URLSearchParams(window.location.search)
const slug = urlParams.get("slug")
const id = urlParams.get("id")
const lang = urlParams.get("lang")

if(slug && id && (lang == 'en' || lang == 'fa')){
    fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[_id]=${id}`)
        .then(response => response.json())
        .then(posts => {
            document.getElementById("main_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+posts[0].logo.path)
            posts = posts.entries
            	 $('meta[name=description]').remove();
            	 $('title').remove();
        		 $('head').append(`<meta name="description" content=${posts[0].tags.join()}>`);
                 for(i = 0; i < posts[0].tags.length; i++){
                    $('head').append(`<meta name="description" content=${posts[0].tags[i]}>`);
                 }

            if(lang == "fa"){
        		$('head').append(`<title>موسسه کندو  - CDS Apply | ${posts[0].title}</title>`);
            	document.getElementById('content').innerHTML = posts[0].content
            }
            if (lang == "en"){
            	$('head').append(`<title>CANDO Study Abroad Agency | ${posts[0].en_title}</title>`);
            	document.getElementById('content').innerHTML = posts[0].en_content

            }

        })
} else{
    $(location).attr('href','http://cdsapply.com')
}
