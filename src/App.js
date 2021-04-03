import './App.css';
import Header from "./components/menu/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Test from "./components/test/Test";
import BodySchool from "./components/body/BodySchool";
import School from "./components/template-school/School";
import React from "react";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <div className="school-wrapper">
                    <Route path="/" component={BodySchool} exact/>
                </div>
                <div className="content-side">
                    <Route path="/test" component={Test} />
                    <Route path="/miletskaya_school" render={(props) => (<School folder="miletskaya_school"/>)} />
                    <Route path="/efesskaya_school" render={(props) => (<School folder="efesskaya_school"/>)} />
                    <Route path="/pifagor_scholl" render={(props) => (<School folder="pifagor_scholl"/>)} />
                    <Route path="/eleiskaya_school" render={(props) => (<School folder="eleiskaya_school"/>)} />
                    <Route path="/atomic_school" render={(props) => (<School folder="atomic_school"/>)} />
                    <Route path="/sofists_school" render={(props) => (<School folder="sofists_school"/>)} />
                    <Route path="/socrat_school" render={(props) => (<School folder="socrat_school"/>)} />
                    <Route path="/platon_school" render={(props) => (<School folder="platon_school"/>)} />
                    <Route path="/aristotel_school" render={(props) => (<School folder="aristotel_school"/>)} />
                    <Route path="/epic_school" render={(props) => (<School folder="epic_school"/>)} />
                    <Route path="/sceptic_school" render={(props) => (<School folder="sceptic_school"/>)} />
                    <Route path="/stoik_school" render={(props) => (<School folder="stoik_school"/>)} />
                    <Route path="/kinik_school" render={(props) => (<School folder="kinik_school"/>)} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
