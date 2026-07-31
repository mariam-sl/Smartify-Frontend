export function getDifficultyVariant(difficulty){
    switch(difficulty){
        case "Beginner":
            return "secondary";
        case "Intermediate":
            return "info";
        case "Advanced":
            return "danger";
        default:
            return "secondary";
    }
}

export function getPublishVariant(isPublished){
    return isPublished? "success" : "warning";
}


export function isValidImage(url) {

    return (
        typeof url === "string" &&
        (
            url.startsWith("http://") ||
            url.startsWith("https://")
        )
    );

}