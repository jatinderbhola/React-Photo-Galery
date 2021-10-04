import http from '../http-common';

class WebsiteDateService {

    get host() {
        return "/ws";
    }


    post(id) {
        // if (typeof id === null) {
        //     Promise.reject(new Error('photo id is missing in the request'));
        // }
        return http.post(`website/photos/${id}`);
    }

}

export default new WebsiteDateService();