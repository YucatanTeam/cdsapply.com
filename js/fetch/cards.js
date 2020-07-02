

const urlParams = new URLSearchParams(window.location.search)
const country = urlParams.get("country")
const lang = urlParams.get("lang")
var template = ''

if(lang == "fa") $('head').append(`<title> موسسه کندو  - CDS Apply | ${country}</title>`);
if(lang == "en") $('head').append(`<title>CANDO Study Abroad Agency | ${country}</title>`);


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


fetch_cmd = null
if(country != '') fetch_cmd = fetch(`https://panel.cdsapply.com:2017/api/collections/get/post?token=account-3eb37339b9641b90e3f0b73b7cedf6&filter[country]=${country}&sort[_created]=-1`)

if(fetch_cmd && (lang == 'en' || lang == 'fa')){
    fetch_cmd
        .then(response => response.json())
        .then(posts => {

        	posts = posts.entries
            if(posts.length==0) $(location).attr('href','https://cdsapply.com')
        	
            for(i = 0; i < posts.length; i++){
        		
                divCard = document.createElement("div")
                divCard.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mt-4")

                cardLink = document.createElement("a")
                cardLink.classList.add("card")

                cardHeader = document.createElement("h4")
                cardHeader.classList.add("card-title", "mt-3", "saheltitle")
                
                cardImg = document.createElement("img")
                cardImg.classList.add("card-img-top")
                cardImg.setAttribute("src", "https://panel.cdsapply.com:2017"+posts[i].logo.path)

                secDiv = document.createElement("div")
                secDiv.classList.add("card-block")

                thDiv = document.createElement("div")
                thDiv.classList.add("card-text")

                fDiv = document.createElement("div")
                fDiv.classList.add("card-footer")

                cardTime = document.createElement("small")
                date = new Date(posts[i]._created)
                var time = '';
                time += date.getUTCDate()-1 + " days - ";
                time += date.getUTCHours() + " hours - ";
                time += date.getUTCMinutes() + " minutes ago ";
                cardTime.innerHTML = time
                


        		if(lang == "en" && posts[i].en_title != ""){
    	    		$('head').append(`<meta name="description" content="${posts[i].tags.join()}">`);
    	    		for(j = 0; j < posts[i].tags.length; j++){
    		            $('head').append(`<meta name="description" content="${posts[i].tags[i]}">`);
    		        }

                    cardHeader.appendChild(document.createTextNode(posts[i].en_title))
                    thDiv.innerHTML = posts[i].en_content
                    thDiv.innerHTML = thDiv.textContent.slice(0,80)+'...'
        			cardLink.href = "https://cdsapply.com/content.html?slug="+posts[i].en_slug+"&id="+posts[i]._id+"&lang=en"
                    cardTime.setAttribute("style", "float: left")
                    cardHeader.setAttribute("style", "float: left")

        		}
        		else if(lang == "fa" && posts[i].title != ""){
        			$('head').append(`<meta name="description" content="${posts[i].tags.join()}">`);
        			for(j = 0; j < posts[i].tags.length; j++){
    		            $('head').append(`<meta name="description" content="${posts[i].tags[i]}">`);
    		        }

                    cardHeader.appendChild(document.createTextNode(posts[i].title))
                    thDiv.innerHTML = posts[i].content
                    thDiv.innerHTML = thDiv.textContent.slice(0,80)+'...'
        			cardLink.href = "https://cdsapply.com/content.html?slug="+posts[i].slug+"&id="+posts[i]._id+"&lang=fa"
                    cardLink.classList.add("text-right")
                    cardTime.setAttribute("style", "float: right")
                    thDiv.setAttribute("style", "direction: rtl")
                    cardHeader.setAttribute("style", "float: right")
        		
                } else{
                    $(location).attr('href','https://cdsapply.com')
                }

        		divCard.appendChild(cardLink)
                cardLink.appendChild(cardImg)
                cardLink.appendChild(secDiv)
                secDiv.appendChild(cardHeader)
                secDiv.appendChild(thDiv)
                // cardLink.appendChild(fDiv)
                // fDiv.appendChild(cardTime)


                document.getElementById("cards").appendChild(divCard)
        		
        	}
        })
} else{
    $(location).attr('href','https://cdsapply.com')
}