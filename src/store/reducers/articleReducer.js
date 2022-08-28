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
    CLEAR_STATE
} from '../constants/articleConstants';
  
export const articleReducer = (
    state = { pageNumber: 0, articles: [] },
    action
) => {
  
  
    switch (action.type) {
    case ARTICLE_REQUEST:
        return { ...state, loading: true};
  
    case ARTICLE_REQUEST_SUCCESS:
        return {
            loading: false,
            pageNumber: state.pageNumber + 1,
            articles: [...state.articles, ...action.payload],
            done: action.payload.length == 0,
        };
  
    case ARTICLE_REQUEST_FAILE:
        return {
            ...state,
            loading: false,
            pageNumber: state.pageNumber,
            error: action.payload,
        };
  
    case ARTICLE_INITIAL_REQUEST:
        return { ...state, loading: true, pageNumber: 0 };
  
    case ARTICLE_INITIAL_REQUEST_SUCCESS:
        return {
            loading: false,
            pageNumber:  1,
            articles: action.payload,
            done: action.payload.length == 0,
        };
  
    case ARTICLE_INITIAL_REQUEST_FAILE:
        return {
            loading: false,
            pageNumber: 0,
            error: action.payload,
        };
  
    case ARTICLE_SEARCH_REQUEST:
        return { loading: true, articles: [] };
  
    case ARTICLE_SEARCH_REQUEST_SUCCESS:
        return {
            loading: false,
            done: true,
            articles: action.payload,
        };
  
    case ARTICLE_SEARCH_REQUEST_FAILE:
        return {
            loading: false,
            error: action.payload,
        };
  
    case CLEAR_STATE:
        return {};
  
    default:
        return state;
    }
};