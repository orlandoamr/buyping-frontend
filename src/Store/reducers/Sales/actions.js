import { privateAxios } from "../../utils/Axios"

const FormData = require('form-data');
const formData = new FormData();

export const fetchSaleData = (dispatch, page, pageItem,text)=>{
    dispatch(
        {
            type:"SALES_START_FETCH",
            payload:null
        }
    )
    privateAxios.get(`/api/products/facet/${page}/${pageItem}`)
    .then(({data})=>{
        console.log(data);
        dispatch(
            {
                type:"SALES_FETCH_SUCCESS",
                payload: data
            }
        )
        
    })
    .catch((err)=>{
        console.log(err);
        dispatch(
            {
                type:"SALES_FETCH_ERROR",
                payload: ["Error al traer info"]
            }
        )
    })
}

export const fetchProdData = (dispatch, page, pageItem,text)=>{
    dispatch(
        {
            type:"SALES_START_FETCH",
            payload:null
        }
    )
    privateAxios.get(`/api/products/byloggeduser/${page}/${pageItem}`)
    .then(({data})=>{
        console.log(data);
        dispatch(
            {
                type:"SALES_FETCH_SUCCESS",
                payload: data
            }
        )
       
    })
    .catch((err)=>{
        console.log(err);
        dispatch(
            {
                type:"SALES_FETCH_ERROR",
                payload: ["Error al traer info"]
            }
        )
    })
}

export const addNewSale = (dispatch, name, description, price, quantity, status, contact,imgurl,navigate, to) => {
    
    dispatch(
        {
            type:"SALE_ADD_START",
            payload:null
        }
    );

    formData.append('image', imgurl);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('status', status);
    formData.append('contact', contact);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    privateAxios.post('/api/products/new',formData, config)
      .then(({data})=>{
        console.log(data);
        dispatch(
            {
                type:"SALE_ADD_SUCCES",
                payload:null
            }
        );
        dispatch({ type:"SALE_LIST_CLEAR",payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
            {
                type:"SALE_ADD_ERROR",
                payload:null
            }
        )
      });


}

export const DelOneProd = (dispatch,id) => {
    
    dispatch(
        {
            type:"SALE_DEL_START",
            payload:null
        }
    );


    privateAxios.delete(`/api/products/delete/${id}`)
      .then(({data})=>{
        console.log(data);
        dispatch(
            {
                type:"SALE_DEL_SUCCES",
                payload:null
            }
        );
        dispatch({ type:"SALE_LIST_CLEAR",payload:null});
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
            {
                type:"SALE_DEL_ERROR",
                payload:null
            }
        )
      });


}