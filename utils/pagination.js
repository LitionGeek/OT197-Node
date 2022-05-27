module.exports = {
    getOffset(page,limit){
        console.log("limit ",(page*limit)-limit)
        return (page*limit)-limit;
    },
    getNextPage(page,limit,total){
        return (((total/limit)>page) ? page+1 : null) 
    },
    getPreviusPage(page){
        return ((page<=1) ? null : page-1);
    }
}