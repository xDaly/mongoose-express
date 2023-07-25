  exports.setSuccess=(statusCode, message, data)=> {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
  }

  exports.setError=(statusCode, message)=> {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  exports.send=(res)=> {
    const result = {
      status: this.statusCode,
      message: this.message,
      data: this.data,
    };

    if (this.type == "success") {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
