
function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}
function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}
function filterArticles() {
    let checkOpinion = document.getElementById("opinionCheckbox").checked;
    let checkRecipe = document.getElementById("recipeCheckbox").checked;
    let checkUpdate = document.getElementById("updateCheckbox").checked;

    let opinionArticles = document.getElementsByClassName("opinion");
    let recipeArticles = document.getElementsByClassName("recipe");
    let updateArticles = document.getElementsByClassName("update");

    if (checkOpinion) {
        for (let article of opinionArticles) {
            article.style.display = "block";
        }
    } else if (!checkOpinion) {
        for (let article of opinionArticles) {
            article.style.display = "none";
        }
    }

    if (checkRecipe) {
        for (let article of recipeArticles) {
            article.style.display = "block";
        }
    } else if (!checkRecipe) {
        for (let article of recipeArticles) {
            article.style.display = "none";
        }
    }

    if (checkUpdate) {
        for (let article of updateArticles) {
            article.style.display = "block";
        }
    } else if (!checkUpdate) {
        for (let article of updateArticles) {
            article.style.display = "none";
        }
    }
}
function addNewArticle() {
    let title = document.getElementById("inputHeader").value;
    let checkOpinion = document.getElementById("opinionRadio").checked;
    let checkRecipe = document.getElementById("recipeRadio").checked;
    let checkUpdate = document.getElementById("lifeRadio").checked;
    let text = document.getElementById("inputArticle").value;

    let newArticle = document.createElement("article");
    let spanText = "";
    let type = "";

    if (checkOpinion) {
        type = "opinion";
        newArticle.classList.add(type);
        spanText = "Opinion";
        
    }
    else if (checkRecipe) {
        type = "recipe";
        newArticle.classList.add(type);
        spanText = "Recipe";
    }
    else if (checkUpdate) {
        type = "update";
        newArticle.classList.add(type);
        spanText = "Update";
    }

    let newSpan = document.createElement("span");
    newSpan.classList.add("marker");
    newSpan.innerText = spanText;
    newArticle.appendChild(newSpan);

    let newHeader = document.createElement("h2");
    newHeader.innerText = title;
    newArticle.appendChild(newHeader);

    let newText = document.createElement("p");
    newText.innerText = text;
    newArticle.appendChild(newText);

    document.getElementById("articleList").appendChild(newArticle);
}