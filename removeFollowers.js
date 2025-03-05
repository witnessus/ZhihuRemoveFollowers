function removeFollowers() {
    var next_button = document.querySelector("button.PaginationButton-next")
    setTimeout(function(){next_button.click()}, 1000)

    var all_urls = document.querySelectorAll("#Profile-following > * > * > div > div > div > div.ContentItem-image > span > div > a")

    for(let i = 0; i < all_urls.length; i++) {
        var block_url = document.querySelectorAll("#Profile-following > * > * > div > div > div > div.ContentItem-image > span > div > a")[i].href.replace("people", "api/v4/members") + "/actions/block"
        
        // 发送请求拉黑
        fetch(block_url, {
            method: "POST", 
        }).then(response => response.text()).then(data => console.log(data)) .catch(error => console.error('Error:', error));
    
        // 解除拉黑
        fetch(block_url, {
            method: "DELETE", 
        }).then(response => response.text()).then(data => console.log(data)) .catch(error => console.error('Error:', error));
    }        
}

removeFollowers()