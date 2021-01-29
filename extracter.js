function findRequiredElements(arr) {
    let res = {};
    let li = document.querySelectorAll('.lbl-licitacao span');
    for (let i = 0; i < li.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            element = arr[j];
            if (element.toUpperCase() + ":" === li[i].innerText.toUpperCase()) {
                let ele = li[i].parentNode.querySelector("font:nth-child(2)");
                if (ele === null) {
                    if(li[i].parentNode.nextSibling.nodeName === "BR")
                        ele = li[i].parentNode.nextSibling.nextSibling;
                    else
                        ele = li[i].parentNode.nextSibling;
                }
                if (ele !== null)
                    res[arr[j]] = ele.innerText.trim();

            }
        }

    }
    console.log(res);
}

findRequiredElements(["PUBLICATION DATE", "OBJECT", "BIDDING DATE"]);