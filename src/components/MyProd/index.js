import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Cards2, CardsItem2 } from "../UI/Cards2/Cards2";
import Page from "../Pages";
import { fetchProdData } from "../../Store/reducers/Sales/actions";

const Loader = () =>{
    return (<div className="min-h-screen">Cargando.......</div>)
}

const MyProd = () => {

   const sales = useSelector(({sales})=>sales);
    const dispatch = useDispatch();
    const {hasMore, items, currentPage, pageSize, totalDocs} = sales;

    const fetchMore = () => {
        console.log("Loading More");
        fetchProdData(dispatch, currentPage + 1, pageSize)
    }

    useEffect(()=>{
        if (hasMore) {
          fetchMore();
        }
      }, []);

    const itemsCard = items.map((o,i)=>{
        
        return (<CardsItem2 key={i} titulo={o.name} desc={o.description} est={o.status} prec={o.price} contact={o.contact} cant={o.quantity} urli={o.imgurl} id={o._id}/>)
    })
    return(
        <Page showHeader={true} title="Mis Productos" showNavBar className="bg-green-100 m-0 p-0 min-h-screen">
            <div className="text-center">
                <h1 className="pt-20 font-serif font-semibold text-3xl">BUYPING</h1>
                <Cards2 id="MyProdList" hasMore={hasMore} fetchMore={fetchMore} loader={(<Loader />)} dataLength={items.length}>
                    {itemsCard}
                </Cards2>
            </div>
            
        </Page>
    );
};

export default MyProd;