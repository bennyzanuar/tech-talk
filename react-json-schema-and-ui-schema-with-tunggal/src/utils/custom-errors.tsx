const transformErrors = (errors: any) => {
  return errors.map((error: any) => {
    console.log("error.message ", error);

    if (error.message === "should be integer") {
      error.message = "Harus berupa angka!";
    }

    if (error.message === "should be string") {
      error.message = "Harus berupa karakter!";
    }

    if (error.name === "required") {
      error.message = "Wajib diisi!";
    }

    if (error.name === "minLength") {
      error.message = "Tidak boleh kurang dari " + error.params.limit + " karakter!";
    }

    if (error.name === "maxLength") {
      error.message = "Tidak boleh lebih dari " + error.params.limit + " karakter!";
    }

    if (error.name === "format" && error.params.format === "email") {
      error.message = "Harus sesuai dengan format " + error.params.format + "!";
    }

    if (error.name === "format" && error.params.format === "phone-id") {
      error.message = "Nomor Ponsel hanya berupa angka dan harus dimulai dengan 081, 082, 083, 085, 087, 088, 089.";
    }
    return error;
  });
};

export default transformErrors;
