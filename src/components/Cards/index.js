
import InfiniteScroll from "react-infinite-scroll-component";

export function CardsItem({titulo, desc, est, prec, contact, cant,urli}){
    return(
        <section className=" bg-blue-400 mx-2 my-2 border border-gray-300 rounded shadow-lg w-92 divide-y divide-gray-700 text-black">
            <div>
                <h2 className="text-center py-2 text-3xl font-semibold">{titulo}</h2>
            </div>
            
        <section className="m-3">
        <div class=" shadow-2xl bg-yellow-300 border border-gray-300 rounded w-2/2 m-2 flex flex-wrap space-x-1">                             
                <h2 className="">Estado: {est}</h2>
                <h2>Disponibles: {cant}</h2>  
                <h2>Precio: {prec}</h2>                             
            </div>                      
                                              
            
            <div className="flex">
            <img src={urli} className="shadow-2xl flex flex-col justify-center bg-yellow-300 border border-gray-300 rounded w-1/2 m-2 h-36" alt="Imagen de producto"/>
            <div class="shadow-2xl bg-yellow-300 border border-gray-300 rounded w-1/2 m-2 flex-grow">                             
                <p class="text-gray-900 text-justify break-all m-2"> {desc} </p>
                
            </div>
            </div>
         </section>
         <div className="flex space-x-3 pl-1">
            <h2>Para mas info: </h2>
            <h2 className="underline">{contact}</h2>
         </div>
         </section>
    );
    
    }
    
  export function Cards({id, dataLength, fetchMore, hasMore, loader, children}){
        return(
            <div id={id} className=" w-auto grid sm:h-28 sm:grid-flow-row sm:gap-4 sm:grid-cols-3 grid-cols-1 md:grid-cols-1 mt-3">
                <InfiniteScroll dataLength={dataLength} next={fetchMore} hasMore={hasMore} loader={loader} scrollableTarger={id}>   
                    {children}
                </InfiniteScroll>
             </div>
        );
    
        
    }
