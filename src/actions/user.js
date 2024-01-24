import axios from "axios";

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });

        const { data } = await axios.get("/api/v1/user");
        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,

        });

    } catch (error) {

        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message,

        });

    }
}


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });

        const { data } = await axios.post(
            "/api/v1/login",
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message

        });

    } catch (error) {

        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message,

        });

    }
}


export const logout = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST",
        });

        const { data } = await axios.get(
            "/api/v1/logout",
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message

        });

    } catch (error) {

        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message,

        });

    }
}



export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOAD_USER_REQUEST",
        });

        const { data } = await axios.get(
            "/api/v1/me",
            {
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user

        });

    } catch (error) {

        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message,

        });

    }
}