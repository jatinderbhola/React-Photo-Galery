import http from '../http-common';

class PhotoDataService {

    getAll() {
        return http.get("/photos");
    }

}

export default new PhotoDataService();