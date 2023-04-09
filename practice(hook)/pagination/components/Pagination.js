import '../css/Pagination.css';

function Pagination(props){
    const {total,postPerPage}=props
    const endPage = Math.ceil(total/postPerPage)
    let pageNumbers = []
    for(var i=1;i<=endPage;i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers) //[1,2,3,4]

    const pageClick=(page)=>{
        alert('Page Click:'+page)
        //Page Click:...
        props.setCurrentPage(page)
    }

    const result = pageNumbers.map(
        (page)=>(<span id='page'
        onClick={()=>pageClick(page)}>
            {page}
        </span>)
    )

    return(
        <div id='pagination'>
            {result}
        </div>
    )
}

export default Pagination;