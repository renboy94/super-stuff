import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/nav/NavBar";
import Login from "../components/auth/Login";
import styles from "../styles/Home.module.css";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div>
        <Login />
      </div>
    </React.Fragment>
  );
};

export default Home;
