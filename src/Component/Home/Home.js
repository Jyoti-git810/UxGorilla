import React,{useState,useEffect} from 'react';
import styles from '../Home/home.module.css';


 const Home = () => {
     const [productInfo, setproductInfo] = useState([]);
    useEffect(() => {
        let Data=localStorage.getItem("product");
        if(Data){
          setproductInfo(JSON.parse(Data));
        }
        }, [])
    return (
        <div className={styles.productInfoList}>
             {productInfo.map((value,key)=>(
                <div className={styles.productCard} key={key}>
                <img src={value.productImage}></img>
                <div className={styles.cardData}>
                    <span>{value.productName}</span>
                    <span>{value.productPrice}:-</span>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Home