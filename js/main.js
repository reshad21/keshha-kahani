// ========== post optimize ========== //
function mouseinout() {
    let post_title = document.querySelectorAll("#post_title");
    let post_heading = document.querySelectorAll("#post_title > a > h2");
    let post_intro = document.querySelectorAll("#post_title > a > p");

    for (let i = 0; i < post_title.length; i++) {
        let items = post_title[i];
        items.addEventListener('mouseover', function(e) {
            post_heading[i].style.color = "red";
            post_intro[i].style.color = "red";
        });
        items.addEventListener('mouseout', function(e) {
            post_heading[i].style.color = "";
            post_intro[i].style.color = "";
        })
    }
}
mouseinout();

// =========== share post section ============ //
function sharefunction() {
    let post_share_icon = document.querySelectorAll("#post_share_icon");
    let post_share_media = document.querySelectorAll("#post_share_media");

    for (let i = 0; i < post_share_icon.length; i++) {
        let elements = post_share_icon[i];
        elements.addEventListener("click", function(e) {
            let items = post_share_media[i];
            items.classList.toggle("show");
        });
    }

}
sharefunction();


// =============== second page && third page javaScript code =============== //
function author() {
    let postAuthor = document.querySelectorAll("#postAuthor");
    let postAuthorName = document.querySelectorAll('#postAuthor > a > .author-name > h6');
    let authorPoetName = document.querySelectorAll('#postAuthor > a > .post-title > p');

    for (let i = 0; i < postAuthor.length; i++) {
        let elements = postAuthor[i];
        elements.addEventListener('mouseover', function(e) {
            postAuthorName[i].style.color = "red";
            authorPoetName[i].style.color = "red";
        });
        elements.addEventListener('mouseout', function(e) {
            postAuthorName[i].style.color = "";
            authorPoetName[i].style.color = "";
        });
    }

}
author();