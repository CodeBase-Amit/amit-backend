class ApiResponse {
    construcctor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statuscode < 400;
        this.errors = errors;
    }
}