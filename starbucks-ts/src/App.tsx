import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";

interface Props {}
  const tabs =[
    {title:"25", content:"This is tab 1 content"},
    {title:"50", content:"This is tab 2 content"},
    {title:"150", content:"This is tab 3 content"},
    {title:"200", content:"This is tab 4 content"},
    {title:"400", content:"This is tab 5 content"}

  ];


const App: React.FC<Props> = (props) => {
  
  return (
    <>
    <Tabs>
    {tabs.map((tab) => (
      <Tab title={tab.title}>{tab.content}</Tab>
    )) }
    </Tabs>

    <div className="h-40"></div>
    <Tabs>
      <Tab title="25">Tab 1 content</Tab>
      <Tab title="50">Tab 2 content</Tab>
      <Tab title="150">Tab 3 content</Tab>
      <Tab title = "200">Tab 4 content</Tab>
      <Tab title = "400">Tab 5 content</Tab>

    </Tabs>
    </>
  );
};

App.defaultProps = {};

export default App;
