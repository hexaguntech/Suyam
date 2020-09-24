import http from '../http-common';

class ApplicantDataService {
  registerApplicant(data) {
    return http.post('/applicant/create', data);
  }

  getApplicantById(id) {
    return http.get(`/applicant/get/${id}`);
  }

  updateApplicant(id, data) {
    return http.put(`/applicant/update/${id}`, data);
  }

  deleteApplicant(id) {
    return http.delete(`/applicant/delete/${id}`);
  }
}

export default new ApplicantDataService();
