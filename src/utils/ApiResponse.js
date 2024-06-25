class ApiResponse {
  constructor(data, statusCode, message = "Success") {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode < 400
  }
}

export { ApiResponse }