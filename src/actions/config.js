


const config = {
    base_url: "https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc",
    endPointByDate(date){
        return this.base_url.replace("{date}", date);
    },
    endPointPage(date, page){
        return `${this.endPointByDate(date)}&page=${page}`
    },

}

export default config