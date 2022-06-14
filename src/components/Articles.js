import { useReducer, useEffect } from "react";
import axios from "axios";
import { auto } from "@popperjs/core";
import { useState } from "react";

const initialState = {
    isLoading: false,
    error: null,
    data: null,
};

const reduce = (state, action) => {
    //console.log("reducer", state, action);
    switch (action.type) {

        case "getArticleSuccess":
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case "getArticleFailure":
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

const Articles = () => {


    ///////useReducer Hook /////////
    const [state, dispatch] = useReducer(reduce, initialState);

    //STYLING//
    const cardStyles = {
        container: {
            display: "center",
            height: 100,
            width: auto,
            boxShadow: "0 0 3px 2px yellow",
            alignItems: "center",
            padding: 10,
            borderRadius: 30,
            color: "white",
            marginLeft: 10,
            fontWeight: "bold"
        },

    };


    useEffect(() => {
        axios
            .get("https://newsapi.org/v2/everything?q=health&apiKey=9cb992b0ae88478dbbdc0190248434a1")
            .then((res) => {
                console.log("res", res);
                dispatch({ type: "getArticleSuccess", payload: res.data });
            })
            .catch(error => {
                dispatch({ type: "getArticleFailure" });
            });
    }, []);
    console.log(state)



    //SEARCH BUTTON MAGIC///////

    ////////SEARCH BUTTON MAGIC//////



    return (


        <div>
            <h1>Journals! </h1>
            {state.isLoading ? 'Loading...' : state?.data?.articles?.map((article, index) => {

                return (
                    <div style={cardStyles.container} key={index}>
                        <li>
                            {article.title};
                            <p>
                                <a href={article.url} target="_blank">
                                    Click Here
                                </a>

                            </p>
                        </li>
                    </div>

                )
            })}
            {state.error ? state.error : null}
        </div>

    );
};


export default Articles;