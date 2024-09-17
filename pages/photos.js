export function page (app) {
    let $ = app.modules.$.bind(app)
    app.init()
    app.title = `相簿 | ${app.shortname}`
    app.renderBase = `
      <div class="container">
        <p class="page-title">相簿</p>
        <hr>
        <br>
        <div id="gallery"></div>
      </div> 
    `
    var link="https://script.googleusercontent.com/macros/echo?user_content_key=rRyOUecD_KMYqxjam_GIArkt1JNHxz6Keo8nvQAQBmC5Vkel_oXlFF021UUeVPXYMp7jDr-iSkSQ0WcMPluLQJ6GOLf_IqKrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJcb7PF_24SPOOU-6wvMI0UDuUZYCdbIOKx7Dd9W3Ee2Yfcc6jQwq9adQFlaMWwTuWtzI5QzllBwjXDV1NxbEpfaRPYY4GiN1Q&lib=M_Aso3sf5Cv9hhKoqNZJDlKWlMQveogDQ";
 
    fetch(link).then(async (res) => {
        const data = await res.json()
        var html_data="";
        data.forEach((value)=>{
            var image_ID=value[1].split('/')[5];
            var image_URL=`https://drive.google.com/thumbnail?export=view&id=${image_ID}&sz=w1400-h1400`;
            html_data+= `
            <a href="${image_URL}">
                <img src="${image_URL}"/>
            </a>
            `
        })
        $('#gallery').innerHTML=html_data;
        lightGallery(document.getElementById('gallery'), {
            plugins: [lgThumbnail,lgZoom,lgHash],
            allowMediaOverlap: true,
            toggleThumb: true,
        });
        
        jQuery(document).ready(function() { 
            jQuery("#gallery").justifiedGallery({
                captions: false,
                rowHeight: 300,
                margins: 5
            }); 
        });
    })

    const galleryEvent = document.getElementById('gallery');
    galleryEvent.addEventListener('lgBeforeSlide', (event) => {
        $(".navbar").style.display="none";
    });
    galleryEvent.addEventListener('lgAfterClose', (event) => {
        $(".navbar").style.display="block";
    });
}