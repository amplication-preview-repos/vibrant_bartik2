import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KeywordList } from "./keyword/KeywordList";
import { KeywordCreate } from "./keyword/KeywordCreate";
import { KeywordEdit } from "./keyword/KeywordEdit";
import { KeywordShow } from "./keyword/KeywordShow";
import { TrendAnalysisList } from "./trendAnalysis/TrendAnalysisList";
import { TrendAnalysisCreate } from "./trendAnalysis/TrendAnalysisCreate";
import { TrendAnalysisEdit } from "./trendAnalysis/TrendAnalysisEdit";
import { TrendAnalysisShow } from "./trendAnalysis/TrendAnalysisShow";
import { SearchResultList } from "./searchResult/SearchResultList";
import { SearchResultCreate } from "./searchResult/SearchResultCreate";
import { SearchResultEdit } from "./searchResult/SearchResultEdit";
import { SearchResultShow } from "./searchResult/SearchResultShow";
import { RequestList } from "./request/RequestList";
import { RequestCreate } from "./request/RequestCreate";
import { RequestEdit } from "./request/RequestEdit";
import { RequestShow } from "./request/RequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Wordstat Data Analysis"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Keyword"
          list={KeywordList}
          edit={KeywordEdit}
          create={KeywordCreate}
          show={KeywordShow}
        />
        <Resource
          name="TrendAnalysis"
          list={TrendAnalysisList}
          edit={TrendAnalysisEdit}
          create={TrendAnalysisCreate}
          show={TrendAnalysisShow}
        />
        <Resource
          name="SearchResult"
          list={SearchResultList}
          edit={SearchResultEdit}
          create={SearchResultCreate}
          show={SearchResultShow}
        />
        <Resource
          name="Request"
          list={RequestList}
          edit={RequestEdit}
          create={RequestCreate}
          show={RequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
