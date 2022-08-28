import axios from 'axios';
import {
    ARTICLE_REQUEST,
    ARTICLE_REQUEST_SUCCESS,
    ARTICLE_REQUEST_FAILE,
    ARTICLE_INITIAL_REQUEST,
    ARTICLE_INITIAL_REQUEST_SUCCESS,
    ARTICLE_INITIAL_REQUEST_FAILE,
    ARTICLE_SEARCH_REQUEST,
    ARTICLE_SEARCH_REQUEST_SUCCESS,
    ARTICLE_SEARCH_REQUEST_FAILE,
    CLEAR_STATE,
} from '../constants/articleConstants';

export const fetchArticles = (pageNumber) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ARTICLE_REQUEST,
            });

            const data = await axios.get(`/articles?page=${pageNumber}`);
            dispatch({
                type: ARTICLE_REQUEST_SUCCESS,
                payload: data.data.response.docs,

                // data.data.response.docs.length <= 0 ? { done: true } :
            });
        } catch (error) {
            dispatch({
                type: ARTICLE_REQUEST_FAILE,
                payload:
          error.message == 'Network Error'
              ? error.message
              : error.response.data.message,
            });
        }
    };
};

export const fetchInitialArticles = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ARTICLE_INITIAL_REQUEST,
            });

            const data = await axios.get('/articles?page=0');
            dispatch({
                type: ARTICLE_INITIAL_REQUEST_SUCCESS,
                payload: data.data.response.docs,
            });
        } catch (error) {
            dispatch({
                type: ARTICLE_INITIAL_REQUEST_FAILE,
                payload:
          error.message == 'Network Error'
              ? error.message
              : error.response.data.message,
            });
        }
    };
};

export const searchArticles = (string) => {
    return async (dispatch) => {
        const result = [];
        let counter = 0;
        let empty = 0;
        let current;
        try {


            dispatch({
                type: ARTICLE_SEARCH_REQUEST,
            });


            do {
                const data = await axios
                    .get(`/articles?page=${counter}`)
                    .then((result) =>{
                        counter ++;
                        current = result.data.response.docs;
                        return result.data.response.docs;
                    });

                if (current.length <= 0){
                    empty +=1;
                    continue;
                }
                const filtered = (data.filter(i=> i.lead_paragraph.search(`${string}`) > -1  || i.abstract.search(`${string}`) > -1 ));
                filtered.forEach(i=>result.push(i));

          
        
            } while (empty < 3);
        } catch (error) {
            dispatch({
                type: ARTICLE_SEARCH_REQUEST_FAILE,
                payload:
          error.message == 'Network Error'
              ? error.message
              : error.response.data.message,
            });
            return;
        }

        dispatch({
            type: ARTICLE_SEARCH_REQUEST_SUCCESS,
            payload: [...new Set(result)],
        });
    };
};



export const clearState = () => (dispatch) => {
    dispatch({ type: CLEAR_STATE });
};