import axios from 'axios'

export function fetch(
        fetchingAction,
        data = undefined,
        onSuccess = undefined
    ){
    return function(dispatch){
        if (data !== undefined){
            data = {
                data: data
            };
        }
        dispatch({
            type: fetchingAction
        });
        return axios({
            url: '/rest',
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: {
                action: fetchingAction,
                ...data
            }
        })
            .then(function(response) {
                if(onSuccess!==undefined){
                    onSuccess(dispatch, response.data);
                }else{
                    dispatch({
                        type: fetchingAction + "_OK",
                        json: response.data,
                        status: response.status,
                        message: response.statusText
                    });
                }
            })
            .catch(function (error) {
                dispatch({
                    type: fetchingAction + "_ERROR",
                    json: error.response.data,
                    status: error.response.status,
                    message: error.response.statusText
                });
            });
    }
};
