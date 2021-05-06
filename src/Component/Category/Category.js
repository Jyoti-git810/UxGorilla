import React,{useState,useEffect} from 'react';
import styles from '../Category/category.module.css';
import TableContainer from '@material-ui/core/TableContainer';
import {Table,TableBody,TableCell,TableHead,TableRow,Paper} from '@material-ui/core';
import _ from 'lodash';

 const Category = () => {
     const [productName, setproductName] = useState("");
     const [productPrice, setproductPrice] = useState("");
     const [productDes, setproductDes] = useState("");
     const [productImage, setproductImage] = useState("");
    const [counter, setcounter] = useState(0)
     const [FileName, setFileName] = useState('Choose File...');

     const onFormSubmit=(e)=>{
         e.preventDefault();
        let value= localStorage.getItem("product");
        let productData=[];
        if(value){
            productData=JSON.parse(value);
        }
       let DataPattern={productName:productName,productPrice:productPrice,productDes:productDes,productImage:productImage}
         localStorage.setItem("product",JSON.stringify([...productData,DataPattern]));
         setcounter(counter+1)
    }
   const onImageChange=(e)=>{
        let File=new FileReader();
        File.readAsDataURL(e.target.files[0]);
        File.onload=()=>{
            setproductImage(File.result);
            setFileName(e.target.files[0].name);
        }
    }
    let Data=localStorage.getItem("product");
     let productInfo=[];
      if(Data){
          productInfo=JSON.parse(Data)
      }
    let newData=[];
    const onRemoveItem=(id)=>{
         newData=productInfo.filter((value,key)=>(
           id!=key
         ))
         setcounter(counter+1)
        localStorage.setItem("product",JSON.stringify(newData))
    }
    return (
        <div className={styles.category_container}>
            <form className={styles.form_container} onSubmit={onFormSubmit}>
                <div className={styles.input_sections}>
                    <label>Product Name</label>
                    <input type="text"  name="productName" value={productName} placeholder="Enter Product Name" onChange={(e)=>setproductName(e.target.value)}></input>
                </div>
               <div className={styles.input_sections}>
                    <label>Price</label>
                    <input type="number" value={productPrice} name="productPrice" placeholder="Product Price" onChange={(e)=>setproductPrice(e.target.value)}></input>
               </div>
                <div className={styles.input_sections}>
                    <label>Product Description</label>
                    <textarea name="productDescription" value={productDes} placeholder=" Product Description" onChange={(e)=>setproductDes(e.target.value)}></textarea>
                </div>
               <div className={styles.input_sections} id={styles.inputFile}>
                   <label>Product Image</label>
                   <input type="file" id="upload" name="productImage" onChange={onImageChange} accept="image/*"></input>
                    <label className={styles.customFileUpload} htmlFor="upload">
                        <span className={styles.FileName} id="name">{FileName}</span>
                        <span className={styles.BrowseButton}>Browse</span>
                    </label>
               </div>
               <button className={styles.button_submit}
               type="submit">Add product</button>
            </form>
            <div className={styles.productList}>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
          {productInfo.map((row,key) => (
            <TableRow key={key}>
              <TableCell align="left"><img src={row.productImage}/></TableCell>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="left">{row.productDes}</TableCell>
              <TableCell align="left">{row.productPrice}</TableCell>
              <TableCell align="left"><span onClick={()=>onRemoveItem(key)}>Remove</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}
export default Category