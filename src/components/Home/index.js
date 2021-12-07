import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Cards, CardsItem} from "../Cards";
import Page from "../Pages";
import { fetchSaleData } from "../../Store/reducers/Sales/actions";

const Loader = () =>{
    return (<div className="min-h-screen">Cargando.......</div>)
}

const Home = () => {

   const sales = useSelector(({sales})=>sales);
    const dispatch = useDispatch();
    const {hasMore, items, currentPage, pageSize, totalDocs} = sales;

    const fetchMore = () => {
        console.log("Loading More");
        fetchSaleData(dispatch, currentPage + 1, pageSize)
    }

    useEffect(()=>{
        if (hasMore) {
          fetchMore();
        }
      }, []);

    const itemsCard = items.map((o,i)=>{
        return (<CardsItem key={i} titulo={o.name} desc={o.description} est={o.status} prec={o.price} contact={o.contact} cant={o.quantity} urli={o.imgurl}/>)
    })
    return(
        <Page showHeader={true} title="Home" showNavBar className="bg-green-100 m-0 p-0">
            <div className="text-center">
                <h1 className="pt-20 font-serif font-semibold text-3xl">BUYPING</h1>
                <Cards id="saleList" hasMore={hasMore} fetchMore={fetchMore} loader={(<Loader />)} dataLength={items.length}>
                    {itemsCard}
                </Cards>
            </div>
            
        </Page>
    );
};

export default Home;