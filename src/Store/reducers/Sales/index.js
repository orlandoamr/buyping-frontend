const initialState = {
    hasMore:true,
    items:[],
    fetching:false,
    hasErrors:false,
    errors:[],
    currentPage:0,
    pageSize:10,
    totalPages:0,
    totalDocs:0
}

const saleReducer = (state=initialState, action) =>{
    const {type, payload} = action;

    switch(type){
        case "SALES_START_FETCH":
            return{
                ...state,
                fetching:false,
                hasErrors:false,
                errors:[]
            }
        case "SALES_FETCH_SUCCESS":
            const totalPages = (Math.ceil(payload.docsMatched / payload.itemsPerPage));
            const hasMore = payload.page !== totalPages;
            return{
                ...state,
                fetching:false,
                hasErrors:false,
                errors:[],
                totalPages: totalPages,
                currentPage:payload.page,
                items: [...state.items, ...payload.documents],
                hasMore: hasMore,
                totalDocs: payload.docsMatched
            } 
            case "SALES_LIST_CLEAR":
              return{...initialState};
        default:
        return state;
    }
}

export default saleReducer;