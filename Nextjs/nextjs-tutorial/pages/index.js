import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ItemList from "../src/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Home | LEN</title>
      </Head>
      <div>Home page 입니다.</div>
      <ItemList list={list} />
    </div>
  );
}
