


const urlParams = new URLSearchParams(window.location.search)
const country = urlParams.get("slug")
const lg = urlParams.get("lg")
const lang = urlParams.get("lang")

fetch_cmd = null
if(country != '') fetch_cmd = fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[country]=${country}`)
if(lg != '') fetch_cmd = fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[language_courses]=${lg}`)

if(fetch_cmd){
    fetch(`http://cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[_id]=${id}`)
        .then(response => response.json())
        .then(posts => {
            posts = posts.entries
            	 $('meta[name=description]').remove();
            	 $('title').remove();
        		 $('head').append(`<meta name="description" content=${posts[0].tags.join()}>`);
                 for(i = 0; i < posts[0].tags.length; i++){
                    $('head').append(`<meta name="description" content=${posts[0].tags[i]}>`);
                 }

            if(lang == "fa"){
        		$('head').append(`<title>موسسه اعزام دانشجو کندو  | ${posts[0].title}</title>`);
            	document.getElementById('content').appendChild(document.createTextNode(posts[0].content))
            }
            if (lang == "en"){
            	$('head').append(`<title>CANDO Study Abroad Agency | ${posts[0].en_title}</title>`);
            	document.getElementById('content').appendChild(document.createTextNode(posts[0].en_content))

            }

            document.getElementById("main_backimg").setAttribute("data-image-src", "http://cdsapply.com:2017"+posts[0].logo.path)
        })
} else{
    window.location.replace = 'http://www.cdsapply.com'
}

