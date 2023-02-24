import * as React from "react";
import { Boo } from "./Boo";
export const Hello = () => {
  const name = 'kkoo';
  function changeName(name: string) {
    return '00' + name + '00';
  }
  function handleClick(e: any) {
    e.preventDefault();
    console.log('xxxxx');
  }
  return <div>
    <h1>test from {changeName(name)} test</h1>
    <div><button onClick={handleClick}>click</button></div>
    <Boo name="Bob" count={4}></Boo>
    <Boo name="Bob" count={100}></Boo>
    <Boo name="Bob" count={214}></Boo>
  </div>
};
