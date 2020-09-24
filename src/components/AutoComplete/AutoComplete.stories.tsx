import React from "react";

import { storiesOf } from "@storybook/react";
import AutoComplete, { DataSourceType } from "./index";
import { action } from "@storybook/addon-actions";
import axios from "axios";

interface LakersPlayerProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  value: string;
  url: string;
}

const defaultComplete = () => {
  const lakers = [
    { value: "bradley", number: 11 },
    { value: "pope", number: 1 },
    { value: "caruso", number: 4 },
    { value: "cook", number: 2 },
    { value: "cousins", number: 15 },
    { value: "james", number: 23 },
    { value: "AD", number: 3 },
    { value: "green", number: 14 },
    { value: "howard", number: 39 },
    { value: "kuzma", number: 0 },
  ];

  const handleFetch = (query: string) =>
    lakers.filter((player) => player.value.includes(query));

  return (
    <AutoComplete
      placeholder="请输入"
      fetchSuggestions={handleFetch}
      onSelect={action("select")}
    />
  );
};

const renderAutoComplete = () => {
  const lakers = [
    { value: "bradley", number: 11 },
    { value: "pope", number: 1 },
    { value: "caruso", number: 4 },
    { value: "cook", number: 2 },
    { value: "cousins", number: 15 },
    { value: "james", number: 23 },
    { value: "AD", number: 3 },
    { value: "green", number: 14 },
    { value: "howard", number: 39 },
    { value: "kuzma", number: 0 },
  ];

  const handleFetch = (query: string) =>
    lakers.filter((player) => player.value.includes(query));

  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakersPlayerProps>;
    return (
      <>
        <h2>Name:{itemWithNumber.value}</h2>
        <p>Number:{itemWithNumber.number}</p>
      </>
    );
  };

  return (
    <AutoComplete
      placeholder="请输入"
      fetchSuggestions={handleFetch}
      onSelect={action("select")}
      renderOption={renderOption}
    />
  );
};

const fetchAutoComplete = () => {
  const handleFetch = (query: string) =>
    axios.get(`https://api.github.com/search/users?q=${query}`).then((res) => {
      const data = res.data.items || [];
      return data.slice(0, 10).map((item: any) => ({
        value: item.login,
        ...item,
      }));
    });

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <p>url: {itemWithGithub.url}</p>
      </>
    );
  };
  return (
    <AutoComplete
      placeholder="请输入"
      fetchSuggestions={handleFetch}
      onSelect={action("select")}
      renderOption={renderOption}
    />
  );
};

storiesOf("AutoComplete Component", module)
  .add("默认的AutoComplete", defaultComplete)
  .add("自定义下拉选项", renderAutoComplete)
  .add("异步下拉选项", fetchAutoComplete);
