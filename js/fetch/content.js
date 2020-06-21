


const urlParams = new URLSearchParams(window.location.search)
const slug = urlParams.get("slug")
const id = urlParams.get("id")
const lang = urlParams.get("lang")
var template = ''

if(lang == 'fa'){
    template += '\
    <div class="res_stars page_subtitle">CDS Apply</div>\
        <div class="res_title hov">با ما در ارتباط باشید</div>\
        <div class="row mt-5 " >\
            <div class="col-4 mp hov" >\
                <div class="text-right text-white mt-3 " style="font-size: 20px;direction: rtl;font-weight: bold">\
                        کندو در شبکه های اجتماعی\
                </div>\
                <div class="mt-2" style="margin-left: 75px;">\
                    <a href="https://instagram.com/cdsapply"><img src="images/instagram.png"></a>\
                    <a href="https://t.me/cdsapply"><img src="images/telegram.png"></a>\
                    <a href="https://www.linkedin.com/company/cdsapply"><img src="images/in.png"></a>\
                </div>\
            </div>\
            <div class="col-4 text-right home_text ">\
                <p class="hov" style="margin-bottom: -0.1% ;font-size: 12px">نشانی: مازندران، ساری، میدان امام، ساختمان برلیان، طبقه اول، بالای بانک تجارت، واحد شماره 19</p>\
            </div>\
            <div class="col-4 text-right home_text" style="direction: rtl">\
                <p class="hov" style="margin-bottom: -0.1%;font-size: 12px"><strong>موسسه اعزام دانشجو کندو </strong></p>\
                <p class="hov" style="margin-bottom: -0.1%;font-size: 12px">با مجوز رسمی از وزارت علوم، تحقیقات و فناوری</p>\
                <p class="hov" style="margin-bottom: -0.1%;font-size: 12px">شماره های تماس جهت تعیین وقت مشاوره:</p>\
                <p class="hov" dir="ltr" style="margin-bottom: -0.1%;font-size: 12px">011 333 67500</p>\
                <p class="hov" dir="ltr" style="font-size: 12px">0903 061 2326</p>\
            </div>\
        </div>\
        <div class="button btn-outline-light text-light sig_button trans_200 "><a href="تماس-با-ما.html">تماس با ما</a></div>\
    '
} if (lang == 'en'){
    template += '\
        <div class="res_stars page_subtitle">CDS Apply</div>\
        <div class="res_title hov">Stay in Touch with Us</div>\
        <div class="row mt-5 " >\
            <div class="col-4 mp" >\
                <div class="text-left text-white mt-3" style="font-size: 24px;direction: rtl;font-weight: bold" dir="ltr">\
                    Our Social Networks\
                </div>\
                <div class="mt-2" style="margin-right: 75px;">\
                    <a href="https://instagram.com/cdsapply"><img src="images/instagram.png"></a>\
                    <a href="https://t.me/cdsapply"><img src="images/telegram.png"></a>\
                    <a href="https://www.linkedin.com/company/cdsapply"><img src="images/in.png"></a>\
                </div>\
            </div>\
            <div class="col-4 text-left home_text">\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr"><strong>Address:</strong></p>\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr">Unit 19, 1st floor, Brelian Complex, Imam Sq., Sary, Mazandaran, Iran</p>\
            </div>\
            <div class="col-4 text-left home_text" style="direction: rtl">\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr"><strong>Contact Numbers</strong>:</p>\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr">(For Making Appointments Only)</p>\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr">+98 11 333 67500</p>\
                <p class="hov" dir="ltr">+98 903 061 2326</p>\
                <p class="hov" style="margin-bottom: -0.1%" dir="ltr">Other Inquiries:</p>\
                <p class="hov" dir="ltr">+98 936 612 8447</p>\
            </div>\
        </div>\
        <!--<button class="res_button">Contact Us</button>-->\
        <div class="button btn-outline-light text-light sig_button trans_200 "><a href="contact.html">Contact Us</a></div>\
    '
}

document.getElementById("footer__full_temp").innerHTML = template

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
        		 $('head').append(`<meta name="description" content="${posts[0].tags.join()}">`);
                 for(i = 0; i < posts[0].tags.length; i++){
                    $('head').append(`<meta name="description" content="${posts[0].tags[i]}">`);
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
