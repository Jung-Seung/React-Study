import { Component } from 'react';
import '../css/Pagination.css';

class Pagination extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    pageClick=(page)=>{
        alert(page+'페이지 클릭')
        this.props.setCurrentPage(page)
    }
    prevPage=()=>{
        alert('이전 페이지')
        const {currentPage}=this.props
        const page = currentPage-1
        if(page<1){
            alert('이동불가')
        }else{
            this.props.setCurrentPage(page)
        }
    }
    nextPage=()=>{
        alert('다음 페이지')
        const {currentPage,total,boardPerPage}=this.props
        const page = currentPage+1
        const endPage=Math.ceil(total/boardPerPage)
        if(page>endPage){
            alert('이동불가')
        }else{
            this.props.setCurrentPage(page)
        }
    }

    render(){
        const {total,boardPerPage,currentPage}=this.props
        //const total=this.props.total, const boardPerPage=this.props.boardPerPage
        const endPage=Math.ceil(total/boardPerPage) //10/3 -> 3.3 -> 4 = 3 3 3 1
        let pageNumbers=[]
        for(var i=1; i<=endPage; i++){
            pageNumbers.push(i)
        }
        console.log('pageNumbers')
        console.log(pageNumbers) //[1,2,3,4]
        const result=pageNumbers.map(
            (page)=>
            (<span id='page' 
            className={currentPage===page? 'active':''}
            onClick={()=>this.pageClick(page)}>{page}</span>)
        )

        return(
            <div id='pagination'>
                <div id='pagination-inner'>
                    <span id='page' onClick={this.prevPage}>&lt;</span>
                    {result}
                    <span id='page' onClick={this.nextPage}>&gt;</span>
                </div>
            </div>
        )
    }
}

export default Pagination;